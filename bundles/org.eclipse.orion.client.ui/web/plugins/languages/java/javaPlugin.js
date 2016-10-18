/*******************************************************************************
 * @license
 * Copyright (c) 2014, 2016 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
/*eslint-env browser, amd*/
define([
'orion/plugin', 
"orion/Deferred",	
'orion/editor/stylers/text_x-java-source/syntax', 
'orion/editor/stylers/application_x-jsp/syntax',
"plugins/languages/java/javaProject",
'orion/serviceregistry',
"plugins/languages/java/ipc",
"plugins/languages/java/javaValidator"
], function(PluginProvider, Deferred, mJava, mJSP, JavaProject, mServiceRegistry, IPC, JavaValidator) {

	var ipc = new IPC('/languageServer'),
		project,
		validator,
		LOG_ERRORS = localStorage.getItem('java.langserver.logmessage.error') === 'true',
		LOG_WARNINGS = localStorage.getItem('java.langserver.logmessage.warn') === 'true',
		LOG_INFO = localStorage.getItem('java.langserver.logmessage.error.info') === 'true';

	/**
	 * @name initializeIPC
	 * @param serviceRegistry the service registry
	 * @description Connects the IPC instance to the websocket and sets the deafult listeners
	 */
	function initializeIPC(serviceRegistry) {
		ipc.connect();
		/**
		 * Default logging listener
		 */
		ipc.addListener(ipc.MESSAGE_TYPES.logMessage,
			{
				handleNotification: function handleNotification(data) {
					if(data !== null && typeof data === 'object') {
						if(data.params && (LOG_ERRORS && data.params.type === 1) || (LOG_WARNINGS && data.params.type === 2) || (LOG_INFO && data.params.type === 3)) {
							if(typeof data === 'object' && data !== null) {
								console.log(JSON.stringify(data));
							} else if(typeof data === 'string') {
								console.log(data);
							}
						}
					}
				}
			}
		);
		/**
		 * Listener to handle diagnostics notifications
		 */
		ipc.addListener(ipc.MESSAGE_TYPES.publishDiagnostics,
			{
				handleNotification: function handleNotification(data) {
					validator.updateDiagnostics(data.params.uri, data.params.diagnostics);
				}
			}
		);
		/**
		 * Listener to handle diagnostics notifications
		 */
		ipc.addListener(ipc.MESSAGE_TYPES.status,
			{
				handleNotification: function handleNotification(data) {
					var statusService = serviceRegistry.getService("orion.page.message"); //$NON-NLS-1$
					if (statusService) {
						if (data.params.type === "Started") {
							statusService.setProgressResult("Java " + data.params.type + " " + data.params.message) ;
						} else {
							statusService.setProgressMessage("Java " + data.params.type + " " + data.params.message) ;
						}
					}
				}
			}
		);
	}
	/**
	 * Single place to add in all of the provide hooks for the various services
	 */
	function hookAPIs(provider) {
		/**
		 * Content Assist
		 */
		provider.registerService("orion.edit.contentassist",
			{
				/**
				 * @callback
				 */
				computeContentAssist: function(editorContext, args) {
					return editorContext.getFileMetadata().then(function(meta) {
						return getPosition(editorContext, args.selection.start).then(function(position) {
							return ipc.completion(meta.location, position).then(function(results) {
									var items  = results.items;
									if (Array.isArray(items) && items.length > 0) {
										return items.map(function(item) {
											var temp = {
												name: item.label,
												proposal: item.insertText,
												description: ' (' + resolveCompletionKind(item.kind) + ')',
												relevance: 100,
												style: 'emphasis', //$NON-NLS-1$
												overwrite: true,
												kind: 'java' //$NON-NLS-1$
											};
											if (item.documentation) {
												temp.hover = {
													content: item.documentation,
													type: 'markdown'
												};
											}
											return temp;
										});
									}
									return new Deferred().resolve([]);
								},
								/* @callback */
								function(err) {
									return new Deferred().resolve([]);
								});
						});
					});
				}
			},
			{
				contentType: ["text/x-java-source", "application/x-jsp"],  //$NON-NLS-1$ //$NON-NLS-2$
				name: 'Java Content Assist',  //$NON-NLS-1$
				id: "orion.edit.contentassist.java",  //$NON-NLS-1$
				charTriggers: "[.]",  //$NON-NLS-1$
				excludedStyles: "(string.*)"  //$NON-NLS-1$
			}
		);
		/**
		 * Symbol outline
		 */
		provider.registerService("orion.edit.outliner",
			{
				/**
				 * @callback
				 */
				computeOutline: function computeOutline(editorContext, options) {
					return editorContext.getFileMetadata().then(function(meta) {
						return ipc.documentSymbol(meta.location).then(function(results) {
							if(Array.isArray(results) && results.length > 0) {
								var outline = [];
								results.forEach(function(result) {
									if(!result.containerName) {
										outline.push({label: result.name, children: []});
									} else {
										var idx = _findContainerIndex(outline, result.containerName),
											_p;
										if(idx < 0) {
											_p = {label: result.containerName, children: []};
											outline.push(_p);
										} else {
											_p = outline[idx];
										}
										var offset = result.location.range.start.character;
										_p.children.push({
											label: result.name,
											labelPost: ' ('+resolveSymbolKind(result.kind)+')',
											line: result.location.range.start.line+1,
											offset: offset,
											length: result.location.range.end.character-offset
										});
									}
								});
								return outline;
							}
							return new Deferred().resolve([]);
						});
					});
				}
			},
			{
				contentType: ["text/x-java-source", "application/x-jsp"],  //$NON-NLS-1$
				name: "Java Symbol Outline",
				title: "Java Symbols",
				id: "orion.java.symbols.outliner.source"  //$NON-NLS-1$
			}
		);

		function convertRange(editorContext, range) {
			return editorContext.getLineStart(range.start.line).then(function(startLineOffset) {
				return editorContext.getLineStart(range.end.line).then(function(endLineOffset) {
					return {
						start: range.start.character+startLineOffset,
						end: range.end.character+endLineOffset,
					};
				});
			});
		}
		
		//TODO only show command when the provider is available in capabilities
		//TODO send the options to the language server
		//TODO integrate with the new orion formatting service. We may have to change the orion service because
		// the changes are done in the server side.
		provider.registerServiceProvider("orion.edit.command", //$NON-NLS-1$
			{
				execute: /** @callback */ function(editorContext, options) {
					return editorContext.getFileMetadata().then(function(metadata) {
						return ipc.formatDocument(metadata.location, {}).then(function(edits) {
							if (Array.isArray(edits) && edits.length !== 0) {
								return Deferred.all(edits.map(function(edit) {
									return convertRange(editorContext, edit.range);
								})).then(function(selections) {
									var text = edits.map(function(e) {
										return e.newText;
									});
									editorContext.setText({text: text, selection: selections, preserveSelection: true});
								});
							}
							return new Deferred().resolve([]);
						});
					});
				}
			},
			{
				name: "Format",
				id : "orion.java.format",  //$NON-NLS-1$
	//			key : [ 114, false, false, false, false],
				contentType: ["text/x-java-source", "application/x-jsp"]  //$NON-NLS-1$ //$NON-NLS-2$
			}
		);
		provider.registerServiceProvider("orion.edit.command", //$NON-NLS-1$
			{
				execute: /** @callback */ function(editorContext, options) {
					return editorContext.getFileMetadata().then(function(metadata) {
						return editorContext.getSelection().then(function(selection) {
							return getPosition(editorContext, selection.start).then(function(start) {
								return getPosition(editorContext, selection.end).then(function(end) {
									return ipc.rangeFormatting(metadata.location, start, end, {}).then(function(edits) {
										// if there is no edits (formatting the code doesn't provide any edit - already formatted), simply return
										if (Array.isArray(edits) && edits.length !== 0) {
											return Deferred.all(edits.map(function(edit) {
												return convertRange(editorContext, edit.range);
											})).then(function(selections) {
												var text = edits.map(function(e) {
													return e.newText;
												});
												editorContext.setText({text: text, selection: selections, preserveSelection: true});
											});
										}
										return new Deferred().resolve([]);
									});
								});
							});
						});
					});
				}
			},
			{
				name: "Format Selection",
				id : "orion.java.format.range",  //$NON-NLS-1$
	//			key : [ 114, false, false, false, false],
				contentType: ["text/x-java-source", "application/x-jsp"]  //$NON-NLS-1$ //$NON-NLS-2$
			}
		);
		provider.registerServiceProvider("orion.edit.command", //$NON-NLS-1$
			{
				execute: /** @callback */ function(editorContext, options) {
					return editorContext.getFileMetadata().then(function(metadata) {
						return editorContext.getSelection().then(function(selection) {
							return getPosition(editorContext, selection.start).then(function(start) {
								return ipc.references(metadata.location, start, {includeDeclaration: true}).then(function(edits) {
									console.log(edits);
								});
							});
						});
					});
				}
			},
			{
				name: "References",
				id : "orion.java.references",  //$NON-NLS-1$
	//			key : [ 114, false, false, false, false],
				contentType: ["text/x-java-source", "application/x-jsp"]  //$NON-NLS-1$ //$NON-NLS-2$
			}
		);
		
		provider.registerServiceProvider("orion.edit.command", //$NON-NLS-1$
			{
				execute: /** @callback */ function(editorContext, options) {
					return editorContext.getFileMetadata().then(function(metadata) {
						return editorContext.getSelection().then(function(selection) {
							return getPosition(editorContext, selection.start).then(function(position) {
								return ipc.definition(metadata.location, position).then(function(loc) {
									if (!loc) {
										return;
									}
									if (Array.isArray(loc)) {
										loc = loc[0];
									}
									if (loc.range.start.line === loc.range.end.line) {
										var sel = {
											line: loc.range.start.line + 1,
											offset: loc.range.start.character,
											length: loc.range.end.character - loc.range.start.character
										};
										return editorContext.openEditor(loc.uri, sel);
									}
									return convertRange(editorContext, loc.range).then(function(selection) {
										editorContext.openEditor(loc.uri, selection);
									});
								});
							});
						});
					});
				}
			},
			{
				name: "Open Declaration",
				id : "orion.java.openDeclaration",  //$NON-NLS-1$
				key : [ 114, false, false, false, false],
				contentType: ["text/x-java-source", "application/x-jsp"]  //$NON-NLS-1$ //$NON-NLS-2$
			}
		);

		/**
		 * Validator
		 */
		provider.registerService(
			"orion.edit.validator",
			validator,
			{
				contentType: ["text/x-java-source", "application/x-jsp"]
			}
		);
		/**
		 * Hover
		 */
		provider.registerService("orion.edit.hover",
			{
				computeHoverInfo: function computeHoverInfo(editorContext, args) {
					if(args.proposal && args.proposal.kind === 'java') {
						return args.proposal.hover;
					}
					if (args.offset === undefined) {
						return "";
					}
					return editorContext.getFileMetadata().then(function(meta) {
						return getPosition(editorContext, args.offset).then(function(position) {
							return ipc.hover(meta.location, position).then(function(result) {
								var hover = {type: 'markdown'};
								if(typeof result.contents === 'string') {
									hover.content = result.contents;
								} else if(result.contents !== null && typeof result.contents === 'object') {
									hover.content = result.contents.value;
								}
								return new Deferred().resolve(hover);
							},
							/* @callback */ function(err) {
								return new Deferred().resolve('');
							});
						});
					});
				}
			},
			{
				name: "Java Hover",
				contentType: ["text/x-java-source", "application/x-jsp"]	//$NON-NLS-1$ //$NON-NLS-2$
			}
		);
		/**
		 * Occurrences
		 */
		provider.registerService("orion.edit.occurrences",
			{
				computeOccurrences: function computeOccurrences(editorContext, args) {
					return editorContext.getSelectionText().then(function(text) {
						if (text.trim().length === 0) {
							return new Deferred().resolve([]);
						}
						return editorContext.getFileMetadata().then(function(meta) {
							return getPosition(editorContext, args.selection.start).then(function(position) {
								return ipc.documentHighlight(meta.location, position).then(function(results) {
									if(Array.isArray(results) && results.length > 0) {
										return Deferred.all(results.map(function(result) {
											return editorContext.getLineStart(result.range.start.line).then(function(offset) {
												return {
													start: result.range.start.character+offset,
													end: result.range.end.character+offset
												};
											});
										}));
									} 
									return new Deferred().resolve([]);
								},
								/* @callback */ function(err) {
									return new Deferred().resolve([]);
								});
							});
						});
					});
				}
			},
			{
				contentType: ["text/x-java-source", "application/x-jsp"]	//$NON-NLS-1$ //$NON-NLS-2$
			}
		);
	}
	
	function _findContainerIndex(list, container) {
		var item = list[list.length-1];
		if(item && item.label === container) {
			return list.length-1;
		}
		for (var i = 0; i < list.length; i++) {
			if(list[i].label === container) {
				return i;
			}
		}
		return -1;
	}
	
	/**
	 * @name resolveSymbolKind
	 * @description Converts the given symbol kind into its name
	 * @param {number} num The symbl kind
	 * @returns {String} The name of the symbol kind
	 */
	function resolveSymbolKind(num) {
		switch(num) {
			case 1: return 'File';
			case 2: return 'Module';
			case 3: return 'Namespace';
			case 4: return 'Package';
			case 5: return 'Class';
			case 6: return 'Method';
			case 7: return 'Property';
			case 8: return 'Field';
			case 9: return 'Constructor';
			case 10: return 'Enum';
			case 11: return 'Interface';
			case 12: return 'Function';
			case 13: return 'Variable';
			case 14: return 'Constant';
			case 15: return 'String';
			case 16: return 'Number';
			case 17: return 'Boolean';
			case 18: return 'Array';
			default: return 'Unknown';
		}
	}
	
	/**
	 * @name getPosition
	 * @description Return a document position object for use with the protocol
	 * @param {?} editorContext TRhe backing editor context
	 * @param {number} offset The Orion editor offset
	 * @returns {Deferred} Return a deferred that will resolve to a position object for the protocol textDocument requests
	 */
	function getPosition(editorContext, offset) {
		return editorContext.getLineAtOffset(offset).then(function(line) {
			return editorContext.getLineStart(line).then(function(lineOffset) {
				return {line: line, character: offset-lineOffset};
			});
		});
	}
	
	/**
	 * Converts the completion result kind into a human-readable string
	 */
	function resolveCompletionKind(num) {
		switch(num) {
			case 1: return 'Text';
			case 2: return 'Method';
			case 3: return 'Function';
			case 4: return 'Constructor';
			case 5: return 'Field';
			case 6: return 'Variable';
			case 7: return 'Class';
			case 8: return 'Interface';
			case 9: return 'Module';
			case 10: return 'Property';
			case 11: return 'Unit';
			case 12: return 'Value';
			case 13: return 'Enum';
			case 14: return 'Keyword';
			case 15: return 'Snippet';
			case 16: return 'Color';
			case 17: return 'File';
			case 18: return 'Reference';
			default: return 'Unknown';
		}
	}
	/**
	 * Register all of the service providers 
	 */
	function registerServiceProviders(pluginProvider) {
	}

	return {
		connect: function connect() {
			var headers = {
				name: "Orion Java Tool Support",
				version: "1.0",
				description: "This plugin provides Java tools support for Orion."
			};
			var serviceRegistry = new mServiceRegistry.ServiceRegistry();
			project = new JavaProject(serviceRegistry, ipc);
			validator = new JavaValidator(project, serviceRegistry);
			var pluginProvider = new PluginProvider(headers, serviceRegistry);
			pluginProvider.registerServiceProvider("orion.core.contenttype", {}, {
				contentTypes: [
					{
						id: "text/x-java-source",
						"extends": "text/plain",
						name: "Java",
						extension: ["java"]
					},
					{
						id: "application/x-jsp",
						"extends": "text/plain",
						name: "Java Server Page",
						extension: ["jsp"]
					}
				]
			});
			mJava.grammars.forEach(function(current) {
				pluginProvider.registerServiceProvider("orion.edit.highlighter", {}, current);
			});
			mJSP.grammars.forEach(function(current) {
				pluginProvider.registerServiceProvider("orion.edit.highlighter", {}, current);
			});
			/**
			 * editor model changes
			 */
			pluginProvider.registerService("orion.edit.model", //$NON-NLS-1$
				{
					onSaving: project.onSaving.bind(project),
					onModelChanging: project.onModelChanging.bind(project),
					onInputChanged: project.onInputChanged.bind(project)
				},
				{
					contentType: ["text/x-java-source", "application/x-jsp"]  //$NON-NLS-1$ //$NON-NLS-2$
				}
			);
			hookAPIs(pluginProvider);
			pluginProvider.connect();
			initializeIPC(serviceRegistry);
		},
		registerServiceProviders: registerServiceProviders
	};
});
