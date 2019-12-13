/*this contains various useful utility functions*/

/*scrolls the content div into view*/
function scrollIntoView(contentDiv) {
  var offset = contentDiv.offset();
  offset.left -= 20;
  offset.top -= 20;

  $("html, body").animate({
    scrollTop: offset.top,
    scrollLeft: offset.left
  });
}
