/*this script provides access to the session storage of the browser. DO NOTE
that it is advised to define new global variables and use them as labels to avoid confuson*/
function saveItem(label, value) {
  sessionStorage.setItem(label, value);
}

function getItem(label) {
  return sessionStorage.getItem(label);
}
