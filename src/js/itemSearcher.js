/*Provides the functionality to search for items on PlantBase*/
$(document).ready(function() {
  var searchField = $("#searchField");
  var submitButton = $("#submitButton");

  submitButton.on("click", function() {
    console.log("searchField = " + searchField);
    var searchText = searchField.val(); /*this gets the value of the searchField using val()*/
    var searchTextUppercase = searchText.toUpperCase(); //so that it's case insensitive
    console.log("searchText = " + searchTextUppercase);
    debugger;

    highlight(searchForItem(searchTextUppercase));
  })
})

/*Highlights the given searchResult. It finds the correct plantcard corresponding to the
given search result and highlights it.*/
function highlight(searchResultBundle) {
  console.log("Highlighting search result " + searchResultBundle[0]);

  var contentDivId = "contentDiv_" + searchResultBundle[0]; //the content div (background) of the specified searchResult
  var contentDiv = $("#" + contentDivId);

  console.log("  - should highlight: " + getItem(SS_HIGHLIGHT_TF));
  console.log("  - highlight div: " + getItem(SS_HIGHLIGHT_PLANTCARD));

  console.log("Highlight test: title of this page is: " + document.title);
  if(checkPageCorrectness(searchResultBundle[1]) == false) {
    //DEPRECATED METHOD
    //if not on correct page, load the correct page from searchResultBundle[1]
    //loadPageWithHighlighDiv(searchResultBundle[1], contentDivId); //this method in pageLoader.js
    console.log("NOT ON CORRECT PAGE");
    debugger;
    //new method: set state and then read from postPageLoader
    saveItem(SS_HIGHLIGHT_TF, true);
    saveItem(SS_HIGHLIGHT_PLANTCARD, contentDivId);

    //load correct page
    var path = findCorrectPagePath(searchResultBundle[1]);
    console.log("New page path: " + path);
    debugger;
    window.location.href= path;
  } else {
    console.log("Element to be highlighted is on the same page!");
    saveItem(SS_HIGHLIGHT_TF, false); //highlighting while loading another page not neccessary
    saveItem(SS_HIGHLIGHT_PLANTCARD, "");
    scrollIntoView(contentDiv);
    animateBorder(contentDiv);
    //debugger;
    setTimeout(function(){
    contentDiv.toggleClass("special");
    }, 4000); //quit after 4s
    debugger;
  }
}



/*Checks if the specified page reference mathces the current page.*/
function checkPageCorrectness(pageReference) {
  var currentPageTitle = document.title;
  var currentPageReference = getPageReference(currentPageTitle);
  if(currentPageReference === pageReference) {
    console.log("Search element is on correct page.");
    return true;
  } else {
    console.log("Search element is on some other page.");
    return false;
  }
}

function findCorrectPagePath(pageReference) {
  switch(pageReference) {
    case PR_HOMEPAGE:
      return PATH_HOMEPAGE;
    case PR_INDOOR_PLANTS:
      return PATH_INDOOR_PLANTS;
    case PR_OUTDOOR_PLANTS:
      return PATH_OUTDOOR_PLANTS;
    case PR_DECORATIONS:
      return PATH_DECORATIONS;
    case PR_TOOLS:
      return PATH_TOOLS;
    default:
      console.log("ERROR finding correct page path for reference: " + pageReference);
  }
}

/*Performs exact and approximate searches on all of the possible search quereis*/
function searchForItem(searchText) {
  console.log("Searching for: " + searchText);
  var bundle = [];
  bundle = exactSearch(searchText); //[0]: plantReference, [1]: page reference

  if(bundle == undefined) {
    console.log("Exact search for query " + searchText + " unsuccessful. Starting approximate search");
    bundle = approximateSearch(searchText);

    if(bundle.length == 0) {
      console.log("There are no matches for search: " + searchText);
      return [];
    } else {
      return bundle;
    }
  } else {
    return bundle;
  }
}

