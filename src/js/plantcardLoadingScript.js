$(document).ready(function(){
  loadTrendingPlantCard("#trendingPlant1", "assets/image/plants/papip.png", "Pepperomia", 2, 30, 20);
  loadTrendingPlantCard("#trendingPlant2", "assets/image/plants/pilea_peperomioides.png", "Money plant", 4, 20, 10);
  loadTrendingPlantCard("#trendingPlant3", "assets/image/plants/zz_plant.png", "ZZ plant", 1, 30, 80);
  loadTrendingPlantCard("#trendingPlant4", "assets/image/plants/aloe.png", "Aloe", 1, 15, 30);

  loadRegularPlantCard("#regularPlant1", "assets/image/plants/snake_plant.png", "Snake plant", 1, 15, 30);
  loadRegularPlantCard("#regularPlant2", "assets/image/plants/crown_of_thorns.png", "Crown of thorns", 3, 15, 30);
  loadRegularPlantCard("#regularPlant3", "assets/image/plants/schefflera.png", "Schefflera", 3, 15, 30);
});

function loadPlantCard(plantCardHTML, srcDivId, imgPath, rawName, waterLevel, price, height) {
  var srcDiv = $(srcDivId);
  var name = refactorNameToId(rawName);

  srcDiv.load(plantCardHTML, null, function(responsetxt, statusTxt, xhr){
    var imgSrcContainer = srcDiv.find("#imgSrc");
    var plantNameContainer = srcDiv.find("#plant_name");
    var waterDropletsContainer = srcDiv.find("#plantcard_watering_info");
    var priceContainer = srcDiv.find("#price");
    var avgHeightContainer = srcDiv.find("#avgHeight");

    var newImgSrcContainerId = imgSrcContainer.attr("id") + "_" + name;
    var newPlantNameContainerId = plantNameContainer.attr("id") + "_" + name;
    var newWaterDropletsContainerId = waterDropletsContainer.attr("id") + "_" + name;
    var newPriceContainerId = priceContainer.attr("id") + "_" + name;
    var newAvgHeightContainerId = avgHeightContainer.attr("id") + "_" + name;

    console.log("" + imgSrcContainer.attr("id"));
    console.log("" + plantNameContainer.attr("id"));
    console.log("" + waterDropletsContainer.attr("id"));
    console.log("" + priceContainer.attr("id"));
    console.log("" + avgHeightContainer.attr("id"));

    console.log("-------");

    console.log(newImgSrcContainerId);
    console.log(newPlantNameContainerId);
    console.log(newWaterDropletsContainerId);
    console.log(newPriceContainerId);
    console.log(newAvgHeightContainerId);

    console.log("-------");

    imgSrcContainer.attr("id", newImgSrcContainerId);
    plantNameContainer.attr("id", newPlantNameContainerId);
    waterDropletsContainer.attr("id", newWaterDropletsContainerId);
    priceContainer.attr("id", newPriceContainerId);
    avgHeightContainer.attr("id", newAvgHeightContainerId);

    console.log("" + imgSrcContainer.attr("id"));
    console.log("" + plantNameContainer.attr("id"));
    console.log("" + waterDropletsContainer.attr("id"));
    console.log("" + priceContainer.attr("id"));
    console.log("" + avgHeightContainer.attr("id"));

    var updatedImgSrcContainer = srcDiv.find("#"+newImgSrcContainerId);
    var updatedPlantNameContainer = srcDiv.find("#"+newPlantNameContainerId);
    var updatedWaterDropletsContainer = srcDiv.find("#"+newWaterDropletsContainerId);
    var updatedPriceContainer = srcDiv.find("#"+newPriceContainerId);
    var updatedAvgHeightContainer = srcDiv.find("#"+newAvgHeightContainerId);

    updatedImgSrcContainer.attr("src", imgPath);
    updatedPlantNameContainer.html(rawName);
    updatedPriceContainer.html(price + "$");
    updatedAvgHeightContainer.html(height + "cm");

    addWaterDroplets(updatedWaterDropletsContainer, waterLevel);

    //updates the button id
    var button = srcDiv.find("#plantcard_information_button");
    var newButtonId = button.attr("id") + "_" + name;
    button.attr("id", newButtonId);
    console.log("Updated button id: " + button.attr("id"));

    /*
    var buttonClickEventAsString = "loadAdditionalInfo(" + button.attr("id") + ");"
    button.attr("onClick", buttonClickEventAsString); */
    button.on("click", function() {
      loadAdditionalInfo(button.attr("id"));
    })
  });
}

function loadTrendingPlantCard(srcDivId, imgPath, rawName, waterLevel, price, height) {
  loadPlantCard("assets/core/TrendingPlantCardResponsive.html", srcDivId, imgPath, rawName, waterLevel, price, height);
}

function loadRegularPlantCard(srcDivId, imgPath, rawName, waterLevel, price, height) {
  loadPlantCard("assets/core/RegularPlantCardResponsive.html", srcDivId, imgPath, rawName, waterLevel, price, height);
}

function addWaterDroplets(container, count) {
  console.log("Adding " + count + " water droplets.");
  //just for testing, will delete this later anyways.. removes all current child elements
  container.empty();

  switch(count) {
    case 1:
      //add 1 water droplet
      addWaterDroplet(container);
      break;
    case 2:
      addWaterDroplet(container);
      addWaterDroplet(container);
      //add two water droplets
      break;
    case 3:
      addWaterDroplet(container);
      addWaterDroplet(container);
      addWaterDroplet(container);
      //add three water droplets
      break;
    case 4:
      addWaterDroplet(container);
      addWaterDroplet(container);
      addWaterDroplet(container);
      addWaterDroplet(container);
      //add 4 water droplets
      break;
    default:
      console.log("Illegal plant water level: " + waterLevel);
  }
}

function addWaterDroplet(container) {
  console.log("Adding a water droplet");
  /* Creation using js
  var imgView = document.createElement("IMG");
  imgView.setAttribute("src", "image/water_droplet.svg");
  imgView.setAttribute("width", "15px");
  imgView.setAttribute("height", "20px");
  imgView.setAttribute("alt", "water droplet");
  imgView.setAttribute("margin", "20px");
  imgView.className = "water_droplet";
  container.append(imgView);
  */

  //creation using jQuery
  var imgView = $('<img class="water_droplet">'); //equivalent to document.createElement("IMG");
  imgView.attr("src", "assets/image/water_droplet.svg");
  imgView.attr("width", "15px");
  imgView.attr("height", "20px");
  imgView.attr("alt", "water droplet");
  imgView.css("margin-right", "5%");

  imgView.appendTo(container);

  console.log(imgView);
}

/*
Adds underscores between whitespaces (if any) of a name so it can be used as an id for elements
*/
function refactorNameToId(name) {
  var result = name.split(".").join("_");
  return result.split(" ").join("_");
}
