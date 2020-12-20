let blockedSite = [];
console.log(Date.now() / 1000);
chrome.storage.sync.get("blocked", (items) => {
  blockedSite = items.blocked;
});

function requestCheck(request) {
  console.log(Date.now() / 1000);
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
  console.log(url);
}

chrome.webRequest.onBeforeRequest.addListener(
  requestCheck,
  { urls: ["*://*/*"] },
  ["blocking"]
);