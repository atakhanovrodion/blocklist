function requestCheck(request) {
    if (request) {
        if(request.type == "main_frame") {
            chrome.storage.sync.get("blocked", function(items){
                for (let i = 0;i<items.blocked.length;i++){
                    if(items.blocked[i]==request.url){
                        return {cancel: request.url}
                    }
                }
            })
        }
        return {cancel: request.url}
    }

}

chrome.webRequest.onBeforeRequest.addListener(requestCheck, {urls: ["*://*/*"]}, ["blocking"])