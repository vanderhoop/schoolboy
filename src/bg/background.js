$(document).ready(function(){
  console.log("linked");
  $("head").html("<link href='http://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'>");

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
    console.log("You shouldn't be here.");
    var $body = $("body"),
        $newDiv = $("<div>"),
        $img = $("<img>"),
        scoldings = [
          "YOU'RE SPENDING TOO MUCH MONEY TO BE DICKING AROUND.<br>DO SOMETHING PRODUCTIVE.",
          "YOU CAN FART AROUND ON YOUR OWN TIME. NAMELY, AFTER 5:30",
          "THE INTERNET ISN'T GOING ANYWHERE. YOU CAN CHECK ON IT LATER.",
          "GO SOMEWHERE USEFUL.",
          "THIS INTERRUPTION IS BROUGHT TO YOU BY GENERAL ASSEMBLY.",
          "THIS PLACE IS A TIMESINK. STEAR CLEAR."
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

  displayBlock();
}); // end document ready


