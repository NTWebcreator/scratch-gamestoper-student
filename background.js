chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url.indexOf('https://scratch.mit.edu/projects') > -1) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['close.js'],
        });
    }
});