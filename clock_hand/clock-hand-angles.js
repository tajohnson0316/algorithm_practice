/* 
  Clock Hand Angles
  
  Traditional clocks are increasingly uncommon, but
  most can still read rotating hands of hours,
  minutes, and seconds.

  Create function clockHandAngles(seconds) that, given
  the number of seconds since 12:00:00, will print the
  angles (in degrees) of the hour, minute and second
  hands. As a quick review, there are 360 degrees in a
  full arc rotation. Treat “straight-up” 12:00:00 as 0
  degrees for all hands.
*/

function clockHandAngles(seconds) {
  // each second = 6 degrees [(360 degrees / 60 seconds)]
  // use % 360 to get the current angle for each hand
  var secAngle = (seconds * 6) % 360;
  // each minute = 6 degrees [(seconds / 60) * (360 degrees / 60 minutes)]
  // this simplifies to the following equation
  var minAngle = Math.floor(seconds / 10) % 360;
  //each hour = 30 degrees [(seconds / 3600) * (360 degrees / 12 hours)]
  // this simplifies to the following equation
  var hourAngle = Math.floor(seconds / 120) % 360;

  // we can determine the time based on the angles of each clock hand
  var secValue = padNumber(secAngle / 6);
  var minValue = padNumber(Math.floor(minAngle / 6));
  var hourValue = padNumber(Math.floor(hourAngle / 30));


  console.log("Seconds angle: " + secAngle);
  console.log("Minute angle: " + minAngle);
  console.log("Hour angle: " + hourAngle);
  console.log("The time is: " + hourValue + ":" + minValue + ":" + secValue + "\n");
}

/*
  This function converts a number value to a string and then pads any number less than 10 with a 0. Returns the new string literal
*/

function padNumber(num) {
  return num.toString().padStart(2, '0');
}

clockHandAngles(60);
clockHandAngles(1234);
clockHandAngles(0);
clockHandAngles(1000000);
clockHandAngles(9001);