$(document).ready(function() {
  var home = $(".home");
  var indoor_plants = $(".indoor_plants");
  var outdoor_plants = $(".outdoor_plants");
  var decorations = $(".decorations");
  var tools = $(".tools");

  var navigationBar = $(".navigationBar");
  var jumbotronContainer = $(".jumbotronContainer");
  var content = $(".content");
  var additionalInfo = $(".additionalInfo");

  home.on('click', function(){
    console.log("Home clicked");
    //loadJumbotron();
    jumbotronContainer.load("/assets/core/NavigationBarJumbotron.html");
    content.load("/assets/core/HomePageContent.html");
  })

  indoor_plants.on('click', function() {
    console.log("Indoor plants clicked");
    jumbotronContainer.empty();
    content.load("/assets/core/IndoorPlantsContent.html", null, function(responsetxt, statusTxt, xhr) {
      $.getScript("js/plantcardLoadingScript.js");
    });
  })

  outdoor_plants.on('click', function(){
    console.log("Outdoor plants clicked");
    jumbotronContainer.empty();
  })

  decorations.on('click', function() {
    console.log("Decorations clicked");
    jumbotronContainer.empty();
  })

  tools.on('click', function() {
    console.log("Tools clicked");
    jumbotronContainer.empty();
  })
})
