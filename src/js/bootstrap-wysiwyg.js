/* http://github.com/mindmup/bootstrap-wysiwyg */
/*global jQuery, $, FileReader*/
/*jslint browser:true*/
var boldCC = 0;
var italicCC = 0;
var strikeCC = 0;
var underlineCC = 0;
var unorderedListCC = 0;
var orederedListCC = 0;
var outdentCC = 0;
var indentCC = 0;
var alignLeftCC = 0;
var alignMiddleCC = 0;
var alignRightCC = 0;
var alignNullCC = 0;

var shouldExecute = false;

var editorObject;

//activity of list buttons
var ULisActive = false;
var OLisActive = false;

var ULbutton;
var OLbutton;

(function ($) {
	'use strict';
	var readFileIntoDataUrl = function (fileInfo) {
        console.log("in readfileintodataurl func");
		var loader = $.Deferred(),
			fReader = new FileReader();
		fReader.onload = function (e) {
			loader.resolve(e.target.result);
		};
		fReader.onerror = loader.reject;
		fReader.onprogress = loader.notify;
		fReader.readAsDataURL(fileInfo);
		return loader.promise();
    };
    
	$.fn.cleanHtml = function () {
        console.log("in cleanhtml func");
		var html = $(this).html();
		return html && html.replace(/(<br>|\s|<div><br><\/div>|&nbsp;)*$/, '');
    };
    
    //this adds new function to jquery! check this out https://www.w3schools.com/js/js_object_prototypes.asp
	$.fn.wysiwyg = function (userOptions) {
        console.log("in wysiwyg func");
        var editor = 
            //all of the fields of editor object
            this,
			selectedRange,
			options,
            toolbarBtnSelector,
            
            //all of the functions of editor object
			updateToolbar = function () {
                if(shouldExecute == false) {
                    return;
                }
                console.log("updating toolbar");
                console.log("  - selectedRange = " + selectedRange);
                console.log("  - options = " + options);
                console.log("  - toolbarBtnSelector = " + toolbarBtnSelector);
                console.log("options.activeToolbarClass = " + options.activeToolbarClass);

				if (options.activeToolbarClass) {
                    //how is the toolbatBtnSelector possibly a child of the data-role=editor-toolbar??
                    

                    //this function iterates over each child (button) of the toolbar 
                    $(options.toolbarSelector).find(toolbarBtnSelector).each(function () {
                        var command = $(this).data(options.commandRole); //gets the data-edit field ... bold for the bold button, italic for italic button, etc.
                        console.log("   - command = " + command);

                        //sets up ULbutton and OLbutton for the resolution of the list button problem when buttons wouuldnt turn off after pressing enter twice
                        if(command.includes("insertunorderedlist")) {
                            ULbutton = $(this);
                        } else if(command.includes("insertorderedlist")) {
                            OLbutton = $(this);
                        }

                        /* document.queryCommandState(command) by itself isn't enough to check whether to enable or disable the button.
                         * This fails expecially if you want to have multiple buttons active.
                         * Fix: check for previous command? Or double commands?
                        */
                       console.log("    - commandState for '" + command + "' = " + document.queryCommandState(command));
                       console.log("    - commandEnabled for '" + command + "' = " + document.queryCommandEnabled(command));

                       /* 
                       if (document.queryCommandState(command)) {
                            console.log("adding class: " + options.activeToolbarClass);

                            $(this).addClass(options.activeToolbarClass);
							
						} else {
                            console.log("removing class: " + options.activeToolbarClass);
                            $(this).removeClass(options.activeToolbarClass);
                        }
                        */

                        //this should be applied only for bold, italic, strikethrough and underline
                        if(isTrueTextFormatCommand(command)) {
                            if(getCommandCount(command) % 2 != 0) {
                                $(this).addClass(options.activeToolbarClass);
                                console.log("highlighting");
                            } else {
                                $(this).removeClass(options.activeToolbarClass);
                                console.log("removing highlight");
                            }
                        }

                        //if any of the other commands
                        if(!isTrueTextFormatCommand(command)) {
                            if (document.queryCommandState(command)) {
                                console.log("adding class: " + options.activeToolbarClass);
                                $(this).addClass(options.activeToolbarClass);

                                if(command.includes("insertunorderedlist")) {
                                    ULisActive = true;
                                } else if(command.includes("insertorderedlist")) {
                                    OLisActive = true;
                                }
                            } else {
                                console.log("removing class: " + options.activeToolbarClass);
                                $(this).removeClass(options.activeToolbarClass);

                                if(command.includes("insertunorderedlist")) {
                                    ULisActive = false;
                                } else if(command.includes("insertorderedlist")) {
                                    OLisActive = false;
                                }
                            }
                        }
                        
					});
				} else {
                    console.log("options.activeToolbarClass = " + options.activeToolbarClass);
                }


                //if there are two consecutive carriage returns: check if any of the ordered lists are selected and deselect them

                shouldExecute = false;
            },
            
            /**
             * This function gets called each time a button is clicked. commandWithArgs is then either bold, italic, etc.
             */
			execCommand = function (commandWithArgs, valueArg) {
                updateCommandCount(commandWithArgs);
                /*;
                if(getCommandCount(commandWithArgs) % 2 == 0) {
                    console.log("command execution prevented. command has been disabled.");
                    //remove highlight
                    //remove bold functionality
                    document.execCommand("redo");
                    return;
                }
                */
                shouldExecute = true;
                console.log("executing command: " + commandWithArgs + " with valueArg: " + valueArg);

				var commandArr = commandWithArgs.split(' '),
					command = commandArr.shift(),
                    args = commandArr.join(' ') + (valueArg || '');
                    
                //console.log("command = " + command + "; args = " + args);
				document.execCommand(command, 0, args);
                updateToolbar();
            },
            
			bindHotkeys = function (hotKeys) {
				$.each(hotKeys, function (hotkey, command) {
					editor.keydown(hotkey, function (e) {
						if (editor.attr('contenteditable') && editor.is(':visible')) {
							e.preventDefault();
							e.stopPropagation();
							execCommand(command);
						}
					}).keyup(hotkey, function (e) {
						if (editor.attr('contenteditable') && editor.is(':visible')) {
							e.preventDefault();
							e.stopPropagation();
						}
					});
				});
            },
            
			getCurrentRange = function () {
				var sel = window.getSelection();
				if (sel.getRangeAt && sel.rangeCount) {
					return sel.getRangeAt(0);
				}
			},
			saveSelection = function () {
				selectedRange = getCurrentRange();
            },
            
			restoreSelection = function () {
				var selection = window.getSelection();
				if (selectedRange) {
					try {
						selection.removeAllRanges();
					} catch (ex) {
						document.body.createTextRange().select();
						document.selection.empty();
					}

					selection.addRange(selectedRange);
				}
            },
            
			insertFiles = function (files) {
				editor.focus();
				$.each(files, function (idx, fileInfo) {
					if (/^image\//.test(fileInfo.type)) {
						$.when(readFileIntoDataUrl(fileInfo)).done(function (dataUrl) {
							execCommand('insertimage', dataUrl);
						}).fail(function (e) {
							options.fileUploadError("file-reader", e);
						});
					} else {
						options.fileUploadError("unsupported-file-type", fileInfo.type);
					}
				});
            },
            
			markSelection = function (input, color) {
				restoreSelection();
				if (document.queryCommandSupported('hiliteColor')) {
					document.execCommand('hiliteColor', 0, color || 'transparent');
				}
				saveSelection();
				input.data(options.selectionMarker, color);
            },
            
			bindToolbar = function (toolbar, options) {
				toolbar.find(toolbarBtnSelector).click(function () {
					restoreSelection();
					editor.focus();
					execCommand($(this).data(options.commandRole));
					saveSelection();
				});
				toolbar.find('[data-toggle=dropdown]').click(restoreSelection);

				toolbar.find('input[type=text][data-' + options.commandRole + ']').on('webkitspeechchange change', function () {
					var newValue = this.value; /* ugly but prevents fake double-calls due to selection restoration */
					this.value = '';
					restoreSelection();
					if (newValue) {
						editor.focus();
						execCommand($(this).data(options.commandRole), newValue);
					}
					saveSelection();
				}).on('focus', function () {
					var input = $(this);
					if (!input.data(options.selectionMarker)) {
						markSelection(input, options.selectionColor);
						input.focus();
					}
				}).on('blur', function () {
					var input = $(this);
					if (input.data(options.selectionMarker)) {
						markSelection(input, false);
					}
				});
				toolbar.find('input[type=file][data-' + options.commandRole + ']').change(function () {
					restoreSelection();
					if (this.type === 'file' && this.files && this.files.length > 0) {
						insertFiles(this.files);
					}
					saveSelection();
					this.value = '';
				});
            },
            
			initFileDrops = function () {
				editor.on('dragenter dragover', false)
					.on('drop', function (e) {
						var dataTransfer = e.originalEvent.dataTransfer;
						e.stopPropagation();
						e.preventDefault();
						if (dataTransfer && dataTransfer.files && dataTransfer.files.length > 0) {
							insertFiles(dataTransfer.files);
						}
					});
            };

        editorObject = editor;
        //end of editor

        /*
        * jQuery's extend function takes 3 params. it merges the 2nd and 3rd param into the first param
        * this creates the options object, which contains all of the fields of $.fn.wysiwyg.defaults. These fields are:
        *   - hotKeys
        *   - toolbarSelector
        *   - commandRole
        *   - activeToolbarClass
        *   - selectionMarker
        *   - selectionColor
        *   - dragAndDropImages
        */
        options = $.extend({}, $.fn.wysiwyg.defaults, userOptions); //merge $.fn.wysiwyg.defaults and userOptions into one object (first param)

        /*
         * toolbarBtnSelector is made out of the options object. Example toolbarBtnSelector:
         *      a[data-edit],button[data-edit],input[type=button][data-edit]
         *  */ 
        toolbarBtnSelector = 'a[data-' + options.commandRole + '],button[data-' + options.commandRole + '],input[type=button][data-' + options.commandRole + ']';


		bindHotkeys(options.hotKeys);
		if (options.dragAndDropImages) {
			initFileDrops();
		}
		bindToolbar($(options.toolbarSelector), options);
		editor.attr('contenteditable', true)
			.on('mouseup keyup mouseout', function () {
				saveSelection();
				updateToolbar();
			});
		$(window).bind('touchend', function (e) {
			var isInside = (editor.is(e.target) || editor.has(e.target).length > 0),
				currentRange = getCurrentRange(),
				clear = currentRange && (currentRange.startContainer === currentRange.endContainer && currentRange.startOffset === currentRange.endOffset);
			if (!clear || isInside) {
				saveSelection();
				updateToolbar();
			}
		});
		return this;
    }; //end of wywiyg func
    


	$.fn.wysiwyg.defaults = {
		hotKeys: {
			'ctrl+b meta+b': 'bold',
			'ctrl+i meta+i': 'italic',
			'ctrl+u meta+u': 'underline',
			'ctrl+z meta+z': 'undo',
			'ctrl+y meta+y meta+shift+z': 'redo',
			'ctrl+l meta+l': 'justifyleft',
			'ctrl+r meta+r': 'justifyright',
			'ctrl+e meta+e': 'justifycenter',
			'ctrl+j meta+j': 'justifyfull',
			'shift+tab': 'outdent',
			'tab': 'indent'
		},
		toolbarSelector: '*[data-role=editor-toolbar]', /*this is how jquery works for selecting data- attributes*/ 
		commandRole: 'edit',
		activeToolbarClass: 'btn-info',
		selectionMarker: 'edit-focus-marker',
		selectionColor: 'darkgrey',
		dragAndDropImages: true,
		fileUploadError: function (reason, detail) { console.log("File upload error", reason, detail); }
	};
}(window.jQuery));

