function blackListSite() {
    chrome.storage.sync.get("blocked", function(items){
        let blockedSite = [];
        if (items.blocked) {
            blockedSite = items.blocked
        }
        chrome.tabs.query({active:true},function(arr){
            console.log(Object.keys(arr))
        })
    })
}



document.getElementById('blockButton').addEventListener('click',blackListSite)