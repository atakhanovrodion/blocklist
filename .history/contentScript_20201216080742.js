console.log("cont test");
chrome.extension.onRequest.addListener((request, sender, sendResponse) => {
  if (request.action == "redirect") {
    console.log("test");
    window.location = chrome.extenxion.getUrl("blockedSite.html");
  }
});