/*Performs exact search of the search text against all of the possible queries and returns
the correct plant name (i.e Crown_of_thorns) or "" if no matches have been found.*/
function exactSearch(searchText) {
  for(i = 0; i<allSearchQueries.length; i++) {
    var searchQuery = allSearchQueries[i];
    var plantReference = searchQuery[0];
    var displayName = searchQuery[1];
    var otherNames = searchQuery[2];
    var pageReference = searchQuery[3];
    var result=[];

    //console.log(i + ": inspecting " + displayName);

    /*tests if the search text matches either the display name of the plant or any other common names*/
    if(searchText === displayName) {
      console.log("Successful match for " + searchText + "! (dp)");
      result.push(plantReference);
      result.push(pageReference);
      return result;
    } else {
      //console.log("Display name not matching. Testing if any of other names match for plant " + displayName);
      for(j = 0; j<otherNames.length; j++) {
        console.log("testing other name:" + otherNames[j]);
        if(searchText === otherNames[j]) {
          console.log("Successful match for " + searchText + "! (on)");
          result.push(plantReference);
          result.push(pageReference);
          return result;
        }

        /*if other name contains more than one word, check each one for match*/
        //TODO: FIND WHY THIS ISNT CALLED!
        var otherNameSplit = otherNames[j].split(" ");
        if(otherNameSplit.length > 1) {

        }
        for(l = 0; l<otherNameSplit.length; l++) {
          console.log("testing other name split: " + otherNameSplit[l]);
          if(otherNameSplit[l] === searchText) {
            console.log("Successful match for " + searchText + "! (on)");
            result.push(plantReference);
            result.push(pageReference);
            return result;
          }
        }
      }
      console.log("No search query matches with search text '" + searchText + "' for plant " + plantReference);
    }
  }
}

/*Performs approximate search of the search text against all of the possible queries and
returns the most approximate plant name or "" if all approximations are less than 70% correct*/
function approximateSearch(searchText) {
  var chars = searchText.split('');
  var result=[];

  if(chars.length<2) {
    console.log("Too short search text. Cannot perform approximate search.");
    return [];
  }

  var segments = splitIntoSegmentsByThree(searchText);
  var matches = []; //how many segments are matching in a given string
  var matchSuccessThreshold = 0.90;

  for(i = 0; i<allSearchQueries.length; i++) {
    var searchQuery = allSearchQueries[i];
    var plantReference = searchQuery[0];
    var displayName = searchQuery[1];
    var otherNames = searchQuery[2];
    var pageReference = searchQuery[3];
    console.log("Testing display names for plant: " + plantReference);

    //test display name
    for(k = 0; k<segments.length; k++) {
      if(displayName.includes(segments[k])) {
        matches.push("match");
      }
    }
    console.log("matches = " + matches.length);
    var matchCoefficient = matches.length/segments.length;
    console.log("mc = " + matchCoefficient);
    if(matchCoefficient>matchSuccessThreshold) {
      console.log("approximateSearch: match successful for " + plantReference + " with match coefficient " + matchCoefficient);
      result.push(plantReference);
      result.push(pageReference);
      return result;
    }
  }

  for(m = 0; m<allSearchQueries.length; m++) {
    var searchQuery1 = allSearchQueries[i];
    var plantReference1 = searchQuery[0];
    var displayName1 = searchQuery[1];
    var otherNames1 = searchQuery[2];

    //if display name doesnt match, text other otherNames
    for(j = 0; j<otherNames1.length; j++) {
      var otherName = otherNames1[j];
      matches = []; //reset

      for(p = 0; p<segments.length; p++) {
        if(otherName.includes(segments[p])) {
          matches.push("match");
        }
      }

      var mc = matches.length/segments.length;
      if(mc>matchSuccessThreshold) {
        console.log("approximateSearch: match successful for " + plantReference + " with match coefficient " + mc);
        result.push(plantReference);
        result.push(pageReference);
        return result;
      }
    }
  }
}

/*splits the specified string into segments of 2 characters*/
function splitIntoSegmentsByThree(str) {
  console.log(str);
  var result = str.match(/.{1,3}/g);
  console.log("splitIntoSegments: " + result);
  return result;
}
