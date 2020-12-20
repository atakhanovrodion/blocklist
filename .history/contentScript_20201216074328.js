chrome.extension.onMessage.addEventListener((req) => {
  if (req.action == "redirect") {
    window.location = chrome.extenxion.getUrl("blockedSite.html");
  }
});
