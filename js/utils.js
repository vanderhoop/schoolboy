console.log("utils linked");

// I want to write a function that returns whether it's between 9:00 a.m. and 5:30 p.m.
function validTimeForIntercept(){
  var dateObj = new Date(),
      hour = dateObj.getHours(),
      minute = dateObj.getMinutes();

  // if between 5:00 and 5:30
  if (hour == 17 && minute < 30) {
    return true;
  } // end if
  // if between 9:00 a.m. and 5:30 p.m.
  if (hour >= 8 && hour <= 23){ // (changed to 23 for late-night dev purposes)
    return true;
  } else {
    return false;
  } // end if
} // validTimeForIntercept

// I want to write a function that returns whether it's a weekday

function weekday(){
  var dateObj = new Date(),
      day = dateObj.getDay();
      if (day > 0 && day < 6){ return true; } else { return false; }
}
