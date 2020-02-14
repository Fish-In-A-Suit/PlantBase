/*This script is used to adjust the footer spacing, so that it is always at the bottom of the page.
It is included in the footerLoader.js using getScript, so any page that includes footerSpacer.js also
includes this script.
*/

$(document).ready(function() {
    adjustFooterOnResize();
    $(window).resize(function() {
        this.adjustFooterOnResize();
    });
})

function adjustFooterOnResize() {
    //get footer spacer
    var footerSpacer = $(".footer-spacer");

    //get footer container
    var footerContainer = $(".footer-container-reference");

    /*check if footer container should be pushed to bottom:
        - get window frame size
        - get footer bottom height coord
        - compare
    */

    var shouldPushToBottom = false;

    var windowHeight = window.innerHeight;
    var documentHeight = $(document).height();

    var footerContainerTop = footerContainer.offset().top;
    footerContainer.show();
    var footerContainerHeight = footerContainer.outerHeight(true);
    //console.log("footerContainerTop = " + footerContainerTop);
    //console.log("footerContainerHeight = " + footerContainerHeight);

    var footerY_bottom = footerContainerTop + footerContainerHeight;
    //console.log("windowHeight = " + windowHeight);
    //console.log("documentHeight = " + documentHeight);
    
    //console.log("footerOffsetTop = " + footerY_bottom);

    var spacing = documentHeight - footerY_bottom;

    //console.log("spacing: " + spacing);
    //console.log("==================")
    if((spacing < 0) && (!shouldResetSpacer())) {
        return;
    }

    if(getHeight(footerSpacer.css("height")) > 10) {
        //if footer spacer already has height defined
        spacing += getHeight(footerSpacer.css("height"));
    }

    if(shouldResetSpacer()) {
        spacing = 0;
    }

    footerSpacer.css("min-height", spacing);
    footerSpacer.css("width", "100%");
    footerSpacer.css("clear", "both");

    //test only
    //footerContainer.offset({top: 0, left: 0});
}

/**
 * transforms rawHeight (height that includes "px" at the end, which is obtained by calling jquery's css() method),
 * to an integer value
 * @param {*} rawHeight 
 */
function getHeight(rawHeight) {
    var split = rawHeight.split("p");
    var number = split[0];
    var parsed = parseFloat(number);
    var rounded = Math.round(parsed);
    return rounded;
}

/**
 * determines whether the size of the document is greater than the size of the window. If the
 * answer is true, then set spacer height to 0
 */
function shouldResetSpacer() {
    var res = $(document).height() > window.innerHeight;
    //console.log("shouldResetSpacer = " + res);
    return res;
}