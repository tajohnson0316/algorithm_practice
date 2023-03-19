function reverse(arr) {
  var start = 0;
  var end = arr.length - 1;
  while (start < end) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

var arr = ["a", "b", "c", "d", "e"];
console.log(reverse(arr));
