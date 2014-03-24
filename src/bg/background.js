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
    var $body   = $("body"),
        $newDiv = $("<div>"),
        $img    = $("<img>"),
        $h1     = $("<h1>").html("YOU CAN DICK AROUND AT 5:30");

      $newDiv.addClass("ext-container");
      $img.attr("src", "https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/128/WDI.png").addClass("animated flipInX");
      
      $body.empty();
      $newDiv.append($img);
      $body.append($newDiv).delay(2000);
      $(".ext-container").append($h1);
      $("h1").addClass("animated flipInX");

  } // end displayBlock

  displayBlock();
}); // end document ready


