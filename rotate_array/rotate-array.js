/*
  Rotate Array
  Implement rotateArr(arr, offset) that accepts
  an array arr and an integer offset . Shift
  values of arr to the right by offset amount.
  ‘Wrap-around’ any values that shift off the
  end of the array to the other side, so that
  no data is lost.

  Example: rotateArr([1, 2, 3], 1), should return
  [3, 1, 2].
  
  Operate in-place (do not create a new array).

  Bonus: allow a negative offset (shift left, not
  right).
*/

function rotateArr(arr, offset) {
  console.log("Original array: " + arr);

  //makes sure this loop does not run longer than it already is going to
  var trueOffset = Math.abs(offset % arr.length);

  if (offset < 0) {
    for (var i = 0; i < trueOffset; i++) {
      for (var j = arr.length - 1; j >= 0; j--) {
        var temp = arr[arr.length - 1];
        arr[arr.length - 1] = arr[j];
        arr[j] = temp;
      }
    }
  } else {
    //These nested for loops reorder the array trueOffset times, leaving whatever was at the end, at the front
    for (var i = 0; i < trueOffset; i++) {
      for (var j = 1; j < arr.length; j++) {
        var temp = arr[0];
        arr[0] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.log("Rotated array: " + arr);
}

rotateArr([1, 2, 3, 4, 5, 6], -4);
