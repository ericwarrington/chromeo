//When Chrome extension is added, open new tab page to begin customizing

chrome.browserAction.onClicked.addListener(function(activeTab)
{
    //var newURL = 
    chrome.tabs.create({ url, '_blank' });
});