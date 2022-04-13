//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Write a function that takes 2 numbers and returns the sum of those numbers
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addNumbers(a, b) {
  if  (typeof a !== 'number') return false; // Edge cases upfront, and input validations!
  if  (typeof b !== 'number') return false;
  return a += b
}

console.log("1. addNumbers", addNumbers(1, 2));
console.log(typeof(1, 2)) // number

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Write a function that takes any number of arguments of type number and returns the sum of all the arguments
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addManyNumbers(...numbers) { // ... is the rest operator creating an array of all the arguments.
  let sum = 0;
  numbers.forEach(number => sum += number)
  return sum
}

// or this....

function addManyNumbers(...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue) // accumulator = starting total, adding the currentValue (looping through the numbers) to the accumulator (initial sum).
}

console.log("2. addManyNumbers", addManyNumbers(1, 2234, 4, 5, 345, 2452, 2345, 695));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Write a function that takes two strings, A and B, and returns whether B is in A in a case-insensitive way
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function stringIncludes(strA, strB) {
  let phrase = strA.toLowerCase().split(' '); // split and join are best friends! split converts string to array and join converts array to a string.
  
  // console.log(phrase);
  
  return true ? phrase.includes(strB) : false 
}

console.log(
  "3. stringIncludes",
  stringIncludes("I drove to New York in a van with my friend", "new")
);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Write a function that takes an array of objects, and returns an array of objects' "name" property, only if that property exists
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getNames(array) {    
  // let newArray = array.map(object => object.name);
  // // console.log(newArray);
  // let newArray2 = newArray.filter(object => object !== undefined)
  // // console.log(newArray2);
  // return newArray2;

  // or this... chaining together into one line.

  return array.map(object => object.name).filter(object => object !== undefined);
}


console.log(
  "4. getNames",
  getNames([{ a: 1 }, { name: "Jane" }, {}, { name: "Mark" }, { name: "Sophia" }, { b: 2 }])
); // Expects:  ["Jane", "Mark", "Sophia"]

// * let myClass = ["Preston", "Mae", "Sam", "Devonte", "Zoidberg"];
// return myClass.filter((name) => name == "Zoidberg");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5. Write a function that takes an array of numbers and returns the index of the largest number
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getLargestNumberIndex(array) {
  // input validation: is this an array? does it only have numbers?

  // console.log(array);

  let highestNumber = Math.max(...array) // must use spread when using Math.max with an array.
  console.log(highestNumber);

  return array.findIndex((number) => number === highestNumber);
}

console.log("5. getLargestNumberIndex", getLargestNumberIndex([7, 1, 4, 12, 9])); // Expects: 3
