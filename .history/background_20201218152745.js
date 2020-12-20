let blockedSite = [];
chrome.storage.sync.get("blocked", (items) => {
  if (items.blocked) blockedSite = items.blocked;
});

function requestCheck(request) {
  if (request) {
    if (request.type == "main_frame") {
      var tabBlockingState = 0;
      for (var i = 0; i < blockedSite.length; ++i) {
        if (request.url.match(new RegExp(".*" + blockedSite[i] + ".*", "i"))) {
          tabBlockingState = blockedSite[i];
        }
      }
      if (tabBlockingState != 0) {
        var redirectUrl = chrome.extension.getURL("blockedSite.html");

        return { cancel: true };
      }
    }
  }
}

function blockSite(url) {
  if (blockedSite.indexOf(url) == -1) blockedSite.push(url);
  chrome.storage.sync.set({ blocked: blockedSite });
}

chrome.webRequest.onBeforeRequest.addListener(
  requestCheck,
  { urls: ["*://*/*"] },
  ["blocking"]
);
