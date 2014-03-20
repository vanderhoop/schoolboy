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

    regexFlags = new RegExp(flaggedSites.join("|"), "i");

if (validTimeForIntercept()) {
    // elements for one time selection
  var $body = $("body"),
      $newDiv = $("<div>");
  $newDiv.addClass("container").html("<h1>Facebook? Really?</h1>");

  if (regexFlags.test(href)){
    $body.children().remove();
    $body.append($newDiv);

    console.log("You shouldn't be here.");
  } else {
    console.log("It's fine that you visited this site");
  }
} // if moveFoward
