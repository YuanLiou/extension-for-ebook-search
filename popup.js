document.getElementById('search_button').onclick = searchWithTextField;
document.getElementById('search_box').onkeypress = searchWithEnterKeyPressed

function searchWithTextField() {
    var inputText = document.getElementById('search_box').value;
    sendSearchRequest(inputText)
}

function searchWithEnterKeyPressed(event) {
    if (event.keyCode == 13) {
        // Listen for Enter pressed
        searchWithTextField();
        return false;
    } else {
        return true;
    }
}

function sendSearchRequest(text) {
    if (text) {
        sendServiceRequest(text);
    }
}


function sendServiceRequest(selectedText) {
    var serviceCall = 'https://taiwan-ebook-lover.github.io/'
    if (selectedText) {
        var serviceCall = 'https://taiwan-ebook-lover.github.io/search?q=' + selectedText;
        console.log('selectText is = ' + selectedText);
    }
    chrome.tabs.create({ url: serviceCall });
}