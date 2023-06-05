// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/
//                👇
const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

//                v
const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

//                 👀
const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

//              v
const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

function lengthOfLongestSubString(str) {
  let maxCount = 0;
  for (let i = 0; i < str.length; i++) {
    let frequencyMap = { count: 0 };
    for (let j = i; j < str.length; j++) {
      if (frequencyMap.hasOwnProperty(str[j])) {
        maxCount = Math.max(maxCount, frequencyMap.count);
        break;
      } else {
        frequencyMap[str[j]] = 1;
        frequencyMap.count++;
      }
    }
  }
  return maxCount;
}

function lengthOfLongestSubStringV2(str) {
  // try without a frequency map!

  let maxCount = 0;
  for (let i = 0; i < str.length; i++) {
    let substring = "";
    for (let j = i; j < str.length; j++) {
      if (substring.includes(str[j])) {
        maxCount = Math.max(maxCount, substring.length);
      } else {
        substring += str[j];
        console.log(substring);
      }
    }
  }
  return maxCount;
}

console.log(lengthOfLongestSubStringV2(str3));
