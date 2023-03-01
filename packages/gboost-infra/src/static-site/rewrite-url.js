// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore handler is called by CloudFront function runtime
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function handler(event) {
  var request = event.request;
  var uri = request.uri;
  // check whether URI is missing file extension
  if (!uri.includes(".")) {
    request.uri = "/index.html";
  }
  return request;
}
