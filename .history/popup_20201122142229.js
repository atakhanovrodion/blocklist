function blackListSite() {
    chrome.storage.sync.get("blocked", function(items){
        let blockedSite = [];
        if (items.blocked) {
            blockedSite = items.blocked
        }
        chrome.tabs.query({},function(arr){
            console.log(arr)
        })
    })
}



document.getElementById('blockButton').addEventListener('click',blackListSite)