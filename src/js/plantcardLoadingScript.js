/*Loads all of the plantcards*/
$(document).ready(function(){
  loadTrendingPlantCard("#trendingPlant1", "assets/image/plants/snake_plant.png", "Snake plant", 1, 15, 30);
  loadTrendingPlantCard("#trendingPlant2", "assets/image/plants/aloe.png", "Aloe vera", 1, 15, 30);
  loadTrendingPlantCard("#trendingPlant3", "assets/image/plants/peace_lily.png", "Peace lily", 3, 15,30);
  loadTrendingPlantCard("#trendingPlant4", "assets/image/plants/spider_plant.png", "Spider plant", 3, 15, 30);
  loadTrendingPlantCard("#trendingPlant5", "assets/image/plants/jade_plant.png", "Jade plant", 1, 15, 30);

  loadRegularPlantCard("#regularPlant1", "assets/image/plants/papip.png", "Peperomia", 2, 30, 20);
  loadRegularPlantCard("#regularPlant2", "assets/image/plants/crown_of_thorns.png", "Crown of thorns", 3, 15, 30);
  loadRegularPlantCard("#regularPlant3", "assets/image/plants/schefflera.png", "Schefflera", 3, 15, 30);
  loadRegularPlantCard("#regularPlant4", "assets/image/plants/zz_plant.png", "ZZ plant", 1, 30, 80);
  loadRegularPlantCard("#regularPlant5", "assets/image/plants/pilea_peperomioides.png", "Money plant", 4, 20, 10);
  loadRegularPlantCard("#regularPlant6", "assets/image/plants/fiddle_leaf_fig.png", "Fiddle leaf fig", 3, 20, 10);
  loadRegularPlantCard("#regularPlant7", "assets/image/plants/begonia.png", "Begonia", 3, 20, 40);
  loadRegularPlantCard("#regularPlant8", "assets/image/plants/yucca.png", "Yucca plant", 1, 20, 40);
  loadRegularPlantCard("#regularPlant9", "assets/image/plants/bromeliad.png", "Bromeliad", 2, 20, 40);
  loadRegularPlantCard("#regularPlant10", "assets/image/plants/african_violets.png", "African violets", 3, 20, 30);
});

