function blackListSite() {
    chrome.storage.sync.get("blocked", function(items){
        let blockedSite = [];
        if (items.blocked) {
            blockedSite = items.blocked
        }
        chrome.tabs.query({active:true},function(arr){
            console.log(arr[0].url)
        })
    })
}



document.getElementById('blockButton').addEventListener('click',blackListSite)