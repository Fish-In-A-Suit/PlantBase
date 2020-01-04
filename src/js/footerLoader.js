$(document).ready(function (){
  var footer = $(".footer-container");
  footer.load("/assets/core/Footer.html", null, function(responsetxt, statusTxt, xhr) {
    console.log("Finished loading footer!");
  });
})
