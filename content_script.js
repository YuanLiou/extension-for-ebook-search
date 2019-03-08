document.addEventListener("mouseup", function(event) {
    var selection = window.getSelection().toString();

    if (selection.length > 0) {
        chrome.runtime.sendMessage({data: "create_menu"});
    } else {
        chrome.runtime.sendMessage({data: "remove_menu"});
    }
}, true);