function loadPlantCard(plantCardHTML, srcDivId, imgPath, rawName, waterLevel, price, height) {
  var srcDiv = $(srcDivId);
  var name = refactorNameToId(rawName);

  srcDiv.load(plantCardHTML, null, function(responsetxt, statusTxt, xhr){
    console.log("Loading plantcard " + plantCardHTML);
    var contentDiv = srcDiv.find("#pc_container");
    //var loaderDiv = srcDiv.find("#loader");
    var imgSrcContainer = srcDiv.find("#imgSrc");
    var plantNameContainer = srcDiv.find("#plant_name");
    var waterDropletsContainer = srcDiv.find("#plantcard_watering_info");
    var priceContainer = srcDiv.find("#price");
    var avgHeightContainer = srcDiv.find("#avgHeight");

    /*
    var span1 = srcDiv.find("#span1");
    var span2 = srcDiv.find("#span2");
    var span3 = srcDiv.find("#span3");
    var span4 = srcDiv.find("#span4");
    */

    var newContentDivId = srcDiv.attr("id") + "_" + name;
    var reformattedContentDivId = reformatContentDivId(newContentDivId);

    //var newLoaderDivId = loaderDiv.attr("id") + "_" + name;
    var newImgSrcContainerId = imgSrcContainer.attr("id") + "_" + name;
    var newPlantNameContainerId = plantNameContainer.attr("id") + "_" + name;
    var newWaterDropletsContainerId = waterDropletsContainer.attr("id") + "_" + name;
    var newPriceContainerId = priceContainer.attr("id") + "_" + name;
    var newAvgHeightContainerId = avgHeightContainer.attr("id") + "_" + name;

    /*
    var newSpan1Id = span1.attr("id") + "_" + name;
    var newSpan2Id = span1.attr("id") + "_" + name;
    var newSpan3Id = span1.attr("id") + "_" + name;
    var newSpan4Id = span1.attr("id") + "_" + name;
    var allSpanIds = [newSpan1Id, newSpan2Id, newSpan3Id, newSpan4Id];
    */

    /*
    console.log("" + imgSrcContainer.attr("id"));
    console.log("" + plantNameContainer.attr("id"));
    console.log("" + waterDropletsContainer.attr("id"));
    console.log("" + priceContainer.attr("id"));
    console.log("" + avgHeightContainer.attr("id"));

    console.log("-------");

    console.log("test: reformattedContentDivId = " + reformattedContentDivId);
    console.log(newImgSrcContainerId);
    console.log(newPlantNameContainerId);
    console.log(newWaterDropletsContainerId);
    console.log(newPriceContainerId);
    console.log(newAvgHeightContainerId);

    console.log("-------");
*/
    contentDiv.attr("id", reformattedContentDivId);
    //loaderDiv.attr("id", newLoaderDivId);
    imgSrcContainer.attr("id", newImgSrcContainerId);
    plantNameContainer.attr("id", newPlantNameContainerId);
    waterDropletsContainer.attr("id", newWaterDropletsContainerId);
    priceContainer.attr("id", newPriceContainerId);
    avgHeightContainer.attr("id", newAvgHeightContainerId);

    /*
    span1.attr("id", newSpan1Id);
    span2.attr("id", newSpan2Id);
    span3.attr("id", newSpan3Id);
    span4.attr("id", newSpan4Id);
    */

/*
    console.log("" + imgSrcContainer.attr("id"));
    console.log("" + plantNameContainer.attr("id"));
    console.log("" + waterDropletsContainer.attr("id"));
    console.log("" + priceContainer.attr("id"));
    console.log("" + avgHeightContainer.attr("id"));
*/

    var updatedContentDiv = srcDiv.find("#" + newContentDivId);
    var updatedImgSrcContainer = srcDiv.find("#"+newImgSrcContainerId);
    var updatedPlantNameContainer = srcDiv.find("#"+newPlantNameContainerId);
    var updatedWaterDropletsContainer = srcDiv.find("#"+newWaterDropletsContainerId);
    var updatedPriceContainer = srcDiv.find("#"+newPriceContainerId);
    var updatedAvgHeightContainer = srcDiv.find("#"+newAvgHeightContainerId);

    /*
    loaders.push(newLoaderDivId, allSpanIds);
    console.log("pushed to loaders. There are now: " + (loaders.length/2) + " loaders")
    updateLoaderSpans();
    */

    updatedImgSrcContainer.attr("src", imgPath);
    updatedPlantNameContainer.html(rawName);
    updatedPriceContainer.html(price + "$");
    updatedAvgHeightContainer.html(height + "cm");

    addWaterDroplets(updatedWaterDropletsContainer, waterLevel);

    //updates the button id
    var button = srcDiv.find("#plantcard_information_button");
    var newButtonId = button.attr("id") + "_" + name;
    button.attr("id", newButtonId);
    //console.log("Updated button id: " + button.attr("id"));

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
  //console.log("Adding " + count + " water droplets.");
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
  //console.log("Adding a water droplet");
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

  //console.log(imgView);
}

/*
Adds underscores between whitespaces (if any) of a name so it can be used as an id for elements
*/
function refactorNameToId(name) {
  var result = name.split(".").join("_");
  return result.split(" ").join("_");
}

/*
newContentDivId = "trendingPlant1_Crown_of_thorns... the purpose of this is to only return Crown_of_thorns"
*/
function reformatContentDivId(newContentDivId) {
  var split = newContentDivId.split("_");
  var resultArr = [];
  var resultString = "";

  if(split.length > 2) {
    //console.log("split is greater than two: " + split.length);
    for(i=1;i<split.length;i++) {
      //console.log("i: " + i + " ... split[i]: " + split[i]);
      resultArr.push(split[i]);
    }

    //console.log("array: " + resultArr);
    for(j=0; j<resultArr.length; j++) {
      if(j==(resultArr.length-1)) {
        //end of array
        resultString+=resultArr[j];
      } else {
        resultString+=resultArr[j];
        resultString+="_";
      }
    }
    //console.log("returning: " +resultString);
    return "contentDiv_" + resultString;
  } else {
    //console.log("returning: " + split[1]);
    return "contentDiv_" + split[1];
  }
}

/*this is important for animation purposes!*/
function updateLoaderSpans() {
  for(i=0; i<loaders.length; i=i*2) {
    var currentLoader = loaders(i);
    var correspondingSpans = loaders(i+1);

    //console.log("x:y = " + currentLoader.style.left + " " + currentLoader.style.top);
  }
}
