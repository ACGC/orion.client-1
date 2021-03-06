/*******************************************************************************
 * @license
 * Copyright (c) 2014, 2017 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 * 
 ******************************************************************************/
/* eslint-env amd */
define({//Default message bundle
	"html" : "HTML Validation",
	"htmlFormatter" : "HTML Formatter",
	"htmlOutline" : "HTML Outline",   
	"htmlHover" : "HTML Hover",   
	"htmlContentAssist" : "HTML Content Assist",
	"htmlValidator": "HTML Validator",
	"css" : "CSS Validation",
	"cssOutline" : "CSS Rule Outline",   
	"cssContentAssist" : "CSS Content Assist",   
	"cssFormatter" : "CSS Formatter",
	"cssHover" : "CSS Hover",   
	"csslintValidatorPotential" : "Potential Problems",
	"csslintValidatorCompat" : "Browser Compatibility",
	"csslintValidatorPerf" : "Performance and Maintainability",
	"pluginName": "Orion Web Tools Support",   
	"pluginDescription": "This plug-in provides web language tools support for Orion, including HTML and CSS.",   
	"fontHoverExampleText": "Lorem ipsum dolor...",
	"htmlRenameCommand": "Rename HTML Element",
	"htmlRenameCommandDescription": "Renames the selected HTML element",

	// CSS and HTML formatting options names
	"indentation_space" : "space",
	"indentation_tab" : "tab",
	"indentation_unix" : "Unix",
	"indentation_mac" : "Mac",
	"indentation_windows" : "Windows",
	"collapse_preserve_inline" : "Collapse Preserve inline",
	"collapse" : "Collapse",
	"expand" : "Expand",
	"end_expand" : "End expand",
	"none" : "None",
	"normal" : "Normal",
	"keep" : "Keep",
	"separate" : "Separate",
	"auto" : "Auto",
	"force" : "Force",
	
	// CSS Formatter Settings
	"cssFormattingSettings" : "Formatting Settings for CSS",
	"cssFormatting" : "CSS Formatting",
	"css_indent_size" : "Indentation size:" ,
	"css_indent_char" : "Indentation character:",
	"css_eol" : "Character(s) to use as line terminators:",
	"css_end_with_newline" : "End ouput with newline:",
	"selector_separator_newline" : "Add a newline between multiple selectors:",
	"newline_between_rules" : "Add a newline between CSS rules:",
	"space_around_selector_separator" : "Ensure space around selector separators:",

	// HTML Formatter Settings
	"htmlFormattingOptions" : "Formatting Settings for HTML",
	"htmlFormatting" : "HTML Formatting",
	"html_indent_size" : "Indentation size:",
	"html_indent_char" : "Indentation character:",
	"html_eol" : "Character(s) to use as line terminators:",
	"html_end_with_newline" : "End ouput with newline:",
	"html_preserve_new_lines" : "Preserve line-breaks:",
	"html_max_preserve_new_lines" : "Number of line-breaks to be preserved in one chunk:",
	"html_brace_style" : "Brace Style:",
	"html_wrap_line_length" : "Wrap lines at next opportunity after N characters (0 for unlimited):",
	"indent_inner_html" : "Indent <head> and <body> sections:",
	"indent_handlebars" : "Format and indent {{#foo}} and {{/foo}}:",
	"wrap_attributes" : "Wrap attributes to new lines:",
	"wrap_attributes_indent_size" : "Indent wrapped attributes to after N characters:",
	"extra_liners" : "List of tags that should have an extra newline before them (separate with commas):",
	"indent_scripts" : "Indent scripts:",
	
	//HTML content assist hovers
	"aTagDoc": "The HTML Anchor Element (<a>) defines a hyperlink",
	"abbrTagDoc": "The HTML Abbreviation element (<abbr>) represents an abbreviation and optionally provides a full description for it. If present, the title attribute must contain this full description and nothing else.",
	"acronymTagDoc": "The HTML Acronym Element (<acronym>) allows authors to clearly indicate a sequence of characters that compose an acronym or abbreviation for a word.",
	"addressTagDoc": "The HTML Address Element (<address>) should be used by authors to supply contact information for its nearest <article> or <body> ancestor; in the latter case, it applies to the whole document.",
	"appletTagDoc": "The HTML Applet Element (<applet>) identifies the inclusion of a Java applet.",
	"areaTagDoc": "The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element.",
	"articleTagDoc": "The HTML Article Element (<article>) represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable, e.g., in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, or any other independent item of content. Each <article> should be identified, typically by including a heading (h1-h6 element) as a child of the <article> element.",
	"asideTagDoc": "The HTML <aside> element represents a section of the page with content connected tangentially to the rest, which could be considered separate from that content.",
	"audioTagDoc": "The HTML <audio> element is used to embed sound content in documents. It may contain several audio sources, represented using the src attribute or the <source> element; the browser will choose the most suitable one.",
	"bTagDoc": "The HTML <b> Element represents a span of text stylistically different from normal text, without conveying any special importance or relevance. It is typically used for keywords in a summary, product names in a review, or other spans of text whose typical presentation would be boldfaced. Another example of its use is to mark the lead sentence of each paragraph of an article.",
	"baseTagDoc": "The HTML Base Element (<base>) specifies the base URL to use for all relative URLs contained within a document. There can be only one <base> element in a document.",
	"basefontTagDoc" : "The HTML basefont element (<basefont>) establishes a default font size for a document. Font size then can be varied relative to the base font size using the <font> element.",
	"bdiTagDoc": "The HTML <bdi> Element (or Bi-Directional Isolation Element) isolates a span of text that might be formatted in a different direction from other text outside it.",
	"bdoTagDoc": "The HTML <bdo> Element (or HTML bidirectional override element) is used to override the current directionality of text. It causes the directionality of the characters to be ignored in favor of the specified directionality.",
	"bigTagDoc": "The HTML Big Element (<big>) makes the text font size one size bigger (for example, from small to medium, or from large to x-large) up to the browser's maximum font size.",
	"blinkTagDoc": "The HTML Blink Element (<blink>) is a non-standard element causing the enclosed text to flash slowly.",
	"bqTagDoc": "The HTML <blockquote> Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation.",
	"bodyTagDoc": "The HTML Body Element (<body>) represents the content of an HTML document. There can be only one <body> element in a document.",
	"brTagDoc": "The HTML <br> Element (or HTML Line Break Element) produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.",
	"buttonTagDoc": "The HTML <button> Element represents a clickable button.",
	"canvasTagDoc": "The HTML <canvas> Element can be used to draw graphics via scripting (usually JavaScript). For example, it can be used to draw graphs, make photo compositions or even perform animations. You may (and should) provide alternate content inside the <canvas> block. That content will be rendered both on older browsers that don't support canvas and in browsers with JavaScript disabled.",
	"captionTagDoc": "The HTML <caption> Element (or HTML Table Caption Element) represents the title of a table. Though it is always the first descendant of a <table>, its styling, using CSS, may place it elsewhere, relative to the table.",
	"centerTagDoc": "The HTML Center Element (<center>) is a block-level element that can contain paragraphs and other block-level and inline elements. The entire content of this element is centered horizontally within its containing element (typically, the <body>).",
	"citeTagDoc": "The HTML Citation Element (<cite>) represents a reference to a creative work. It must include the title of a work or a URL reference, which may be in an abbreviated form according to the conventions used for the addition of citation metadata.",
	"codeTagDoc": "The HTML Code Element (<code>) represents a fragment of computer code. By default, it is displayed in the browser's default monospace font.",
	"colTagDoc": "The HTML Table Column Element (<col>) defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.",
	"colgrpTagDoc": "The HTML Table Column Group Element (<colgroup>) defines a group of columns within a table.",
	"contentTagDoc": "The HTML <content> element is used inside of Shadow DOM as an insertion point. It is not intended to be used in ordinary HTML. It is used with Web Components.",
	"dataTagDoc": "The HTML <data> Element links a given content with a machine-readable translation. If the content is time- or date-related, the <time> must be used.",
	"datalistTagDoc": "The HTML Datalist Element (<datalist>) contains a set of <option> elements that represent the values available for other controls.",
	"ddTagDoc": "The HTML Description Element (<dd>) indicates the description of a term in a description list (<dl>) element. This element can occur only as a child element of a definition list and it must follow a <dt> element.",
	"delTagDoc": "The HTML Deleted Text Element (<del>) represents a range of text that has been deleted from a document. This element is often (but need not be) rendered with strike-through text.",
	"detailsTagDoc": "The HTML Details Element (<details>) is used as a disclosure widget from which the user can retrieve additional information.",
	"dfnTagDoc": "The HTML Definition Element (<dfn>) represents the defining instance of a term.",
	"dirTagDoc": "The HTML directory element (<dir>) represents a directory, namely a collection of filenames.",
	"divTagDoc": "The HTML <div> element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as <article> or <nav>) is appropriate.",
	"dlTagDoc": "The HTML <dl> Element (or HTML Description List Element) encloses a list of pairs of terms and descriptions. Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).",
	"dtTagDoc": "The HTML <dt> element (or HTML Definition Term Element) identifies a term in a definition list. This element can occur only as a child element of a <dl>. It is usually followed by a <dd> element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next <dd> element.",
	"elementTagDoc": "The HTML <element> element is used to define new custom DOM elements.",
	"emTagDoc": "The HTML Emphasis Element (<em>) marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis.",
	"embedTagDoc": "The HTML <embed> Element represents an integration point for an external application or interactive content (in other words, a plug-in).",
	"fieldsetTagDoc": "The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form.",
	"figcaptionTagDoc": "The HTML <figcaption> Element represents a caption or a legend associated with a figure or an illustration described by the rest of the data of the <figure> element which is its immediate ancestor which means <figcaption> can be the first or last element inside a <figure> block. Also, the HTML Figcaption Element is optional; if not provided, then the parent figure element will have no caption.",
	"figureTagDoc": "The HTML <figure> Element represents self-contained content, frequently with a caption (<figcaption>), and is typically referenced as a single unit. While it is related to the main flow, its position is independent of the main flow. Usually this is an image, an illustration, a diagram, a code snippet, or a schema that is referenced in the main text, but that can be moved to another page or to an appendix without affecting the main flow.",
	"fontTagDoc": "The HTML Font Element (<font>) defines the font size, color and face for its content.",
	"footerTagDoc": "The HTML Footer Element (<footer>) represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data or links to related documents.",
	"formTagDoc": "The HTML <form> element represents a document section that contains interactive controls to submit information to a web server.",
	"frameTagDoc": "<frame> is an HTML element which defines a particular area in which another HTML document can be displayed. A frame should be used within a <frameset>.",
	"framesetTagDoc": "<frameset> is an HTML element which is used to contain <frame> elements.",
	"hTagDoc": "Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.",
	"headTagDoc": "The HTML Head Element (<head>) provides general information (metadata) about the document, including its title and links to or definitions of scripts and style sheets",
	"headerTagDoc": "The HTML <header> Element represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on.",
	"hgroupTagDoc": "The HTML <hgroup> Element (HTML Headings Group Element) represents the heading of a section. It defines a single title that participates in the outline of the document as the heading of the implicit or explicit section that it belongs to.",
	"hrTagDoc": "The HTML <hr> element represents a thematic break between paragraph-level elements (for example, a change of scene in a story, or a shift of topic with a section). In previous versions of HTML, it represented a horizontal rule. It may still be displayed as a horizontal rule in visual browsers, but is now defined in semantic terms, rather than presentational terms.",
	"htmlTagDoc": "The HTML Root Element (<html>) represents the root of an HTML document. All other elements must be descendants of this element.",
	"iTagDoc": "The HTML <i> Element represents a range of text that is set off from the normal text for some reason, for example, technical terms, foreign language phrases, or fictional character thoughts. It is typically displayed in italic type.",
	"iframeTagDoc": "The HTML Inline Frame Element (<iframe>) represents a nested browsing context, effectively embedding another HTML page into the current page. In HTML 4.01, a document may contain a head and a body or a head and a frame-set, but not both a body and a frame-set. However, an <iframe> can be used within a normal document body. Each browsing context has its own session history and active document. The browsing context that contains the embedded content is called the parent browsing context. The top-level browsing context (which has no parent) is typically the browser window.",
	"imgTagDoc": "The HTML Image Element (<img>) represents an image of the document.",
	"inputTagDoc": "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user. How an <input> works varies considerably depending on the value of its type attribute.",
	"insTagDoc": "The HTML <ins> Element (or HTML Inserted Text) HTML represents a range of text that has been added to a document.",
	"isindexTagDoc": "<isindex> is an HTML element which is used for putting a text field in the document for querying document. <isindex> is intented to use inside of <head> element by W3C, however browsers provide support wherever it is used in the document.",
	"kbdTagDoc": "The HTML Keyboard Input Element (<kbd>) represents user input and produces an inline element displayed in the browser's default monospace font.",
	"keygenTagDoc": "The HTML <keygen> element exists to facilitate generation of key material, and submission of the public key as part of an HTML form. This mechanism is designed for use with Web-based certificate management systems. It is expected that the <keygen> element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate.",
	"labelTagDoc": "The HTML Label Element (<label>) represents a caption for an item in a user interface. It can be associated with a control either by placing the control element inside the <label> element, or by using the for attribute. Such a control is called the labeled control of the label element.",
	"legendTagDoc": "The HTML <legend> Element (or HTML Legend Field Element) represents a caption for the content of its parent <fieldset>.",
	"liTagDoc": "The HTML List Item Element (<li>) is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.",
	"linkTagDoc": "The HTML Link Element (<link>) specifies relationships between the current document and an external resource. Possible uses for this element include defining a relational framework for navigation. This Element is most used to link to style sheets.",
	"listingTagDoc": "The HTML Listing Element (<listing>) renders text between the start and end tags without interpreting the HTML in between and using a monospaced font. The HTML 2 standard recommended that lines shouldn't be broken when not greater than 132 characters.",
	"mainTagDoc": "The HTML Main Element (<main>) can be used as a container for the dominant contents of another element. The main content area consists of content that is directly related to, or expands upon the central topic of a section or the central functionality of an application. This content should be unique to the document, excluding any content that is repeated across a set of documents such as sidebars, navigation links, copyright information, site logos, and search forms (unless, of course, the document's main function is as a search form). Unlike <article> and <section>, this element does not contribute to the document outline.",
	"mapTagDoc": "The HTML <map> element is used with <area> elements to define an image map (a clickable link area).",
	"markTagDoc": "The HTML Mark Element (<mark>) represents highlighted text, i.e., a run of text marked for reference purpose, due to its relevance in a particular context. For example it can be used in a page showing search results to highlight every instance of the searched-for word.",
	"marqueeTagDoc": "The HTML <marquee> element is used to insert a scrolling area of text.",
	"menuTagDoc": "The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.",
	"menuitemTagDoc": "The HTML <menuitem> element represents a command that a user is able to invoke through a popup menu. This includes context menus, as well as menus that might be attached to a menu button.",
	"metaTagDoc": "The HTML Meta Element (<meta>) represents any metadata information that cannot be represented by one of the other HTML meta-related elements (<base>, <link>, <script>, <style> or <title>).",
	"meterTagDoc": "The HTML <meter> Element represents either a scalar value within a known range or a fractional value.",
	"navTagDoc": "The HTML Navigation Element (<nav>) represents a section of a page that links to other pages or to parts within the page: a section with navigation links.",
	"noembedTagDoc": "The <noembed> element is a deprecated and non-standard way to provide alternative, or \"fallback\", content for browsers that do not support the <embed> element or do not support embedded content an author wishes to use.",
	"noframesTagDoc": "<noframes> is an HTML element which is used to supporting browsers which are not able to support <frame> elements or configured to do so.",
	"noscriptTagDoc": "The HTML <noscript> Element defines a section of html to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.",
	"objectTagDoc": "The HTML Embedded Object Element (<object>) represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.",
	"olTagDoc": "The HTML <ol> Element (or HTML Ordered List Element) represents an ordered list of items. Typically, ordered-list items are displayed with a preceding numbering, which can be of any form, like numerals, letters or Romans numerals or even simple bullets. This numbered style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property.",
	"optgroupTagDoc": "In a Web form, the HTML <optgroup> element  creates a grouping of options within a <select> element.",
	"optionsTagDoc": "In a Web form, the HTML <option> element is used to create a control representing an item within a <select>, an <optgroup> or a <datalist> HTML5 element.",
	"outputTagDoc": "The HTML <output> element represents the result of a calculation or user action.",
	"pTagDoc": "The HTML <p> element (or HTML Paragraph Element) represents a paragraph of text.",
	"paramTagDoc": "The HTML <param> Element (or HTML Parameter Element) defines parameters for <object>.",
	"plaintextTagDoc": "The HTML Plaintext Element (<plaintext>) renders everything following the start tag as raw text, without interpreting any HTML. There is no closing tag, since everything after it is considered raw text.",
	"preTagDoc": "The HTML Preformatted Text (<pre>) represents preformatted text. Text within this element is typically displayed in a non-proportional font exactly as it is laid out in the file. Whitespaces inside this element are displayed as typed.",
	"progressTagDoc": "The HTML <progress> Element is used to view the completion progress of a task. While the specifics of how it's displayed is left up to the browser developer, it's typically displayed as a progress bar. Javascript can be used to manipulate the value of progress bar.",
	"qTagDoc": "The HTML Quote Element (<q>) indicates that the enclosed text is a short inline quotation. This element is intended for short quotations that don't require paragraph breaks; for long quotations use <blockquote> element.",
	"rpTagDoc": "The HTML <rp> element is used to provide fall-back parenthesis for browsers non-supporting ruby annotations. Ruby annotations are for showing pronounciation of East Asian characters, like using Japanese furigana or Taiwainese bopomofo characters. The <rp> element is used in the case of lack of <ruby> element support its content has what should be displayed in order to indicate the presence of a ruby annotation, usually parentheses.",
	"rtTagDoc": "Editorial review completed.",
	"rtcTagDoc": "The HTML <rtc> Element embraces semantic annotations of characters presented in a ruby of <rb> elements used inside of <ruby> element. <rb> elements can have both pronunciation (<rt> and semantic (<rtc>) annotations.",
	"rubyTagDoc": "The HTML <ruby> Element represents a ruby annotation. Ruby annotations are for showing pronunciation of East Asian characters.",
	"sTagDoc": "The HTML Strikethrough Element (<s>) renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the <del> and <ins> elements, as appropriate.",
	"sampTagDoc": "The HTML <samp> element is an element intended to identify sample output from a computer program. It is usually displayed in the browser's default monotype font (such as Lucida Console).",
	"scriptTagDoc": "The HTML Script Element (<script>) is used to embed or reference an executable script within an HTML or XHTML document.",
	"sectionTagDoc": "The HTML Section Element (<section>) represents a generic section of a document, i.e., a thematic grouping of content, typically with a heading. Each <section> should be identified, typically by including a heading (<h1>-<h6> element) as a child of the <section> element.",
	"selectTagDoc": "The HTML select (<select>) element represents a control that presents a menu of options. The options within the menu are represented by <option> elements, which can be grouped by <optgroup> elements. Options can be pre-selected for the user.",
	"shadowTagDoc": "The HTML <shadow> element is used as a shadow DOM insertion point. You might use it if you have created multiple shadow roots under a shadow host. It is not useful in ordinary HTML. It is used with Web Components.",
	"smallTagDoc": "The HTML Small Element (<small>) makes the text font size one size smaller (for example, from large to medium, or from small to x-small) down to the browser's minimum font size.  In HTML5, this element is repurposed to represent side-comments and small print, including copyright and legal text, independent of its styled presentation.",
	"sourceTagDoc": "The HTML <source> element is used to specify multiple media resources for <picture>, <audio> and <video> elements. It is an empty element. It is commonly used to serve the same media in multiple formats supported by different browsers.",
	"spacerTagDoc": "<spacer> is an HTML element which is used for inserting white spaces to web pages. It was created by NetScape for achieving same effect as a single-pixel layout GIF image, which was something web designers used to use to add white spaces to web pages, without actually using a GIF. However <spacer> is not supported by any major browser and same effects can be created with various CSS rules. In Mozilla applications, support for this element was removed in Gecko 2.0. Therefore usage of <spacer> is unnecessary.",
	"spanTagDoc": "The HTML <span> element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline element.",
	"strikeTagDoc": "The HTML Strikethrough Element (<strike>) renders text with a strikethrough, or a line through it.",
	"strongTagDoc": "The HTML Strong Element (<strong>) gives text strong importance, and is typically displayed in bold.",
	"styleTagDoc": "The HTML Style Element (<style>) contains style information for a document, or part of a document. By default, the style instructions written inside that element are expected to be CSS.",
	"subTagDoc": "The HTML Subscript Element (<sub>) defines a span of text that should be displayed, for typographic reasons, lower, and often smaller, than the main span of text.",
	"summaryTagDoc": "The HTML summary element (<summary>) is used as a summary, caption, or legend for the content of a <details> element.",
	"supTagDoc": "The HTML Superscript Element (<sup>) defines a span of text that should be displayed, for typographic reasons, higher, and often smaller, than the main span of text.",
	"tableTagDoc": "The HTML Table Element (<table>) represents data in two dimensions or more.",
	"tbodyTagDoc": "The HTML Table Body Element (<tbody>) defines the body of a table.",
	"tdTagDoc": "The Table cell HTML element (<td>) defines a cell of a table that contains data. It participates in the table model.",
	"templateTagDoc": "The HTML template element <template> is a mechanism for holding client-side content that is not to be rendered when a page is loaded but may subsequently be instantiated during runtime using JavaScript.",
	"textareaTagDoc": "The HTML <textarea> element represents a multi-line plain-text editing control.",
	"tfootTagDoc": "The HTML Table Foot Element (<tfoot>) defines a set of rows summarizing the columns of the table.",
	"thTagDoc": "The HTML Table Header Cell Element (<th>) defines a cell that is a header for a group of cells of a table. The group of cells that the header refers to is defined by the scope and headers attribute.",
	"theadTagDoc": "The HTML Table Head Element (<thead>) defines a set of rows defining the head of the columns of the table.",
	"timeTagDoc": "The HTML <time> element represents either a time on a 24-hour clock or a precise date in the Gregorian calendar (with optional time and timezone information).",
	"titleTagDoc": "The HTML Title Element (<title>) defines the title of the document, shown in a browser's title bar or on the page's tab. It can only contain text and any contained tags are not interpreted.",
	"trTagDoc": "The HTML Table Row Element (<tr>) defines a row of cells in a table. Those can be a mix of <td> and <th> elements.",
	"trackTagDoc": "The HTML <track> element is used as a child of the media elements—<audio> and <video>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks.",
	"ttTagDoc": "The HTML Teletype Text Element (<tt>) produces an inline element displayed in the browser's default monotype font. This element was intended to style text as it would display on a fixed width display, such as a teletype. It probably is more common to display fixed width type using the <code> element.",
	"uTagDoc": "The HTML Underline Element (<u>) renders text with an underline, a line under the baseline of its content.",
	"ulTagDoc": "The HTML unordered list element (<ul>) represents an unordered list of items, namely a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle or a squared. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property.",
	"varTagDoc": "The HTML Variable Element (<var>) represents a variable in a mathematical expression or a programming context.",
	"videoTagDoc": "The HTML <video> element is used to embed video content. It may contain several video sources, represented using the src attribute or the <source> element; the browser will choose the most suitable one.",
	"wbrTagDoc": "The Word Break Opportunity (<wbr>) HTML element represents a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location.",
	"xmpTagDoc": "The HTML Example Element (<xmp>) renders text between the start and end tags without interpreting the HTML in between and using a monospaced font. The HTML2 specification recommended that it should be rendered wide enough to allow 80 characters per line.",
	"obsoleteTagCategory": "Obsolete and deprecated elements",
	"inlineTextCategory": "Inline text semantics",
	"tableContentCategory": "Table content",
	"decoratorCategory": "<decorator>",
	"embeddedContentCategory": "Embedded content",
	"formsCategory": "Forms",
	"textContentCategory": "Text content",
	"documentMetadataCategory": "Document metadata",
	"contentSectioningCategory": "Content sectioning",
	"interactiveCategory": "Interactive elements",
	"editsCategory": "Edits",
	"basicCategory": "Basic elements",
	"imagesCategory": "Image & multimedia",
	"scriptingCategory": "Scripting",
	"webComponentsCategory": "Web Components",
	
	// Validator Severities
	"ignore" : "Ignore",
	"warning" : "Warning",
	"error" : "Error",
	"info" : "Info",
	
	// HTML Validator Settings
	"attr_bans": "Disallow the following attributes: align, background, bgcolor, frameborder, longdesc, marginwidth, marginheight, scrolling, style, width:",
	"attr_no_dup": "Disallow attributes to be duplicated in the same element:",
	"fig_req_figcaption": "Require all <figure> tags to have a <figcaption> tag:",
	"img_req_alt": "Require all <img> tags to have the alt attribute:",
	"tag_close": "Require all open tags have matching close tags:",

	// CSS Validator Settings
	"adjoining-classes": "Disallow adjoining classes in selectors:",   
	"box-model": "Potentially broken box model:",   
	"box-sizing": "Disallow use of box-sizing property:",   
	"bulletproof-font-face": "@font-face syntax incompatible with IE:",   
	"compatible-vendor-prefixes": "Require compatible vendor prefixes:",   
	"display-property-grouping": "Incorrect properties for display value:",   
	"duplicate-background-images": "Disallow duplicate background images:",   
	"duplicate-properties": "Disallow duplicate properties:",   
	"empty-rules": "Disallow empty rules:",   
	"fallback-colors": "Require fallback colors:",   
	"floats": "Too many floats:",   
	"font-faces": "Too many web fonts:",   
	"font-sizes": "Too many font sizes:",   
	"gradients": "Require all gradient definitions:",   
	"ids": "Disallow IDs in selectors:",   
	"import": "Disallow @import:",   
	"important": "Disallow !important:",   
	"known-properties": "Use of unknown properties:",
	"order-alphabetical": "Require properties to be in alphabetical order:",
	"outline-none": "Disallow outline: none:",   
	"overqualified-elements": "Disallow overqualified elements:",   
	"qualified-headings": "Disallow qualified headings:",   
	"regex-selectors": "Disallow selectors that look like regexs:",   
	"rules-count": "Too many rules:",   
	"selector-max-approaching": "Approaching the 4095 selector limit for IE:",   
	"selector-max": "Exceeded the 4095 selector limit for IE:",   
	"shorthand": "Require shorthand properties:",   
	"star-property-hack": "Disallow properties with a star prefix:",   
	"text-indent": "Disallow negative text-indent:",   
	"underscore-property-hack": "Disallow properties with an underscore prefix:",   
	"unique-headings": "Headings should only be defined once:",   
	"universal-selector": "Disallow universal selector:",   
	"unqualified-attributes": "Disallow unqualified attribute selectors:",   
	"vendor-prefix": "Require standard property with vendor prefix:",   
	"zero-units": "Disallow units for 0 values:",   
	
	// CSS Quick Fixes
	"quickfix-ignore-on-line": "Ignore",
	"quickfix-empty-rules": "Remove the rule",
	"quickfix-important": "Remove '!important' annotation",
	"quickfix-zero-units": "Remove 'px' qualifier",
	
	//HTML content assist
	"simpleDocDescription": "Simple HTML document",
	"onlineDocumentation": "\n\n[Online documentation](${0})",
	"closeTagDescription": " - Close the ${0} tag",
	"openCommentName": "Open comment",
	"closeCommentName": "Close comment",
	"obsoleteTag": "*Obsolete: This tag is obsolete. Its use is discouraged since it may not work in some browsers.*\n\n",
	"obsoleteTagDesc": " [Obsolete]",
	"obsoleteAttr": "*Obsolete: This attribute is obsolete since ${0}. Its use is discouraged.*\n\n",
	"obsoleteAttrDesc": " [Obsolete]",
	"possibleValues": " Possible values are:",
	"valueNameDocMarkdown": "\n* ${0}: ${1}",
	"formeventsHeader": "Form Events",
	"keyboardeventsHeader": "Keyboard Events",
	"mouseeventsHeader": "Mouse Events",
	"windoweventsHeader": "Window Events",
	"addQuotesToAttributes": " - Add quotes to the current attribute",
	
	//CSS content assist
	// 'element' 'id' 'class' and 'attribute' can be replaced with translated text, but they are describing specific CSS structures
	// See https://www.w3schools.com/cssref/css_selectors.asp
	"elementRuleDescription": "Rule : element { }",
	"idRuleDescription": "Rule : #id { }",
	"classRuleDescription": "Rule : .class { }",
	"elementSelector": "element",
	"idSelector": "#id",
	"classSelector": ".class",
	"attributeSelector": "[attribute]",
	"elementRuleDoc": "A rule (ruleset) that applies to all elements that match the given name.",
	"classRuleDoc": "A rule (ruleset) that applies to elements based on the value of their class attribute.",
	"idRuleDoc": "A rule (ruleset) that applies to elements based on the value of its id attribute.",

	// See https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
	'charsetTemplateDoc': 'Defines the character set used by the style sheet.',
	'importTemplateDoc': 'Tells the CSS engine to include an external style sheet.',
	'namespaceTemplateDoc': 'Tells the CSS engine that all its content must be considered prefixed with an XML namespace.',
	'mediaTemplateDoc': 'A conditional group rule which will apply its content if the device meets the criteria of the condition defined using a media query.',
	'supportsTemplateDoc': 'A conditional group rule which will apply its content if the device meets the criteria of the condition defined using a media query.',
	'pageTemplateDoc': 'Describes the aspect of layout changes which will be applied when printing the document.',
	'font-faceTemplateDoc': 'Describes the aspect of an external font to be downloaded.',
	'keyframesTemplateDoc': 'Describes the aspect of intermediate steps in a CSS animation sequence.',
});
