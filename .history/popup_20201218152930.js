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
chrome.browserAction.onClicked.addListener((tab) => {
  console.log(tab);

  window.close();
});
function blackListSite() {
  chrome.tabs.query({ active: true }, (item) => {
    //Send url of current tab to block
    let url = /.*\/\/.*?\//.exec(item[0].url)[0];
    if (url) chrome.extension.getBackgroundPage().blockSite(url);
    chrome.tabs.reload(() => {
      unlistButtonCreate();
    });
  });
}
function unlistSite() {}
function unlistButtonCreate() {
  document.getElementById("btnarea").innerHTML =
    " <button id='unblockButton'>block site</button>";
  document
    .getElementById("unblockButton")
    .addEventListener("click", unlistSite);
}

document.getElementById("blockButton").addEventListener("click", blackListSite);
