function requestCheck(request) {
    console.log(request.initiator)
    if (request) {
        if(request.type == "main_frame") {
            
        }
    }

}

chrome.webRequest.onBeforeRequest.addListener(requestCheck, {urls: ["*://*/*"]}, ["blocking"])