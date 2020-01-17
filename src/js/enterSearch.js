/* The role of this script is to alter the functionality of the ENTER key press event.
Without this scripts, enter acts as a submit button, therefore reloading the page.
My pages, however, must not be reloaded in order for the search algorithm to work. Therefore,
when a user hits enter, the form in the navigation bar is checked for text. If it isn't empty,
then perform search WITHOUT refreshing, else do nothing.

Script rules:
  - should always be added AFTER navigatonBarLoader.js or via .getScript AFTER the navbar is loaded*/

$(document).ready(function() {
    var searchField = $("#searchField");
    var searchButton = $("#submitButton");

    $(window).keydown(function(event) {
        if(event.keyCode == 13) {
            if(searchField.val() != "") {
                event.preventDefault();
                searchButton.trigger("click");
            } else {
                console.log("Search field is empty!");
            }
        }
    });
});