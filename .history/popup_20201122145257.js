function blackListSite() {
    chrome.storage.sync.get("blocked", function(items){
        let blockedSite = [];
        if (items.blocked) {
            blockedSite = items.blocked
        }
        chrome.tabs.query({active:true},function(arr){
            chrome.tabs.sendMessage(arr[0].index,{msg: 'testtest'})
            let urlToBlock =  /.*\/\/.*?\//.exec(arr[0].url)[0]
            console.log(urlToBlock)
        })
    })
}



document.getElementById('blockButton').addEventListener('click',blackListSite)