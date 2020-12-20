function requestCheck(request) {
  if (request) {
    if (request.type == "main_frame") {
      chrome.storage.sync.get("blocked", function (items) {
        for (let i = 0; i < items.blocked.length; i++) {
          if (items.blocked[i] == request.url) {
            chrome.tabs.query({ active: true }, (res) => {
              console.log(res[0].id);
            });
            chrome.extension.sendRequest({ action: "redirect" }, (response) => {
              console.log(response);
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
