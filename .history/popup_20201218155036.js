function blackListSite() {
  chrome.tabs.query({ active: true }, (item) => {
    //Send url of current tab to block
    let url = /.*\/\/.*?\//.exec(item[0].url)[0];
    if (url) chrome.extension.getBackgroundPage().blockSite(url);
    chrome.tabs.reload(() => {
      //unlistButtonCreate();
    });
  });
}
/*function unlistSite() {}
function unlistButtonCreate() {
  chrome.storage.sync.get("currentState", (state) => {
    if (!state) {
      document.getElementById("btnarea").innerHTML =
        " <button id='unblockButton'>unblock site</button>";
      document
        .getElementById("unblockButton")
        .addEventListener("click", unlistSite);
    }
  });
}*/

document.getElementById("blockButton").addEventListener("click", blackListSite);
//document.addEventListener("DOMContentLoaded", unlistButtonCreate);
