function requestCheck(request) {
    console.log(request.initiator)
    if (request) {
        console.log(request)
    }

}

chrome.webRequest.onBeforeRequest.addListener(requestCheck, {urls: ["*://*/*"]}, ["blocking"])