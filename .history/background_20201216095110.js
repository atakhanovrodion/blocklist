let blockedSite = [];
chrome.storage.sync.get("blocked", (items) => {
  blockedSite = items.blocked;
});

function requestCheck(request) {
  if (request) {
    if (request.type == "main_frame") {
      var tabBlockingState = 0;
      for (var i = 0; i < blockedSites.length; ++i) {
        if (request.url.match(new RegExp(".*" + blockedSites[i] + ".*", "i"))) {
          tabBlockingState = blockedSites[i];
        }
      }
      if (tabBlockingState != 0) {
        var redirectUrl = chrome.extension.getURL(
          "blockedSite.html?blocked=" + tabBlockingState
        );
        return { redirectUrl: redirectUrl };
      }
    }
  }
}
const redirecttUrl = chrome.extension.getURL("blockedSite.html");

return { redirectUrl: redirecttUrl.url };
console.log(
  requestCheck({
    frameId: 0,
    method: "GET",
    parentFrameId: -1,
    requestId: "7550",
    tabId: 142,
    timeStamp: 1608092605741.843,
    type: "main_frame",
    url: "https://theuselessweb.com/",
  })
);

chrome.webRequest.onBeforeRequest.addListener(
  requestCheck,
  { urls: ["*://*/*"] },
  ["blocking"]
);
