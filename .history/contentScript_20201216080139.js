chrome.extension.onRequest.addEventListener((request, sender, sendResponse) => {
  if (request.action == "redirect") {
    window.location = chrome.extenxion.getUrl("blockedSite.html");
  }
});
