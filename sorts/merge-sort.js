// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call mergeSortedArrays(arr1, arr2)

var testArr = [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12]     99, 111, 9, 15, 49
// 88, 22
// 88

// main recursive function that will be passed in mergeSortedArrays(left, right)
// create a new sorted arr based on the given arr being recursively split and merged.
function mergeSort(arr) {
  // base case
  if (arr.length <= 1) {
    return arr;
  }

  // Slice the array in half
  let middleIdx = Math.floor(arr.length / 2);
  let arr1 = arr.slice(0, middleIdx);
  let arr2 = arr.slice(middleIdx);

  return mergeSortedArrays(mergeSort(arr1), mergeSort(arr2));
}

// helper function
// --> try solving this first!
// return a new sorted array with all of the values of arr1 and arr2
// this function always assumes the passed in arrays are already sorted
function mergeSortedArrays(arr1, arr2) {
  let sortedArr = [];
  let a = 0;
  let b = 0;

  // while either index is less than its array's length...
  while (a < arr1.length || b < arr2.length) {
    // catches out of bounds
    if (a == arr1.length) {
      sortedArr.push(arr2[b]);
      b++;
      continue;
    } else if (b == arr2.length) {
      sortedArr.push(arr1[a]);
      a++;
      continue;
    }

    // if arr1[a] < arr2[b] push arr1[a] to sortedArr and increment the a index,
    // else do the same, but for arr2 and b index
    arr1[a] < arr2[b]
      ? (sortedArr.push(arr1[a]), a++)
      : (sortedArr.push(arr2[b]), b++);
  }

  return sortedArr;
}

console.log(mergeSort(testArr));
