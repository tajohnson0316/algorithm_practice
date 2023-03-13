const GRID_HEIGHT = 20;
const GRID_WIDTH = 20;

var gridCoordinates = new Array(GRID_HEIGHT);
for (var i = 0; i < gridCoordinates.length; i++) {
  //Initialize the grid using a 2D array
  gridCoordinates[i] = new Array(GRID_WIDTH);
}

var z = 0;
for (var x = 0; x < gridCoordinates.length; x++) {
  for (var y = 0; y < gridCoordinates[x].length; y++) {
    gridCoordinates[x][y] = z++;
  }
}

for (var i = 0; i < gridCoordinates.length; i++) {
  for (var j = 0; j < gridCoordinates[i].length; j++) {
    console.log(gridCoordinates[i][j] + " ");
  }
}

var totalCustomers = 20;
var customerLocations = [];
