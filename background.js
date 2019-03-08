// https://taiwan-ebook-lover.github.io/search?q=keywords
function sendServiceRequest(selectedText) {
    var serviceCall = 'https://taiwan-ebook-lover.github.io/'
    if (selectedText) {
        var serviceCall = 'https://taiwan-ebook-lover.github.io/search?q=' + selectedText;
        console.log('selectText is = ' + selectedText);
    }
    chrome.tabs.create({ url: serviceCall });
}

function onClickHandler(info, tab) {
    sendServiceRequest(info.selectionText);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.data == "create_menu") {
        chrome.contextMenus.removeAll(function () {
            chrome.contextMenus.create({
                type: 'normal',
                title: '搜尋「%s」的電子書',
                id: 'ebookSearchContextMenuItem',
                contexts: ['selection'],
                onclick: function(info, tab) {
                    onClickHandler(info, tab);
                }
            }, function () {
                console.log('contextMenus are created.')
            });
        });
    } else if (request.data == "remove_menu") {
        chrome.contextMenus.removeAll();
    }
});