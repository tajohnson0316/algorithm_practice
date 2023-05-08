// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10];

// 1. DRIVER
// 2. PRESENTER
// 3. NAVIGATOR
function mergeDedupe(arr1, arr2) {
  let sortedArr = [];
  let a = 0;
  let b = 0;

  // while either index is less than its array's length...
  while (a < arr1.length || b < arr2.length) {
    // catches out of bounds
    if (a == arr1.length) {
      // dupe check
      if (sortedArr[sortedArr.length - 1] != arr2[b]) {
        sortedArr.push(arr2[b]);
      }
      b++;
      continue;
    } else if (b == arr2.length) {
      if (sortedArr[sortedArr.length - 1] != arr1[a]) {
        sortedArr.push(arr1[a]);
      }
      a++;
      continue;
    }

    // compare values. if the value has already been pushed, do not push that value (dedupe)
    if (arr1[a] < arr2[b]) {
      // dupe check
      if (sortedArr[sortedArr.length - 1] != arr1[a]) {
        sortedArr.push(arr1[a]);
      }
      a++;
    } else if (arr1[a] == arr2[b]) {
      if (sortedArr[sortedArr.length - 1] != arr1[a]) {
        sortedArr.push(arr1[a]);
      }
      a++, b++;
    } else {
      if (sortedArr[sortedArr.length - 1] != arr2[b]) {
        sortedArr.push(arr2[b]);
      }
      b++;
    }
  }
  return sortedArr;
}

// try out some other tests
console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5])); // [ 1, 3, 4, 5, 8, 10 ]
console.log(mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6])); // [1, 2, 3, 4, 5, 6, 8, 10, 12]
console.log(mergeDedupe(arr1, arr2)); // [1, 2, 3, 4, 5, 6, 8, 10, 12]

//   a ->
//     [1, 3, 3, 5, 8, 10]
//   b
//     [1, 3, 4, 5]
