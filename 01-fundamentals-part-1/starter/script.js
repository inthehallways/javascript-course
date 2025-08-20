// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// JavaScript Fundamentals - Hour 1

// let js ="amazing";
// console.log(40 + 8 + 23 -10);
// console.log("GUMANA KA");

// console.log("=== VARIABLES ===");

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// console.log(age);
// age = 20;
// console.log(age);

// const birthYear = 2005;
// console.log(birthYear);

// // birthYear = 2007; 
// // ^ this will return an error because birthYear is a constant variable.

// const PI = 3.1415;
// console.log(PI);

// var job = "programmer";
// job = "chef";
// console.log(job);
// // ^ modern JS doesn't use 'var' anymore.

// // good naming conventions:
// let lastName = "Doe";
// let myCurrentJob = "Teacher";

// // bad naming conventions:
// // let 3years = 3; // can't start with a number
// // let jonas&matilda = "JM"; //no special characters
// // let new = 27; // no reserved words

// console.log("=== DATA TYPES ===");

// // number (integers or decimals)
// age = 33;
// console.log(age);
// console.log(typeof age);

// // string
// let username = "Minho";
// console.log(username);
// console.log(typeof username);

// // boolean
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// // undefined
// let year;
// console.log(year);
// console.log(typeof year);

// // variables can change types (dynamic)
// let dynamicVariable = 31;
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = "Now I'm a string!"
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);

////////////////////////////////////

// JavaScript Fundamentals - Hour 2

// basic Operators - math operators
console.log("=== MATH OPERATORS ===");

const now = 2025;
const ageMinho = now - 1991;
const ageSeungyeon = now - 1988;
console.log(ageMinho, ageSeungyeon);

console.log(ageMinho * 2, ageMinho / 10, 2 ** 3);

console.log("Math operations:");
console.log("Addition:", 10+5);
console.log("Subtraction:", 20-8);
console.log("Multiplication:", 4 * 7);
console.log("Division:", 15/3);
console.log("Exponentiation:", 2 ** 3);

// Math with strings
const firstName = "Minho";
const lastName = "Choi";
console.log(firstName + " " + lastName);

console.log("Hello " + "World" + "!");
console.log("I am " + 34 + " years old");

////////////////////////////////////
// assignment operators
console.log("=== ASSIGNMENT OPERATORS ===");

let x = 10 + 15;
console.log("x starts as:", x);

x += 10;
console.log("After x +=:", x);

x *= 4;
console.log("After x *= 4:", x);

x /= 2;
console.log("After x /= 2:", x);

x++;
console.log("After x++:", x);

x--;
x--;
console.log("After x-- twice:", x);

////////////////////////////////////
// comparison operators
console.log("=== COMPARISON OPERATORS ===");

console.log("Age comparison:");
console.log(ageMinho > ageSeungyeon);
console.log(ageSeungyeon >= 18);
console.log(ageMinho < 30);

console.log("Number comparisons:");
console.log(25 > 20);
console.log(15 < 10);
console.log(18 >= 18);
console.log(16 <= 15);

const isFullAge = ageSeungyeon >= 18;
console.log("Sarah is adult:", isFullAge);

const isMinhoOlder = ageMinho > ageSeungyeon;
console.log("Minho is older:", isMinhoOlder);

console.log("Complex comparison:");
console.log(now - 1991 > now - 1988);

////////////////////////////////////
//operator precedence
console.log("=== OPERATOR PRECEDENCE ===");

let z, y;
z = y = 25 - 10 - 5;
console.log(z, y);

const averageAge = (ageMinho + ageSeungyeon) / 2;
console.log(ageMinho, ageSeungyeon, averageAge);

////////////////////////////////////
// coding challenge #1 - bmi calculator

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
console.log("Mark's Body Mass Index (BMI):", markBMI);

let johnBMI = johnMass / (johnHeight * johnHeight);
console.log("John's Body Mass Index (BMI):", johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log("Mark has higher BMI:", markHigherBMI);