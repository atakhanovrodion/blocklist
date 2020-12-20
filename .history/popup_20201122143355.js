function blackListSite() {
    chrome.storage.sync.get("blocked", function(items){
        let blockedSite = [];
        if (items.blocked) {
            blockedSite = items.blocked
        }
        chrome.tabs.query({active:true},function(arr){
            console.log(arr[0])
        })
    })
}



document.getElementById('blockButton').addEventListener('click',blackListSite)