/*This script provides functionality for the next button in the secondary navigationBar
  of additional plant info */
var plantNames = ["Snake_plant", "Aloe_vera", "Peace_lily", "Spider_plant", "Jade_plant", "Peperomia", "Crown_of_thorns", "Schefflera", "ZZ_plant", "Money_plant", "Fiddle_leaf_fig", "Begonia", "Yucca_plant", "Bromeliad", "African_violets", "Rubber_plant", "Dieffenbachia", "Devils_ivy", "Calathea", "Asparagus_fern", "Aglaonema", "Ponytail_palm", "Cast-iron_plant", "Dragon_tree"];

function loadNextPlantInfo() {
  console.log("loadNextPlantInfo: currentPlant = " + currentPlant);
  var additionalPlantInfoDiv = $(".additionalInfo");

  var nextPlant = "";
  for(i = 0; i<plantNames.length; i++) {
    if(plantNames[i] === currentPlant) {
      /*if the queried plant is the last, then the next plant is the first in the array,
      else next plant is the next to the current queried plant that equals currentPlant*/
      if(i+2 > plantNames.length) {
        nextPlant=plantNames[0];
      } else {
        nextPlant=plantNames[i+1];
      }
    }

    console.log("nextPlant = " + nextPlant);
  }
  var htmlCode = "assets/core/plantInfo/" + nextPlant + ".html";
  console.log("htmlCode = " + htmlCode);

  currentPlant = nextPlant;
  additionalPlantInfoDiv.load(htmlCode);
}
