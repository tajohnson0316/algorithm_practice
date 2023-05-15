/* https://leetcode.com/problems/two-sum/

    Given an array of integers, return indices of the
    two numbers such that they add up to a specific target.

    You may assume that each input would have EXACTLY ONE SOLUTION,
    and you may not use the same element twice.

    the array is unsorted, contains no floats, and there may be duplicate values

    Given arr = [2, 11, 7, 15], target = 9,
    Because arr[0] + arr[2] = 2 + 7 = 9
    return [0, 2].

    example 1
    given: [2, 11, 7, 15]
    target: 9
    output: [0,2]

    example 2
    given: [3,2,4]
    target: 6
    output: [1,2]

    example 3
    given: [3,3]
    target: 6
    output: [0,1]
*/

// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take ~10 mins to write the pseudocode here:

// create the function and decide what params it needs and what it will return here:

// function - pass in arr & target
// declare variables: sum to compare to target, array to return indices
// outer for loop, set sum to arr[i]
// inner for loop starts at i + 1, add arr[j] to sum
// if the sum is equal to target, return an array [i, j]

/**
 * @param { number[] } arr
 * @param { number } target
 * @return { number[] }
 */
function twoSums(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    let sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (sum + arr[j] == target) {
        return [i, j];
      }
    }
  }
  return solution;
}

console.log(twoSums([3, 3], 6));
