

function requestCheck(request) {
  if (request) {
    if (request.type == "main_frame") {
      chrome.storage.sync.get("blocked", function (items) {
        for (let i = 0; i < items.blocked.length; i++) {
          if (items.blocked[i] == request.url) {
            console.log("heere");
            /*chrome.extension.sendRequest({ action: "redirect" }, (res) => {
              console.log(res);
            });*/

            const redirecttUrl = chrome.extension.getURL("blockedSite.html");
            return { redirectUrl: redirecttUrl.url };
            
            });
          }
        }
      });
    }
  }
}

chrome.webRequest.onBeforeRequest.addListener(
  requestCheck,
  { urls: ["*://*/*"] },
  ["blocking"]
);
