/*this script is used in Suggestions.html to set up the listener for the button to send suggestions to our email*/

/** TODO!!! */
var editor;
var nodemailer = require('nodemailer');

$(document).ready(function() {
    var suggestionsButton = $("#sendSuggestionButton");
    console.log("sb = " + suggestionsButton);
    editor = $("#editor"); 

    suggestionsButton.on("click", function() {
        console.log("sending suggestion");
        sendSuggestion();
    });
})

function sendSuggestion() {
    var suggestionText = editor.html();

    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth : {
            user: "plantbasecompany@gmail.com",
            pass: "cimici2304"
        }
    });

    var mailOptions = {
        from: "plantbasecompany@gmail.com",
        to: "plantbasecompany@gmail.com",
        subject: "Suggestion",
        text: suggestionText
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    })
}