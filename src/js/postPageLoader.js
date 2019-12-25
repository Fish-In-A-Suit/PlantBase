/*THIS IS THE BRAND NEW WAY OF LOADING PAGES ACCORDING TO THE LATEST STANDARD!
From the navigation bar, pageLoader.js carries out the page loading execution. Then here,
in the document ready function, different actions are taken based on which website is loaded (this is found
out by observing the title of the webpage*/

$(document).ready(function() {
  var title = refactorTitle(document.title);

  var footerContainer = $(".footer-container");

  //load navigation bar
  var navbar = $(".navigationBar");
  navbar.load("/assets/core/NavigationBar.html", null, function(responsetxt, statusTxt, xhr) {
    console.log("Finished loading navigation bar!");
    $.getScript("js/pageLoader.js"); //this enables the navigation bar to work!

    //empty jumbotron
    if(title!=="Home") {
      clearJumbotron();
    }
  });

  switch(title) {
    case "Home":
      break;
    case "IndoorPlants":
      console.log("ON IP");
      loadIndoorPlantsPage();
      break;
    case "OutdoorPlants":
      console.log("ON OP");
      loadOutdoorPlantsPage();
      break;
    case "Decorations":
      console.log("ON D");
      loadDecorationsPage();
      break;
    case "Tools":
      console.log("ON T");
      loadToolsPage();
      break;
  }

  console.log("Loading footer");
  footerContainer.load("/assets/core/Footer.html");
})

function refactorTitle(title) {
  var cleaned = title.replace(/\s/g, ''); //removes all whitespace
  var split = cleaned.split("-");
  console.log("split0: " + split[0] + "; split1: " + split[1]);
  return split[1];
}

function clearJumbotron() {
  $(".jumbotronContainer").empty();
}

function loadIndoorPlantsPage() {
  //load content
  var content = $(".content");
  content.load("/assets/core/IndoorPlantsContent.html", null, function(responsetxt, statusTxt, xhr) {
    //this calls the script only after the indoor plants are done loading
    console.log("Content finished loading!");
    $.getScript("js/plantcardLoadingScript.js").done(function(script, textStatus) {
      console.log("Finished loading and running plantcardLoadingScript.js with a status of: " + textStatus);
    });
    $.getScript("js/additionalInfoLoader.js");
    $.getScript("js/itemSearcher.js");

    //this captures the value... converts it to boolean
    var highlightCondition = !!getItem(SS_HIGHLIGHT_TF);
    console.log("[postPageLoader]: SS_HIGHLIGHT_TF = " + highlightCondition);
    console.log("[postPageLoader]: type = " + typeof highlightCondition);
    if(highlightCondition === true) {
      console.log("highlighting...");
      setTimeout(highlightPlantCard, 1000);
    }
  });
}

/*TODO*/
function loadOutdoorPlantsPage() {

}

/*TODO*/
function loadDecorationsPage() {

}

/*TODO*/
function loadToolsPage() {

}

function highlightPlantCard() {
  console.log("SS_HIGHLIGHT_TF: " + getItem(SS_HIGHLIGHT_TF));
  console.log("animating: " + getItem(SS_HIGHLIGHT_PLANTCARD));
  var prId = getItem(SS_HIGHLIGHT_PLANTCARD);

  console.log("prId = " + prId);
  if(prId.localeCompare("")==0) {
    console.log("prId not defined. Quitting highlightPlantCard function");
    return;
  } else {
    console.log("continuing");
  }

  var pr = $("#"+prId);

  scrollIntoView(pr);
  animateBorder(pr);
  setTimeout(function(){
  pr.toggleClass("special");
  }, 4000); //quit after 4s
  saveItem(SS_HIGHLIGHT_TF, false);
}
