/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {
  let parensList = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      parensList.push(str[i]);
    } else if (parensList[parensList.length - 1] == "(" && str[i] == ")") {
      parensList.pop();
    }
  }

  if (parensList.length > 0) {
    return false;
  }
  return true;
}
str5 = "(a))((b)";

console.log(parensValid(str5));
