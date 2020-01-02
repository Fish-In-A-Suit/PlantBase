/*this script is responsible for loading up pages when the buttons of the navigation bar are clicked.*/
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

    //saveItem(SS_HIGHLIGHT_TF, false);

    //loadJumbotron();

    //loadhomepagelocation
    window.location.pathname = "/MainPage.html"

    jumbotronContainer.load("/assets/core/NavigationBarJumbotron.html");
    content.load("/assets/core/HomePageContent.html");
    document.title = TITLE_HOMEPAGE;
  })

  indoor_plants.on('click', function() {
    console.log("Indoor plants clicked");

    saveItem(SS_HIGHLIGHT_TF, false);

    //load indoor plants location
    window.location.pathname="/IndoorPlants.html";

  })

  outdoor_plants.on('click', function(){
    console.log("Outdoor plants clicked");

    //saveItem(SS_HIGHLIGHT_TF, false);

    //load outdoor plants location
    window.location.pathname="/OutdoorPlants.html";

    jumbotronContainer.empty();
    //document.title = TITLE_OUTDOOR_PLANTS;
  })

  decorations.on('click', function() {
    console.log("Decorations clicked");

    //saveItem(SS_HIGHLIGHT_TF, false);

    //load decorations location
    window.location.pathname="/Decorations.html";

    jumbotronContainer.empty();
    //document.title = TITLE_DECORATIONS;
  })

  tools.on('click', function() {
    console.log("Tools clicked");

    //saveItem(SS_HIGHLIGHT_TF, false);

    //load tools location
    window.location.pathname="/Tools.html";

    jumbotronContainer.empty();
    //document.title = TITLE_TOOLS;
  })
})

/*Loads the correct page given the pageReference:
  - H: load home page
  - IP: load indoor plants page
  - OP: load outdoor plants page
  - D: load decorations page
  - T: load tools page */
function loadPage(pageReference) {
  console.log("Loading page for PR: " + pageReference);

  switch(pageReference) {
    case "H":
      loadPageContent("/assets/core/HomePageContent.html", "/assets/core/NavigationBarJumbotron.html", true, TITLE_HOMEPAGE, null, false)
      break;
    case "IP":
      //load indoor plants page
      loadPageContent("/assets/core/IndoorPlantsContent.html", null, false, PR_INDOOR_PLANTS, "js/plantcardLoadingScript.js", true);
      break;
    case "OP":
      //load outdoor plants page
      break;
    case "D":
      //load decorations page
      break;
    case "T":
      //load tools page
      break;
  }
}

function loadPageWithHighlighDiv(pageReference, contentDivId) {
  console.log("Loading page for PR: " + pageReference + ", highlighting content div id " + contentDivId);

  switch(pageReference) {
    case "H":
      loadPageContentHighlighted("/assets/core/HomePageContent.html", "/assets/core/NavigationBarJumbotron.html", true, TITLE_HOMEPAGE, null, contentDivId);
      break;
    case "IP":
      //load indoor plants page
      loadPageContentHighlighted("/assets/core/IndoorPlantsContent.html", null, false, PR_INDOOR_PLANTS, "js/plantcardLoadingScript.js", contentDivId);
      break;
    case "OP":
      //load outdoor plants page
      break;
    case "D":
      //load decorations page
      break;
    case "T":
      //load tools page
      break;
  }
}


  //TODO: GET CORRECT SCRIPT IN HERE
  function loadPageContent(contentInfo, jumbotronInfo, shouldLoadJumbotron, pageTitle, optionalScript, shouldLoadOptionalScripts) {
    console.log("Loading page: " + pageTitle);
    var jumbotronContainer = $(".jumbotronContainer");

    if(shouldLoadJumbotron) {
      jumbotronContainer.load(jumbotronInfo);
    } else {
      jumbotronContainer.empty();
    }

    if(shouldLoadOptionalScripts) {
      $(".content").load(contentInfo, null, function(responsetxt, statusTxt, xhr) {
        $.getScript(optionalScript);
      });
    } else {
      $(".content").load(contentInfo);
    }

    //this page title argument is actually page reference lol fix this naming issue!
    document.title = getPageTitle(pageTitle);
  }

function loadPageContentHighlighted(contentInfo, jumbotronInfo, shouldLoadJumbotron, pageTitle, optionalScript, contentDivId) {
  var jumbotronContainer = $(".jumbotronContainer");

  if(shouldLoadJumbotron) {
    jumbotronContainer.load(jumbotronInfo);
  } else {
    jumbotronContainer.empty();
  }

  $(".content").load(contentInfo, null, function(responsetxt, statusTxt, xhr) {
    console.log("callback: content for page " + contentInfo + " has already been loaded.");
    $.getScript(optionalScript);

    if(contentDivId !== null) {
      setTimeout(() => {
        console.log("scrolling div into viewport: " + contentDivId);
        var contentDiv = $("#" + contentDivId);
        scrollIntoView(contentDiv);
        animateBorder(contentDiv);
        setTimeout(function(){
        contentDiv.toggleClass("special");
        }, 4000); //quit after 4s
      }, 500);
    } else {
      console.log("ContentDivId is NULL!");
    }


  });

  document.title = getPageTitle(pageTitle);
}

