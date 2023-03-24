/*
You drive a taco truck; an array of [x,y] coordinates corresponds to the locations of your customers.
You need to minimize the total distance from truck to customers. The truck only parks on street corners
(at integer coordinates like [37,-16]; customers only travel on streets (coordinate [2,-2] is distance 4
from [0,0]). Given the customer array, determine the optimal place for taco truck to park. 
 */

// Constants that can be changed from here to alter the grid size and amount of customers (syntax?)
const Y_LENGTH = 5;
const X_LENGTH = 5;
const TOTAL_CUSTOMERS = 25;

// Return a 2D array housing [x, y, total customers] values
function initializeRandomGrid(xLength, yLength, totalCustomers) {

  // Initialize an empty grid
  var grid = [];
  for (var x = -xLength; x <= xLength; x++) {
    for (var y = -yLength; y <= yLength; y++) {
      var array = [x, y, 0];
      grid.push(array);
    }
  }

  // Initialize array of random [x, y] values for totalCustomers
  var customerLocations = [];

  for (var i = 0; i < totalCustomers; i++) {
    var randomX = Math.floor(Math.random() * (xLength + 1));
    randomX *= Math.round(Math.random()) ? 1 : -1;

    var randomY = Math.floor(Math.random() * (yLength + 1));
    randomY *= Math.round(Math.random()) ? 1 : -1;

    var arr = [randomX, randomY];
    customerLocations.push(arr);
  }

  // Check each grid location to place a customer at that location
  for (var i = 0; i < grid.length; i++) {
    var gridX = grid[i][0];
    var gridY = grid[i][1];

    // Loop through each remaining customer [x, y] to see if it matches the current grid's [x, y]
    for (var j = 0; j < customerLocations.length; j++) {
      var customerX = customerLocations[j][0];
      var customerY = customerLocations[j][1];
      if (customerX === gridX && customerY === gridY) {

        // increase the total sum of customers at that location
        grid[i][2]++;

        // if we find a matching customer location, remove it from the array (time saver)
        customerLocations.splice(j, 1);
        j--;
      }
    }
  }
  return grid;
}

// Pass in an array of customer locations to return a grid
function initializeGridWithLocations(xLength, yLength, customerLocations) {

  // Initialize an empty grid
  var grid = [];
  for (var x = -xLength; x <= xLength; x++) {
    for (var y = -yLength; y <= yLength; y++) {
      var array = [x, y, 0];
      grid.push(array);
    }
  }

  for (var i = 0; i < grid.length; i++) {
    var gridX = grid[i][0];
    var gridY = grid[i][1];

    // Loop through each remaining customer [x, y] to see if it matches the current grid's [x, y]
    for (var j = 0; j < customerLocations.length; j++) {
      var customerX = customerLocations[j][0];
      var customerY = customerLocations[j][1];
      if (customerX === gridX && customerY === gridY) {

        // increase the total sum of customers at that location
        grid[i][2]++;

        // if we find a matching customer location, remove it from the array (time saver)
        customerLocations.splice(j, 1);
        j--;
      }
    }
  }
  return grid;
}

// Find the best location for the taco truck given a grid full of customers
function placeTacoTruck(grid) {

  // set weighted distance to the greatest possible manhattan distance (and more) for comparison's sake
  var shortestWeightedDistance =
    (Math.abs(grid[0][0] - grid[grid.length - 1][0]) +
      Math.abs(grid[0][1] - grid[grid.length - 1][1])) *
    grid.length;

  // array to house the [x, y] of the taco truck's best location
  var bestLocation = [];

  for (var i = 0; i < grid.length; i++) {

    // variables for tracking the current location
    var currentX = grid[i][0];
    var currentY = grid[i][1];
    var weightedDistance = 0.0;

    // loop through all locations and check their weighted manhattan distances against each other
    for (j = 0; j < grid.length; j++) {

      var totalCustomers = grid[j][2];

      // we only need to check manhattan distance from locations with customers
      if (totalCustomers > 0) {

        // variables to track checked location values
        var x = grid[j][0];
        var y = grid[j][1];

        // manhattan distance: |x1 - x2| + |y1 - y2|. Divide this by the number of customers at the location to weight it
        weightedDistance +=
          (Math.abs(currentX - x) + Math.abs(currentY - y)) / totalCustomers;
      }
    }

    // if the distance we just calculated was shorter than the previous, set a new distance and location value
    if (weightedDistance < shortestWeightedDistance) {
      shortestWeightedDistance = weightedDistance;
      bestLocation = [currentX, currentY, shortestWeightedDistance];
    }
  }
  return bestLocation;
}

// Print a readable grid
function printGridWithCustomers(grid) {
  for (var i = 0; i < grid.length; i++) {
    console.log(grid[i]);
  }
}

// Use the below line to initialize a random grid according to the top-most constants
//var newGrid = initializeRandomGrid(X_LENGTH, Y_LENGTH, TOTAL_CUSTOMERS);

var testLocations = [
  [-10, 10],
  [-10, 9],
  [-10, 8],
  [-9, 10],
  [-9, 9],
  [-9, 8],
  [-8, 10],
  [-8, 9],
  [-8, 8],
];

var testGrid = initializeGridWithLocations(10, 10, testLocations);

printGridWithCustomers(testGrid);

var tacoVals = placeTacoTruck(testGrid);

console.log(
  "The ideal location for the Taco Truck is: (" +
    tacoVals[0] +
    ", " +
    tacoVals[1] +
    "), with a weighted distance of " +
    tacoVals[2] +
    " units. [Calculated using Manhattan Distance formula]"
);
