console.log("utils linked");

function validTimeForIntercept(dateObj){
  var hour = dateObj.getHours(),
      minute = dateObj.getMinutes();

  // if between 5:00 p.m. and 5:30 p.m.
  if (hour == 17 && minute < 30){ return true; }
  // disables disabler during lunch window (12:15 - 1:45 p.m.)
  if ((hour == 12 && minute > 15) || (hour == 13 && minute < 45)){ return false; }
  // if between 9:00 a.m. and 5:30 p.m.
  if (hour >= 8 && hour < 17) {
    return true;
  } else {
    return false;
  } // end if
} // validTimeForIntercept

function isWeekday(dateObj){
  var day = dateObj.getDay();
  if (day > 0 && day < 6){ return true; } else { return false; }
}

function isNotFedHoliday(dateOjb){
  // check simple dates (month/date - no leading zeroes)

  var n_date  = dateOjb.getDate(),
      n_month = dateOjb.getMonth() + 1,
      s_date1 = n_month + '/' + n_date;

  if ( s_date1 == '1/1'   // New Year's Day
    || s_date1 == '6/14'  // Flag Day
    || s_date1 == '7/4'   // Independence Day
    || s_date1 == '11/11' // Veterans Day
    || s_date1 == '12/25' // Christmas Day
  ) { return false; }

  // weekday from beginning of the month (month/num/day)
  var n_wday = dateOjb.getDay(),
      n_wnum = Math.floor((n_date - 1) / 7) + 1,
      s_date2 = n_month + '/' + n_wnum + '/' + n_wday;

  if ( s_date2 == '1/3/1'  // Birthday of Martin Luther King, third Monday in January
    || s_date2 == '2/3/1'  // Washington's Birthday, third Monday in February
    || s_date2 == '5/3/6'  // Armed Forces Day, third Saturday in May
    || s_date2 == '9/1/1'  // Labor Day, first Monday in September
    || s_date2 == '10/2/1' // Columbus Day, second Monday in October
    || s_date2 == '11/4/4' // Thanksgiving Day, fourth Thursday in November
  ) { return false; }

  // weekday number from end of the month (month/num/day)
  var dt_temp = new Date (dateOjb);
  dt_temp.setDate(1);
  dt_temp.setMonth(dt_temp.getMonth() + 1);
  dt_temp.setDate(dt_temp.getDate() - 1);
  n_wnum = Math.floor((dt_temp.getDate() - n_date - 1) / 7) + 1;
  var s_date3 = n_month + '/' + n_wnum + '/' + n_wday;

  if (s_date3 == '5/1/1') { return false; } // Memorial Day, last Monday in May

  return true;

} // end isNotFedHoliday
