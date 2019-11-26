/*This scripts loads up the navigation bar*/
$(document).ready(function() {
  console.log("Loading navigation bar...");

  $('.navigationBar').load("core/NavigationBar.html", null, function(responsetxt, statusTxt, xhr) {
    console.log("Loading navigation bar slider...");

    var nb = $(".navigationBar");
    var contentDiv = $("#contentDiv");

    var home = nb.find("#home");
    var indoorPlants = nb.find("#indoor_plants");
    var outdoorPlants = nb.find("#outdoor_plants");
    var decorations = nb.find("#decorations");
    var tools = nb.find("#tools");

    var slider = nb.find(".slide");

    home.css("width", "48px");

    /*This makes the slider slide along the elements*/
    $('li').on('click', function() {
      console.log("Click!");
      console.log("clicked in li element with id: " + $(this).attr("id"));
      $(this).siblings().removeClass('active');
      $(this).addClass('active');

      console.log("home class: " + home.attr("class"));
      console.log("indoorPlants class: " + indoorPlants.attr("class"));
      console.log("outdoorPlants class: " + outdoorPlants.attr("class"));
      console.log("decorations class: " + decorations.attr("class"));
      console.log("tools class: " + tools.attr("class"));
    })

    home.on("click", function() {
      console.log("Loading home.html into contentDiv");
      //todo: load home.html

      slider.css("width", "48px");
      slider.css("left", "0px");
    })

    indoorPlants.on("click", function() {
      console.log("Loading indoor_plants.html into contentDiv");
      contentDiv.load("indoor_plants.html");

      slider.css("width", "160px");
      slider.css("left", "48px");
    })

    outdoorPlants.on("click", function() {
      console.log("Loading outdoor_plants.html into contentDiv");
      contentDiv.load("outdoor_plants.html");

      slider.css("width", "160px");
      slider.css("left", "208px");
    })

    decorations.on("click", function() {
      console.log("Loading decorations.html into contentDiv");
      contentDiv.load("decorations.html");

      slider.css("width", "160px");
      slider.css("left", "368px");
    })

    tools.on("click", function() {
      console.log("Loading tools.html into contentDiv");
      contentDiv.load("tools.html");

      slider.css("width", "160px");
      slider.css("left", "528px");
    })
  });
})
