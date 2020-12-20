let blockedSite = [];
chrome.storage.sync.set({ currentState: true });
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
        chrome.storage.sync.set({ currentState: false });
        return { cancel: true };
      }

      chrome.storage.sync.set({ currentState: true });
    }
  }
}

function blockSite(url) {
  if (blockedSite.indexOf(url) == -1) blockedSite.push(url);
  else blockedSite.splice(blockedSite.indexOf(url), 1);
  chrome.storage.sync.set({ blocked: blockedSite });
}

chrome.webRequest.onBeforeRequest.addListener(
  requestCheck,
  { urls: ["*://*/*"] },
  ["blocking"]
);
