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

// I want to check the browser for time in the current timezone
// I only want to run the following checks on school days between
// 9:00 a.m. and 5:30 p.m.
var href = window.location.href
var faceRegex = /^https?:\/\/w*?\.facebook\.com/,
    espnRegex = /^https?:\/\/w*?\.espn\.go\.com/,
    $body = $("body");

if (faceRegex.test(href)){
  $body.children().remove();
  // I want to get a great font alerting folks to their trespessing

  console.log("You shouldn't be here.");
} else {
  console.log("It's fine that you visited this site");
}

    console.log("linked");

    // $("body").children().remove();
