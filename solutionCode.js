//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Write a function that takes 2 numbers and returns the sum of those numbers
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addNumbers(number1, number2) {
  // check for edge cases & input validation
  if (typeof number1 !== "number") return false;
  if (typeof number2 !== "number") return false;

  // operations
  return number1 + number2;
}

console.log("1. addNumbers", addNumbers(1, 2));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Write a function that takes any number of arguments of type number and returns the sum of all the arguments
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addManyNumbers(...args) {
  // variables
  const arguments = args;

  // check for edge cases & input validation
  if (arguments.some((number) => typeof number !== "number")) return false;

  // operations
  return arguments.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
}

console.log("2. addManyNumbers", addManyNumbers(1, 2234, 4, 5, 345, 2452, 2345, 695));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Write a function that takes two strings, A and B, and returns whether B is in A in a case-insensitive way
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function stringIncludes(string1, string2) {
  // check for edge cases & input validation
  if (typeof string1 !== "string") return false;
  if (typeof string2 !== "string") return false;

  // operations
  let phrase = string1.toLowerCase().split(" ");
  if (phrase.includes(string2)) return true;
  else return false;
}

console.log(
  "3. stringIncludes",
  stringIncludes("I drove to New York in a van with my friend", "new")
);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Write a function that takes an array of objects, and returns an array of objects' "name" property, only if that property exists
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getNames(array) {
  // check for edge cases & input validation
  if (typeof array !== "object") return false;

  // operations
  return array.map((element) => element.name).filter((element) => element !== undefined);
}

console.log(
  "4. getNames",
  getNames([{ a: 1 }, { name: "Jane" }, {}, { name: "Mark" }, { name: "Sophia" }, { b: 2 }])
); // Expects:  ["Jane", "Mark", "Sophia"]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5. Write a function that takes an array of numbers and returns the index of the largest number
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getLargestNumberIndex(...args) {
  // variables
  const arguments = args[0];

  // check for edge cases & input validation
  if (arguments.some((number) => typeof number !== "number")) return false;

  // operations
  let largestNumber = Math.max(...arguments);
  return arguments.findIndex((element) => element === largestNumber);
}

console.log("5. getLargestNumberIndex", getLargestNumberIndex([7, 1, 4, 12, 9])); // Expects: 3
