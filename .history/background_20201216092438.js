function requestCheck(request) {
  if (request) {
    if (request.type == "main_frame") {
      console.log(request);
      chrome.storage.sync.get("blocked", function (items) {
        for (let i = 0; i < items.blocked.length; i++) {
          if (items.blocked[i] == request.url) {
            console.log("heere");
            /*chrome.extension.sendRequest({ action: "redirect" }, (res) => {
              console.log(res);
            });*/

            const redirecttUrl = chrome.extension.getURL("blockedSite.html");
            return { redirectUrl: redirecttUrl.url };
          }
        }
      });
    }
  }
}
requestCheck({
  frameId: 0,
  method: "GET",
  parentFrameId: -1,
  requestId: "7550",
  tabId: 142,
  timeStamp: 1608092605741.843,
  type: "main_frame",
  url: "https://theuselessweb.com/",
});

chrome.webRequest.onBeforeRequest.addListener(
  requestCheck,
  { urls: ["*://*/*"] },
  ["blocking"]
);
