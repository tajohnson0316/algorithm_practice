/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
function reverseString(str) {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  return string;
}

console.log(reverseString(str1));

/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const str5 = "object oriented programming";
const expected5 = "OOP";

// The 4 pillars of OOP
const str6 = "abstraction polymorphism inheritance encapsulation";
const expected6 = "APIE";

const str7 = "software development life cycle";
const expected7 = "SDLC";

// Bonus: ignore extra spaces
const str8 = "  global   information tracker    ";
const expected8 = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) {
  let string = "";
  let foundWord = false;

  for (i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      foundWord = false; // found a space, set foundWord to false
      continue;
    } else {
      if (!foundWord) {
        // found a char, and the previous index was not
        string += str[i];
        foundWord = true;
      }
    }
  }
  return string.toUpperCase();
}

console.log(acronymize(str8));
