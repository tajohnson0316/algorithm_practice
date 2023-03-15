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
  var secAngle = (seconds * 6) % 360;
  var minAngle = Math.floor(seconds / 10) % 360;
  var hourAngle = Math.floor(seconds / 120) % 360;


  console.log("Seconds angle: " + secAngle);
  console.log("Minute angle: " + minAngle);
  console.log("Hour angle: " + hourAngle + "\n");
}

clockHandAngles(4000);
clockHandAngles(360);
clockHandAngles(30);
clockHandAngles(1000000);
clockHandAngles(3600);