function updateCommandCount(command) {
    switch(command) {
        case "bold":
            boldCC++;
            break;
        case "italic":
            italicCC++;
            break;
        case "strikethrough":
            strikeCC++;
            break;
        case "underline":
            underlineCC++;
            break;
        case "insertunorderedlist":
            unorderedListCC++;
            break;
        case "insertorderedlist":
            orederedListCC++;
            break;
        case "outdent":
            outdentCC++;
            break;
        case "indent":
            indentCC++;
            break;
        case "justifyleft":
            alignLeftCC++;
            break;
        case "justifycenter":
            alignMiddleCC++;
            break;
        case "justifyright":
            alignRightCC++;
            break;
        case "justifynull":
            alignNullCC++;
            break;
    }
    console.log("command counts updated");
}

function getCommandCount(command) {
    switch(command) {
        case "bold":
            return boldCC;
        case "italic":
            return italicCC;
        case "strikethrough":
            return strikeCC;
        case "underline":
            return underlineCC;
        case "insertunorderedlist":
            return unorderedListCC;
        case "insertorderedlist":
            return orederedListCC;
        case "outdent":
            return outdentCC;
        case "indent":
            return indentCC;
        case "justifyleft":
            return alignLeftCC;
        case "justifycenter":
            return alignMiddleCC;
        case "justifyright":
            return alignRightCC;
        case "justifynull":
            return alignNullCC;
    }
}

function isTrueTextFormatCommand(command) {
    if(command.includes("bold") || command.includes("italic") || command.includes("strikethrough") || command.includes("underline")) {
        return true;
    } else {
        return false;
    }
}

/*this callback fixed the issue of unordered and ordered list buttons keeping turned on after jumping out of
a list via pressing enter twice*/
$(document).on("keypress", function(e) {
    /*everytime enter is pressed, get the text from text editor and check if there are any list buttons turned on.
    If yes, check if two consecutive carriage returns exist and then turn off the list button
    */
   if(ULisActive || OLisActive) {
    if(e.which == 13) {
        console.log("enter was pressed");
        //console.log("text = " + editor.html());
        var text = editorObject.html();

        //check if </ul><div> is succeeded by any text
        var checkPattern = "<br>";

        console.log(text);

        var split = text.split(checkPattern);
        console.log(split.length);

        if(split.length > 1) {
            //unmark ordered list or unordered list
            if(ULisActive) {
                ULbutton.removeClass("btn-info");
            } else if(OLisActive) {
                OLbutton.removeClass("btn-info");
            }
        }
    }
   }
    
})