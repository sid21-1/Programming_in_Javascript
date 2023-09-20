function LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log("Leap Year") ;
    } else {
        console.log("it is not a leap year")
    }
  }

LeapYear(2024);
LeapYear(2001);