/* 
  Zip Arrays into Map
  
  
  Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
  Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
const expected1 = {
  abc: 42,
  3: "wassup",
  yo: true,
};

const keys2 = [];
const vals2 = [];
const expected2 = {};

const keys3 = ["a", "b", "c", "d"];
const vals3 = [1, 2, 3];
const expected3 = {
  a: 1,
  b: 2,
  c: 3,
};

/**
 * Converts the given arrays of keys and values into an object.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} keys
 * @param {Array<any>} values
 * @returns {Object} The object with the given keys and values.
 */
function zipArraysIntoMap(keys, values) {
  var result = {};
  let smallest = Math.min(keys.length, values.length);
  for (var i = 0; i < smallest; i++) {
    result[keys[i]] = values[i];
  }
  return result;
}

console.log(zipArraysIntoMap(keys2, vals2));
