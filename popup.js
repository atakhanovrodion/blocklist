function blackListSite() {
  chrome.tabs.query({ active: true }, (item) => {
    //Send url of current tab to block
    let url = /.*\/\/.*?\//.exec(item[0].url)[0];
    if (url) chrome.extension.getBackgroundPage().blockSite(url);
    chrome.tabs.reload(() => {});
  });
}

document.getElementById("blockButton").addEventListener("click", blackListSite);
