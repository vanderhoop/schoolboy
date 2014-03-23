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

  if (isWeekday(date) && validTimeForIntercept(date) && isNotFedHoliday(date) && regexFlags.test(href)) {
    displayBlock();
  } // if moveFoward

  function displayBlock(){
    console.log("You shouldn't be here.");
    var $body = $("body"),
        $newDiv = $("<div>"),
        $img = $("<img>");

      $newDiv.addClass("ext-container");
      $img.attr("src", "https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/128/WDI.png");
      
      // I want to set the object's visibility to hidden;        
      $body.empty();
      $newDiv.append($img);
      $body.append($newDiv);
      var animations = [
        "pullUp",
        "pullDown",
        "stretchRight",
        "stretchLeft"
      ];

      $("img").addClass(animations[Math.floor(Math.random() * animations.length)]);

  } // end displayBlock

  displayBlock();
});


