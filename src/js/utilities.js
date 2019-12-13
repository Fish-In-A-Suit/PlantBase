/*this contains various useful utility functions*/

/*scrolls the content div into view*/
function scrollIntoView(contentDiv) {
  console.log("contentDiv = " + contentDiv);
  var offset = contentDiv.offset();
  console.log("offset = " + contentDiv.offset());
  //offset.left -= 20;
  offset.top -= 20;

  $("html, body").animate({
    scrollTop: offset.top,
    //scrollLeft: offset.left
  });
}

/*highlights the border of the content div*/
function animateBorder(contentDiv) {
  /*jquery or javascript cannot directly access :after or :before --> therefore, a workaround is needed
  by toggling a predetermined class with the desired effects. refer to this for explanation: https://stackoverflow.com/questions/5041494/selecting-and-manipulating-css-pseudo-elements-such-as-before-and-after-usin/21709814#21709814*/
  contentDiv.toggleClass("special");
}

/*returns the correct usable page reference from the page title.
    - H : for home page
    - IP: for indoor plants
    - OP: for outdoor plants
    - D: for decorations
    - T: for tools */
function getPageReference(pageTitle) {
  switch(pageTitle) {
    case TITLE_HOMEPAGE: return PR_HOMEPAGE;
    case TITLE_INDOOR_PLANTS: return PR_INDOOR_PLANTS;
    case TITLE_OUTDOOR_PLANTS: return PR_OUTDOOR_PLANTS;
    case TITLE_DECORATIONS: return PR_DECORATIONS;
    case TITLE_TOOLS: return PR_TOOLS;
    default:
      console.log("No correct page reference found for title: " + pageTitle);
      return "";
  }
}

/*gets the correct page title from the page reference*/
function getPageTitle(pageReference) {
  switch(pageReference) {
    case PR_HOMEPAGE: return TITLE_HOMEPAGE;
    case PR_INDOOR_PLANTS: return TITLE_INDOOR_PLANTS;
    case PR_OUTDOOR_PLANTS: return TITLE_OUTDOOR_PLANTS;
    case PR_DECORATIONS: return TITLE_DECORATIONS;
    case PR_TOOLS: return TITLE_TOOLS;
  }
}
