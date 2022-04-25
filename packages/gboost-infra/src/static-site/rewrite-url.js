/* eslint-disable */
function handler(event) {
  var request = event.request;
  var uri = request.uri
  // check whether URI is missing file extension
  if (!uri.includes(".")) {
    request.uri = "/index.html";
  }
  return request;
}