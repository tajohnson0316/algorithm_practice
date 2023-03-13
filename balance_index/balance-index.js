/*
Write a function where the balance point is ON the index, not between indices. Return the balance index where sums are equal 
on either side (excluding its own value). Return -1 if none exist. 
Example" [-2, 5, 7, 0, 3] --> 2, but [9, 9] --> -1
*/

function findBalanceIndex(array) {
  for (var i = 0; i < array.length - 1; i++) {
    //loop through passed in array
    var part1 = array.slice(0, i); //slice array into 2 parts so that the current index is on either side of each part
    var sum1 = 0;
    for (var x = 0; x < part1.length; x++) {
      sum1 += part1[x];
    }

    var part2 = array.slice(i + 1);
    var sum2 = 0;
    for (var y = 0; y < part2.length; y++) {
      sum2 += part2[y];
    }

    if (sum1 === sum2) {
      //if the two sums are equal, the current index is the balance index. return i
      return i;
    }
  }
  return -1; //the loop has finished, no balance index was found. return -1
}

console.log(findBalanceIndex([-2, 5, 7, 0, 3])); //Expects 2
console.log(findBalanceIndex([9, 9])); //Expects -1
console.log(findBalanceIndex([0, 0, 0, 0, 0])); //Expects 0
console.log(findBalanceIndex([1, 3, 0, 9, 4])); //Expects 3
