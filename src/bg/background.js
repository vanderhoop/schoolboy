console.log("linked");

var moveForward = validTimeForIntercept();
if (moveForward) {
  var href = window.location.href,
      // regexs
      faceRegex = /^https?:\/\/w*?\.facebook\.com/,
      espnRegex = /^https?:\/\/w*?\.espn\.go\.com/,
      // elements for one time selection
      $body = $("body"),
      $newDiv = $("<div>");
      $newDiv.addClass("container").html("<h1>Facebook? Really?</h1>");

  if (faceRegex.test(href)){
    $body.children().remove();
    $body.append($newDiv);
    // I want to get a great font alerting folks to their trespessing

    console.log("You shouldn't be here.");
  } else {
    console.log("It's fine that you visited this site");
  }
} // if moveFoward


