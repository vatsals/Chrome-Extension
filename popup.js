document.addEventListener('DOMContentLoaded', function() {

    chrome.tabs.getSelected(null, function(tab) {
        i = tab.url;
        document.getElementById("back").innerHTML = i;
    });
}, false);
