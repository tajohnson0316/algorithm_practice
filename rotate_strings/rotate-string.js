/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} offset The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */
function rotateStr(str, offset) {
  console.log("Original string: " + str);
  str = str.split("");

  //makes sure this loop does not run longer than it already is going to
  var trueOffset = Math.abs(offset % str.length);

  if (offset < 0) {
    for (var i = 0; i < trueOffset; i++) {
      for (var j = str.length - 1; j >= 0; j--) {
        var temp = str[str.length - 1];
        str[str.length - 1] = str[j];
        str[j] = temp;
      }
    }
  } else {
    //These nested for loops reorder the array trueOffset times, leaving whatever was at the end, at the front
    for (var i = 0; i < trueOffset; i++) {
      for (var j = 1; j < str.length; j++) {
        var temp = str[0];
        str[0] = str[j];
        str[j] = temp;
      }
    }
  }
  return "Rotated string: " + str.join("");
}

console.log(rotateStr(str, rotateAmnt2));
