/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
  let reversedString = "";
  let tempString = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      tempString += str[i];
    } else {
      reversedString += reverseString(tempString) + " ";
      tempString = "";
    }
  }

  reversedString += reverseString(tempString);

  return reversedString;
}

function reverseString(str) {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  return string;
}

console.log(reverseWords(str3));
