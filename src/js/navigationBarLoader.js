/*this script is responsible for loading up the navigation bar across different pages*/

$(document).ready(function (){
  var navbar = $(".navigationBar");
  navbar.load("/assets/core/NavigationBar.html", null, function(responsetxt, statusTxt, xhr) {
    console.log("Finished loading navigation bar!");

    if(window.location.pathname.includes("articles") || window.location.pathname.includes("Suggestions")) {
      console.log("navbarLoader using modified script addresses");
      $.getScript("../js/pageLoader.js");
    } else {
      console.log("navbarLoader using unmodified script addresses.");
      $.getScript("js/pageLoader.js");
    }
  });
})
