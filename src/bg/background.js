$(document).ready(function(){
  console.log("linked");

  var href = window.location.href,
      flaggedSites = [
        "facebook.com",
        "twitter.com",
        "pinterest.com",
        "espn.go.com",
        "tumblr.com",
        "buzzfeed.com",
        "pinterest.com"
      ],

      regexFlags = new RegExp(flaggedSites.join("|"), "i"),
      date = new Date();

  // Blockade is only run during school days between 9:00 a.m. and 5:30 p.m.
  if (isWeekday(date) && validTimeForIntercept(date) && isNotFedHoliday(date) && regexFlags.test(href)) {
    displayBlock();
  } // if moveFoward

  function displayBlock(){
    console.log("It was wrong of you to come here.");
    var hostName = location.hostname;
    // I want to change the condition to use a regex, as
    // any hostname beginning with 'w' would mess this up
    if (hostName[0] == "w") {
      hostName = hostName.substr(4, hostName.length);
    }
    hostName = hostName.substr(0, hostName.indexOf('.')).toUpperCase();
    console.log(hostName);

    var $body = $("body"),
        $newDiv = $("<div>"),
        $img = $("<img>"),
        scoldings = [
          "YOU'RE SPENDING TOO MUCH MONEY TO BE DICKING AROUND ON " + hostName + ".<br>DO SOMETHING PRODUCTIVE.",
          "YOU CAN FART AROUND ON " + hostName + " ON YOUR OWN TIME.<br>NAMELY, AFTER 5:30.",
          hostName +" ISN'T GOING ANYWHERE. YOU CAN CHECK ON IT LATER.",
          hostName + "? GO SOMEWHERE USEFUL.",
          hostName + " IS A TIMESINK. STEAR CLEAR."
        ],

        // randomizes scolding
        $h1 = $("<h1>").html(scoldings[Math.floor(Math.random() * scoldings.length)] ),
        $imgSRC = chrome.extension.getURL("icons/wdi.png");
    $newDiv.addClass("ext-container");
    $img.attr("src", $imgSRC).addClass("animated flipInX");

    $body.empty();
    $newDiv.append($img);
    $body.append($newDiv).delay(2000);
    $(".ext-container").append($h1);
    $("h1").addClass("animated flipInX");

  } // end displayBlock
}); // end document ready


