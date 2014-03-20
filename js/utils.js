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
  if (hour >= 8 && hour < 17){
    return true;
  } else {
    return false;
  } // end if
} // validTimeForIntercept
