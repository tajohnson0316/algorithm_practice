// findObjectsFilter({searchFor}, [itemsArr])

// given a {search for} object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const items = [
  { firstName: "Bob", lastName: "Robert", age: 31 },
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "White", age: 31 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
];

// db.ninjas.find({firstName: "Bob", age: 31})
const searchFor1 = {
  firstName: "Bob",
  age: 31,
};
// return a new list of objects containing the same key pair values
const output1 = [
  { firstName: "Bob", lastName: "Robert", age: 31 },
  { firstName: "Bob", lastName: "White", age: 31 },
  // { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
  lastName: "Smith",
};
const output2 = [
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
];

function findObjectsFilter(searchObj, items) {
  const results = [];

  // loop through each object in the items array
  for (let object of items) {
    let matches = [];

    // loop through each key in the object
    for (let key in object) {
      // if the key is in the searchObj and the values of each object match, push into the matches array
      if (object[key] == searchObj[key]) {
        matches.push(object[key]);
      }
    }

    // if the matches array length = the values array of the searchObj length, that object matches the filter
    if (matches.length == Object.values(searchObj).length) {
      results.push(object);
    }
  }
  return results;
}

console.log(findObjectsFilter(searchFor1, items));
// findObjectsFilter(searchFor2, items)
