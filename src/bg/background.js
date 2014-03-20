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

if (validTimeForIntercept() && regexFlags.test(href)) {

  console.log("You shouldn't be here.");
  var $body = $("body"),
      $newDiv = $("<div>");

  $newDiv.addClass("ext-container").html("<h1>FACEBOOK DOESN'T HAVE ANYTHING BETTER TO DO.<br> BUT YOU DO.</h1>");
  $body.children().remove();
  $body.append($newDiv);

} // if moveFoward
