function requestCheck() {

}

chrome.webRequest.onBeforeRequest.addListener(requestCheck, {urls: ["*://*/*"]}, ["blocking"])