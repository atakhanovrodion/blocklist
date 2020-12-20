function requestCheck(request) {
    console.log(request.initiator)
    

}

chrome.webRequest.onBeforeRequest.addListener(requestCheck, {urls: ["*://*/*"]}, ["blocking"])