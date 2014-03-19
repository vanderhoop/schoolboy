// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });
var href = window.location.href
var faceRegex = /^https?:\/\/w*?\.facebook\.com/,
    espnRegex = /^https?:\/\/w*?\.espn\.go\.com/;

if (faceRegex.test(href) || espnRegex.test(href)){
  console.log("You shouldn't be here.");
} else {
  console.log("It's fine that you visited this site");
}

    console.log("linked");

    // $("body").children().remove();
