/*Loads the specified additional info (dependent on buttonId) into the additionalInfo div*/
var currentPlant = "";

function loadAdditionalInfo(buttonId) {
  var content = $(".content");
  var additionalInfo = $(".additionalInfo");
  var plantcardAdditionalInfoHtml = findHtml(buttonId);

  console.log("Removing classes of content div. Current classes: " + content.attr("class"));
  content.removeAttr("class");
  content.attr("class", "col-6 content");
  console.log("Updated class: " + content.attr("class"));

  console.log("Removing class of additionalInfo div. Current classes: " + additionalInfo.attr("class"));
  additionalInfo.removeAttr("class");
  additionalInfo.attr("class", "col-6 additionalInfo");
  console.log("Updated class: " + additionalInfo.attr("class"));

  shrinkPlantCards();

  additionalInfo.load(plantcardAdditionalInfoHtml, null, function(responsetxt, statusTxt, xhr) {
    console.log("Additional info " + plantcardAdditionalInfoHtml + " loaded.");
  });
}

/*Closes the additional info div*/
function closeAdditionalInfo() {
  /*this function is called from .prev list element which signifies the closing button*/
  var content = $(".content");
  var additionalInfo = $(".additionalInfo");

  content.removeAttr("class");
  content.attr("class", "col-12 content");

  additionalInfo.removeAttr("class");
  additionalInfo.attr("class", "col additionalInfo");

  additionalInfo.empty();
  currentPlant = "";

  expandPlantCards();
}

/*Finds the html file in core/plantInfo corresponding to the specified buttonId*/
function findHtml(buttonId) {
  console.log("Getting html equivalent to " + buttonId);
  var htmlFile = "assets/core/plantInfo/" + getPlantNameFromBtnId(buttonId) + ".html";
  console.log("Result: " + htmlFile);
  return htmlFile;
}

function getPlantNameFromBtnId(buttonId) {
  console.log("Getting plant name from btn id: " + buttonId);
  var plantName = buttonId.toString().replace("plantcard_information_button_", "");
  console.log("Plant name: " + plantName);
  currentPlant = plantName;
  console.log("Current plant: " + currentPlant);
  return plantName;
}

/*Searches for all divs with class styleableCard and updates their bootstrap values*/
function shrinkPlantCards() {
  var cards = $(".styleableCard");

  console.log("Shrinking plant cards");
  //a for loop
  cards.each(function(index) {
    $(this).removeAttr("class");
    $(this).attr("class", "col-md-12 col-lg-6 col-xxl-4 col-xxxl-3 mb-4 styleableCard");
    console.log(index + ": " + $(this).attr("class"));
  });
}

/*Searches for all divs with class styleableCard and updates their bootstrap values*/
function expandPlantCards() {
  var cards = $(".styleableCard");

  console.log("Expanding plant cards");
  cards.each(function(index) {
    $(this).removeAttr("class");
    $(this).attr("class", "col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xxl-3 col-xxxl-2 mb-4 styleableCard");
  });
}
