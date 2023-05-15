/* 
  Recreate Object.entries() method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Bonus: Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
  name: "Pizza",
  calories: 9001,
};
const expected1 = [
  ["name", "Pizza"],
  ["calories", 9001],
];

const obj2 = {
  firstName: "Foo",
  lastName: "Bar",
  age: 99,
};
const expected2 = [
  ["firstName", "Foo"],
  ["lastName", "Bar"],
  ["age", 99],
];

// bonus - uncomment
// obj1.__proto__ = obj2;

// decide your ALGO roles:
// 1. DRIVER 🚗
// 2. PRESENTER 👩‍🏫👨‍🏫
// 3. NAVIGATOR 🧭

function entries(object) {
  // remember to write the pseudocode first!

  const entriesArray = [];

  for (let key in object) {
    const keyValuePair = [key, object[key]];
    entriesArray.push(keyValuePair);
  }
  return entriesArray;
}

console.log("Object 1 =>", entries(obj1));
console.log("Object 2 =>", entries(obj2));

// ==================================================
/* ==== B O N U S ====
Given a table name string and an object whose key value pairs represent column names and values for the columns
return a SQL insert statement string
Tip: string interpolation (using back ticks, the key to the left of num 1 key)
Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";

const insertData1 = { first_name: "John", last_name: "Doe" };
const expectedA =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

//   // Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};
const expectedB =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";

// RIOT

function insert(tableName, columnValuePairs) {
  // remember to write the pseudocode first!

  let query = `INSERT INTO ${tableName} (`;
  query += Object.keys(columnValuePairs).join(", ") + ") ";

  query += `VALUES ('${Object.values(columnValuePairs).join(", ")}')`;

  return query;
}

console.log(insert(table, insertData1));
// console.log(insert(table, insertData2));
