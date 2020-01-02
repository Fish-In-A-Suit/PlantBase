/*THIS IS THE BRAND NEW WAY OF LOADING PAGES ACCORDING TO THE LATEST STANDARD!
From the navigation bar, pageLoader.js carries out the page loading execution. Then here,
in the document ready function, different actions are taken based on which website is loaded (this is found
out by observing the title of the webpage*/

$(document).ready(function() {
  var title = refactorTitle(document.title);
  debugger;

  //load navigation bar
  var navbar = $(".navigationBar");
  navbar.load("/assets/core/NavigationBar.html", null, function(responsetxt, statusTxt, xhr) {
    console.log("Finished loading navigation bar!");
    $.getScript("js/pageLoader.js"); //this enables the navigation bar to work!
    $.getScript("js/itemSearcher.js");

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
  debugger;
  content.load("/assets/core/IndoorPlantsContent.html", null, function(responsetxt, statusTxt, xhr) {
    //this calls the script only after the indoor plants are done loading
    console.log("Content finished loading!");
    $.getScript("js/plantcardLoadingScript.js").done(function(script, textStatus) {
      console.log("Finished loading and running plantcardLoadingScript.js with a status of: " + textStatus);

      console.log("SS_HIGHLIGHT_TF: " + getItem(SS_HIGHLIGHT_TF));
      debugger;
      var cond = "true";
      if(cond.localeCompare(getItem(SS_HIGHLIGHT_TF)) == 0) {
        setTimeout(highlightPlantCard, 4000);
      }
    });
    $.getScript("js/additionalInfoLoader.js");


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
  if(getItem(SS_HIGHLIGHT_TF)) {
    console.log("animating");
    var prId = getItem(SS_HIGHLIGHT_PLANTCARD);
    var pr = $("#"+prId);
    scrollIntoView(pr);
    animateBorder(pr);
    setTimeout(function(){
    pr.toggleClass("special");
    }, 4000); //quit after 4s
    saveItem(SS_HIGHLIGHT_TF, false);
  }
}
