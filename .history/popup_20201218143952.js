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
    //Send url of current tab to block
    let url = /.*\/\/.*?\//.exec(item[0].url)[0];
    if (url) chrome.extension.getBackgroundPage().blockSite(url);
    chrome.tabs.reload(() => {
      console.log("tab reloaded");
    });
  });
}

document.getElementById("blockButton").addEventListener("click", blackListSite);
