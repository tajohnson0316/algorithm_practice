/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 487;
const expected4 = 1;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
  if (num.toString().length == 1) {
    return num;
  }

  let numString = num.toString().split("");
  let skip = parseInt(numString[numString.length - 1]);
  numString.pop();
  let newNum = numString.join("");

  return sumToOneDigit(parseInt(newNum)) + skip;
}

console.log(sumToOneDigit(487));
