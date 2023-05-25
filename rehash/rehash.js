/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                           v
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// isNaN
// parseInt()
// someObj.hasOwnProperty("key")

// 1. DRIVER 🚗
// 2. PRESENTER 👨‍🏫
// 3. NAVIGATOR 🧭

function rehash(str) {
  let rehashedString = "";

  let frequencyMap = {};

  for (let i = 0; i < str.length; i++) {
    // check for letters
    if (isNaN(str[i])) {
      // declare while loop vars
      idx = i + 1;
      let nums = "";

      // while we're looking at numbers...
      while (!isNaN(str[idx])) {
        // add each number to the nums string
        nums += str[idx];

        idx++;
      }
      // check that the key doesn't exist
      if (!frequencyMap.hasOwnProperty(str[i])) {
        // add the key and the nums
        frequencyMap[str[i]] = parseInt(nums);
      } else {
        // if the key does exist...
        // add the nums value to the preexistent key:val
        frequencyMap[str[i]] += parseInt(nums);
      }
      // reset i
      i = idx - 1;
    }
  }

  // an array to hold the keys sorted alphabetically
  let keys = Object.keys(frequencyMap).sort();

  // go through each key and stringify its corresponding val in the map
  for (let key of keys) {
    rehashedString += `${key}${frequencyMap[key]}`;
  }

  return rehashedString;
}

console.log(rehash(str1));
// console.log(rehash(str1) === expected1, "<-- should be \"true\"");
