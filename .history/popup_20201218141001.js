/*function blackListSite() {
    chrome.storage.sync.get("blocked", function(items){
        let blockedSite = [];
        if (items.blocked) {
            blockedSite = items.blocked
        }
        chrome.tabs.query({active:true},function(arr){
            chrome.tabs.sendMessage(arr[0].index,{msg: 'testtest'})
            let urlToBlock =  /.*\/\/.*?\//.exec(arr[0].url)[0]

            if (urlToBlock != '' && blockedSite.indexOf(urlToBlock) == -1){
                blockedSite.push(urlToBlock)
            }
            chrome.storage.sync.set({blocked:blockedSite})
        })
    })
}*/
function blackListSite() {
  chrome.tabs.query({ active: true }, (item) => {
    chrome.extension.getBackgroundPage().blockSite(item[0].url);
  });
}

document.getElementById("blockButton").addEventListener("click", blackListSite);
