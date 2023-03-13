/*
Write a function that returns whether the given array has a balance point between
indices, where one side's sum is equal to the other's.

Example: [1, 2, 3, 4, 10] --> true, but [1, 2, 4, 2, 1] --> false.
*/

function findBalancePoint(array) {
  for (var i = 0; i < array.length; i++) {
    //loop through passed in array
    var part1 = array.slice(0, i + 1); //slice array into 2 parts, from start to current index
    var sum1 = 0;
    for (var x = 0; x < part1.length; x++) {
      sum1 += part1[x]; //find sum of part 1
    }

    var part2 = array.slice(i + 1); //2nd portion of the sliced array
    var sum2 = 0;
    for (var y = 0; y < part2.length; y++) {
      sum2 += part2[y];
    }

    if (sum1 === sum2) {
      //if the two sums are equal, a balance point has been found. return true
      return true;
    }
  }
  return false; //the loop finished, no balance point was found. return false
}

console.log(findBalancePoint([1, 2, 3, 4, 10])); //Expects true
console.log(findBalancePoint([1, 2, 4, 2, 1])); //Expects false
console.log(findBalancePoint([0, 0, 0, 0, 0])); //Expects true
console.log(findBalancePoint([1, 3, 6, 5, 5])); //Expects true
