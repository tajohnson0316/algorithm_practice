/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
  let bracesList = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
      bracesList.push(str[i]);
    } else if (
      (str[i] == ")" && bracesList[bracesList.length - 1] == "(") ||
      (str[i] == "]" && bracesList[bracesList.length - 1] == "[") ||
      (str[i] == "}" && bracesList[bracesList.length - 1] == "{")
    ) {
      bracesList.pop();
    }
  }
  if (bracesList.length > 0) {
    return false;
  }
  return true;
}

console.log(bracesValid(str3));
