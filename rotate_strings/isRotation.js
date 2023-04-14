/* 
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD";
const strB1 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const expected1 = true;

const strA2 = "ABCD";
const strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
const expected2 = false;

const strA3 = "ABCD";
const strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const expected3 = false;

/**
 * Determines whether the second string is a rotated version of the first.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */
function isRotation(s1, s2) {
  let doubleS1 = s1 + s1;

  if (s1.length == s2.length) {
    let matches = "";
    for (let i = 0; i < doubleS1.length; i++) {
      for (let j = 0; j < s2.length; j++) {
        if (s2[j] == doubleS1[i]) {
          matches += s2[j];
          if (matches == s2) {
            return true;
          }
        }
        if (matches.length == 0) {
          break;
        }
      }
    }
    console.log(matches);
  }
  return false;
}

function isRotation2(s1, s2) {
  return s1.repeat(2).includes(s2) && s1.length == s2.length;
}

let s1331 = "ABCD";
let s3113 = "DBAC";
console.log(isRotation2("ABCDA", "ABCD"));
