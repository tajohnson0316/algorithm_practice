var arr2d2 = [
  [2, 5, 8],
  [3, 6, 1],
  [5, 7, 7],
];

function isPresent2D(arr2d, value) {
  for (var i = 0; i < arr2d.length; i++) {
    for (var j = 0; j < arr2d[i].length; j++) {
      if (arr2d[i][j] === value) {
        return true;
      }
    }
  }
  return false;
}

function flatten(arr2d) {
  var newArr = [];
  for (var i = 0; i < arr2d.length; i++) {
    for (var j = 0; j < arr2d[i].length; j++) {
      newArr.push(arr2d[i][j]);
    }
  }
  return newArr;
}

console.log(isPresent2D(arr2d2, 5));
console.log(flatten(arr2d2));
