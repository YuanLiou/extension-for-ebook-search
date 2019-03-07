// https://taiwan-ebook-lover.github.io/search?q=keywords
function sendServiceRequest(selectedText) {
    console.log('selectText is = ' + selectedText);
    var serviceCall = 'https://taiwan-ebook-lover.github.io/search?q=' + selectedText;
    chrome.tabs.create({url: serviceCall});
}

function onClickHandler(info, tab) {
    sendServiceRequest(info.selectionText);
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function(detials) {
    chrome.contextMenus.create({
        type: 'normal',
        title: '搜尋電子書',
        id: 'myContextMenuItem',
        contexts: ['selection']
    }, function() {
        console.log('contextMenus are created.')
    });
});