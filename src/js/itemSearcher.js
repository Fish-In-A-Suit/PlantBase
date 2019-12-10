/*Provides the functionality to search for items on PlantBase*/
$(document).ready(function() {
  var searchField = $("#searchField");
  var submitButton = $("#submitButton");

  submitButton.on("click", function() {
    console.log("searchField = " + searchField);
    var searchText = searchField.val(); /*this gets the value of the searchField using val()*/
    var searchTextUppercase = searchText.toUpperCase(); //so that it's case insensitive
    console.log("searchText = " + searchTextUppercase);

    highlight(searchForItem(searchTextUppercase));
  })
})

/*Highlights the given searchResult. It finds the correct plantcard corresponding to the
given search result and highlights it.*/
function highlight(searchResult) {
  console.log("Highlighting search result " + searchResult);
}

/*Performs exact and approximate searches on all of the possible search quereis*/
function searchForItem(searchText) {
  console.log("Searching for: " + searchText);
  var searchResult = "";
  searchResult = exactSearch(searchText);

  if(searchResult == undefined) {
    console.log("Exact search for query " + searchText + " unsuccessful. Starting approximate search");
    searchResult = approximateSearch(searchText);

    if(searchResult === "") {
      console.log("There are no matches for search: " + searchText);
      return "";
    } else {
      return searchResult;
    }
  } else {
    return searchResult;
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

    //console.log(i + ": inspecting " + displayName);

    /*tests if the search text matches either the display name of the plant or any other common names*/
    if(searchText === displayName) {
      console.log("Successful match for " + searchText + "! (dp)");
      return plantReference;
    } else {
      //console.log("Display name not matching. Testing if any of other names match for plant " + displayName);
      for(j = 0; j<otherNames.length; j++) {
        console.log("testing other name:" + otherNames[j]);
        if(searchText === otherNames[j]) {
          console.log("Successful match for " + searchText + "! (on)");
          return plantReference;
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
            return plantReference;
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
  if(chars.length<2) {
    console.log("Too short search text. Cannot perform approximate search.");
    return "";
  }

  var segments = splitIntoSegmentsByThree(searchText);
  var matches = []; //how many segments are matching in a given string
  var matchSuccessThreshold = 0.90;

  for(i = 0; i<allSearchQueries.length; i++) {
    console.log("Testing display names");
    var searchQuery = allSearchQueries[i];
    var plantReference = searchQuery[0];
    var displayName = searchQuery[1];
    var otherNames = searchQuery[2];

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
      return plantReference;
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
        return plantReference;
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
