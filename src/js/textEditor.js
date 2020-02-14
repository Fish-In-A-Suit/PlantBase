//this is the text editor script

var isBoldTurnedOn = false;
var isItalicTurnedOn = false;
var isSupTurnedOn = false;
var isSubTurnedOn = false;
var isStrikeTurnedOn = false;

window.addEventListener("load", function() {
    var editor = wysiwyg.document; //wysiwyg iframe has name="wysiwyg"
    editor.designMode = "on";

    boldButton.addEventListener("click", function() {
        //when bold is clicked, bold the selected text
        editor.execCommand("Bold", false, null);

    }, false);

    italicButton.addEventListener("click", function() {
        //when bold is clicked, bold the selected text
        editor.execCommand("Italic", false, null);
    }, false);

    supButton.addEventListener("click", function() {
        //when bold is clicked, bold the selected text
        editor.execCommand("Superscript", false, null);
    }, false);

    subButton.addEventListener("click", function() {
        //when bold is clicked, bold the selected text
        editor.execCommand("Subscript", false, null);
    }, false);

    strikeButton.addEventListener("click", function() {
        //when bold is clicked, bold the selected text
        editor.execCommand("Strikethrough", false, null);
    }, false);

    orderedListButton.addEventListener("click", function() {
        //when bold is clicked, bold the selected text
        editor.execCommand("InsertOrderedList", false, "newOrderedList" + Math.round(Math.random()*1000)); //random id
    }, false);

    unorderedListButton.addEventListener("click", function() {
        //when bold is clicked, bold the selected text
        editor.execCommand("InsertUnorderedList", false, "newUnorderedList" + Math.round(Math.random()*1000)); //random id
    }, false);

    linkButton.addEventListener("click", function() {
        var url = prompt("Enter a URL");
        editor.execCommand("CreateLink", false, url);
    }, false);


}, false);