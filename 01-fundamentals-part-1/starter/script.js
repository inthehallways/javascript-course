// JavaScript Fundamentals - Part 1
// We'll write our code here!

let js ="amazing";
console.log(40 + 8 + 23 -10);
console.log("GUMANA KA");

console.log("=== VARIABLES ===");

let firstName = "Jonas";
console.log(firstName);

let age = 30;
console.log(age);
age = 20;
console.log(age);

const birthYear = 2005;
console.log(birthYear);

// birthYear = 2007; 
// ^ this will return an error because birthYear is a constant variable.

const PI = 3.1415;
console.log(PI);

var job = "programmer";
job = "chef";
console.log(job);
// ^ modern JS doesn't use 'var' anymore.

// good naming conventions:
let lastName = "Doe";
let myCurrentJob = "Teacher";

// bad naming conventions:
// let 3years = 3; // can't start with a number
// let jonas&matilda = "JM"; //no special characters
// let new = 27; // no reserved words

console.log("=== DATA TYPES ===");

// number (integers or decimals)
age = 33;
console.log(age);
console.log(typeof age);

// string
let username = "Minho";
console.log(username);
console.log(typeof username);

// boolean
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

// undefined
let year;
console.log(year);
console.log(typeof year);

// variables can change types (dynamic)
let dynamicVariable = 31;
console.log(dynamicVariable, typeof dynamicVariable);

dynamicVariable = "Now I'm a string!"
console.log(dynamicVariable, typeof dynamicVariable);

dynamicVariable = true;
console.log(dynamicVariable, typeof dynamicVariable);

