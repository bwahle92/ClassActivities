// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
const name = "Ben";
let age = 9;
let isBaller = true;
let secret;
let insertvalue = null;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(
  typeof name,
  typeof age,
  typeof isBaller,
  typeof secret,
  typeof insertvalue
);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let str = `Now that I am ${age} years old, my value is ${insertvalue}.`;
// reassign the value of the variable that references "null"
insertvalue = "saxophone21";
// print the value and its type
console.log(insertvalue, typeof insertvalue);
// print a variable that causes a ReferenceError
console.log("dude");
// alter the previous line to no longer cause a ReferenceError
