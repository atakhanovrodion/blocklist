function requestCheck(request) {
    if (request) {
        if(request.type == "main_frame") {
            chrome.storage.sync.get("blocked", function(items){
                for (let i = 0;i<items.blocked.length;i++){
                    console.log(items.blocked[i],'  ',request.url)
                }
            })
        }
    }

}

chrome.webRequest.onBeforeRequest.addListener(requestCheck, {urls: ["*://*/*"]}, ["blocking"])