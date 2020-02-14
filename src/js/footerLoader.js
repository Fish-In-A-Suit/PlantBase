$(document).ready(function (){
  var footer = $(".footer-container");
  footer.load("/assets/core/Footer.html", null, function(responsetxt, statusTxt, xhr) {
    console.log("Finished loading footer!");

    if(window.location.pathname.includes("articles") || window.location.pathname.includes("Suggestions")) {
      console.log("navbarLoader using modified script addresses");
      $.getScript("../js/footerSpacer.js");
    } else {
      console.log("navbarLoader using unmodified script addresses.");
      $.getScript("js/footerSpacer.js");
    }

    //setup suggestions button onclick --> open suggestions page
    var suggestionsButton = $("#suggestionsButton");
    suggestionsButton.on("click", function() {
      console.log("Opening suggestions page.");
      window.location.href="/supportPages/Suggestions.html";
    });
  });
})
