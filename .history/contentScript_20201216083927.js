console.log("cont test");
/*chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request);
  if (request.action == "redirect") {
    console.log("test");
    window.location = chrome.extenxion.getUrl("blockedSite.html");
  }
});*/
chrome.extension.onRequest.addListener((request, sender, sendResponse) => {
  console.log(request);
  if (request.action == "redirect") {
    console.log("test");
    window.location = chrome.extenxion.getUrl("blockedSite.html");
  }
});