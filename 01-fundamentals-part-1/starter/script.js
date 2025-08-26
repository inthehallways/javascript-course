// JavaScript Fundamentals - Part 1
// We'll write our code here!

////////////////////////////////////

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

// birthYear = 2007; 
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

// // basic Operators - math operators
// console.log("=== MATH OPERATORS ===");

// const now = 2025;
// const ageMinho = now - 1991;
// const ageSeungyeon = now - 1988;
// console.log(ageMinho, ageSeungyeon);

// console.log(ageMinho * 2, ageMinho / 10, 2 ** 3);

// console.log("Math operations:");
// console.log("Addition:", 10+5);
// console.log("Subtraction:", 20-8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 15/3);
// console.log("Exponentiation:", 2 ** 3);

// // Math with strings
// const firstName = "Minho";
// const lastName = "Choi";
// console.log(firstName + " " + lastName);

// console.log("Hello " + "World" + "!");
// console.log("I am " + 34 + " years old");

////////////////////////////////////
// // assignment operators
// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 15;
// console.log("x starts as:", x);

// x += 10;
// console.log("After x +=:", x);

// x *= 4;
// console.log("After x *= 4:", x);

// x /= 2;
// console.log("After x /= 2:", x);

// x++;
// console.log("After x++:", x);

// x--;
// x--;
// console.log("After x-- twice:", x);

////////////////////////////////////
// // comparison operators
// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison:");
// console.log(ageMinho > ageSeungyeon);
// console.log(ageSeungyeon >= 18);
// console.log(ageMinho < 30);

// console.log("Number comparisons:");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// const isFullAge = ageSeungyeon >= 18;
// console.log("Sarah is adult:", isFullAge);

// const isMinhoOlder = ageMinho > ageSeungyeon;
// console.log("Minho is older:", isMinhoOlder);

// console.log("Complex comparison:");
// console.log(now - 1991 > now - 1988);

////////////////////////////////////
// //operator precedence
// console.log("=== OPERATOR PRECEDENCE ===");

// let z, y;
// z = y = 25 - 10 - 5;
// console.log(z, y);

// const averageAge = (ageMinho + ageSeungyeon) / 2;
// console.log(ageMinho, ageSeungyeon, averageAge);

////////////////////////////////////
// // coding challenge #1 - bmi calculator

// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;

// let markBMI = markMass / markHeight ** 2;
// console.log("Mark's Body Mass Index (BMI):", markBMI);

// let johnBMI = johnMass / (johnHeight * johnHeight);
// console.log("John's Body Mass Index (BMI):", johnBMI);

// let markHigherBMI = markBMI > johnBMI;
// console.log("Mark has higher BMI:", markHigherBMI);

////////////////////////////////////

// JavaScript Fundamentals - Hour 3

// strings and template literals
// console.log("=== STRING AND TEMPLATE LITERALS ===");

// const firstName = "Minho";
// const job = "singer";
// const birthYear = 1991;
// const year = 2025;

// // old way
// const minho = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(minho);

// // modern way - ES6 template literals
// const minhoNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(minhoNew);

// // any expression works inside ${}
// console.log(`I'm ${2025-1991} years old`);
// console.log(`Math works: ${2+3} equals give`);
// console.log(`Comparisons too: ${5 > 3}`);

// // you can  use backticks for any string
// console.log(`Just a regular string...`);

// // multiline strings
// console.log(`String
//     multiple
//     lines`);

// // exercise 1: personal introduction using template literals
// const myName = "Aisle";
// const myAge = 20;
// const myJob = "student";
// const currentYear = 2025;

// console.log(`Hello, I'm  ${myName}, a ${myAge} year old ${myJob}!`);

// // exercise 2: math in templates
// console.log(`Born in ${currentYear - myAge}, ${10 * 2}, Adult: ${myAge >= 18}`);

// ////////////////////////////////////
// // taking decisions: if / else statements
// console.log("=== IF/ELSE STATEMENTS ===");

// const age = 15;

// if (age >= 18) {
//     console.log("Sarah can start driving license 🚗");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// // variable assignments with decisions example
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// // real-world decision-making example
// const score = 85;

// if (score >= 60) {
//     console.log(`You passed with ${score} points!`);
//     console.log(`Congratulations!`);
// } else {
//     const pointsNeeded = 60 - score;
//     console.log(`You failed. Need ${pointsNeeded} more points.`);
// }

// // exercise 1: grade calculator
// const testScore = 97;

// if (testScore >= 90) {
//     console.log(`Excellent! Grade A`);
// } else if (testScore >= 80) {
//     console.log(`Good job! Grade B`);
// } else if (testScore >= 70) {
//     console.log(`Not bad! Grade C`);
// } else if (testScore >= 60) {
//     console.log(`You passed! Grade D`);
// } else {
//     console.log(`You failed! Study harder`);
// }

// // exercise 2: age verification
// const userAge = 20;

// ////////////////////////////////////
// // truth and falsy values
// console.log("=== TRUTH AND FALSY VALUES ===");

// // 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Minho"));
// console.log(Boolean({})); //true (empty object)
// console.log(Boolean("")); //false (empty string)

//  // practical applications example
//  const money = 100;
//  if (money) {
//     console.log("Don't spend it all ;)");
//  } else {
//     console.log("You should get a job!");
//  }

//  // exercise: truth detector

//  const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];

//  console.log("Value: ", 0);
//  console.log("Boolean:", Boolean(0));
//  if (0) {
//     console.log("truthy!");
//  } else {
//     console.log("falsy!");
//  }
 
//  console.log("Value: ", 1);
//  console.log("Boolean:", Boolean(1));
//  if (1) {
//     console.log("truthy!");
//  } else {
//     console.log("falsy!");
//  }
 
//  console.log("Value: ", "");
//  console.log("Boolean:", Boolean(""));
//  if ("") {
//     console.log("truthy!");
//  } else {
//     console.log("falsy!");
//  }
 
//  console.log("Value: ", "hello");
//  console.log("Boolean:", Boolean("hello"));
//  if ("hello") {
//     console.log("truthy!");
//  } else {
//     console.log("falsy!");
//  }
 
//  console.log("Value: ", undefined);
//  console.log("Boolean:", Boolean(undefined));
//  if (undefined) {
//     console.log("truthy!");
//  } else {
//     console.log("falsy!");
//  }
 
//  console.log("Value: ", null);
//  console.log("Boolean:", Boolean(null));
//  if (null) {
//     console.log("truthy!");
//  } else {
//     console.log("falsy!");
//  }

//  console.log("Value: ", NaN);
//  console.log("Boolean:", Boolean(NaN));
//  if (NaN) {
//     console.log("truthy!");
//  } else {
//     console.log("falsy!");
//  }

//  console.log("Value: ", {});
//  console.log("Boolean:", Boolean({}));
//  if ({}) {
//     console.log("truthy!");
//  } else {
//     console.log("falsy!");
//  }

//  console.log("Value: ", []);
//  console.log("Boolean:", Boolean([]));
//  if ([]) {
//     console.log("truthy!");
//  } else {
//     console.log("falsy!");
//  }

// //////////////////////////////////
// // coding challenge #2 - bmi comparison

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// console.log("Mark's Body Mass Index (BMI):", BMIMark);

// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log("John's Body Mass Index (BMI):", BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark\'s BMI which is ${BMIMark} is higher than John\'s ${BMIJohn}.`);
// } else {
//     console.log(`John\'s BMI which is ${BMIJohn} is higher than Mark\'s ${BMIMark}.`);
// }

////////////////////////////////////

// JavaScript Fundamentals - Hour 4

// type conversion and coercion
console.log("=== TYPE CONVERSION AND COERCION ===");

// manual type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Minho")); //NaN (not a number)
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

// automatic type coercion
console.log("I am " + 20 + " years old");
console.log("20" - "3" - 3);
console.log("20" / "2");
console.log("20" * "2");

// tricky examples
let n = "1" + 1; 
n = n -1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");

// type conversion = explicit/manual (recommended)
// type coercion = implicit/automatic (javascript does itself)

// exercise 1: conversion detective
console.log("5" + 2);
console.log("5" - 2);
console.log("5" * 2);
console.log("5" / 2);

const userAge = "25";
const userScore = 95;

// converting explicitly
console.log(Number(userAge));
console.log(String(userScore));

// exercise 2: fix the bug
const num1 = Number(prompt("First number:")); // the fix is to add a Number
const num2 = Number(prompt("Second number:"));
const sum = num1 + num2;
console.log(`Sum: ${sum}`);

////////////////////////////////////
// equality operators: == vs. ===
console.log("=== EQUALITY OPERATORS ===");

const age = "18";
if (age === 18) console.log("You just became an adult! :D (strict)");
if (age == 18) console.log("You just became an adult! :D (loose)");

console.log("18" === 18);
console.log("18" == 18); //coercion happens here
console.log(18 === 18);

// why == can be dangerous
console.log("0" == 0);
console.log(0 == false);
console.log("0" == false);
console.log(null == undefined);

// weird cases that causes bugs
console.log("" == 0);
console.log("   " == 0); 

// golden rule: always use === and !== unless you specifically need ==

// exercise 1: equality detective
console.log(5 === "5");
console.log(5 == "5");
console.log(true === 1);
console.log(true == 1);
console.log(false === 0);
console.log(false == 0);

// exercise 2: fix the login system
const username = prompt("Username:");
const password = prompt("Password:");

 if (username === "admin" && password === "1234") {
    console.log("Welcome admin!");
} else {
    console.log("Access denied.");
} 
 // fix: use === instead of == for strict comparison

////////////////////////////////////
// logical operators
console.log("=== LOGICAL OPERATORS ===");

const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(`AND OPERATOR:  ${hasDriverLicense && hasGoodVision}`);
console.log(`OR OPERATOR : ${hasDriverLicense || hasGoodVision}`);
console.log(`NOT OPERATOR: ${!hasDriverLicense}`);

// real-world example
const isTired = false;
console.log(hasDriverLicense && hasGoodVision && !isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log("Seungyeon is able to drive!");
} else {
    console.log("Someone else should drive...");
}

// more complex scenarios
const theirAge = 20;
const hasPermission = true;
const hasExperience = false;

if ((theirAge >= 18 || hasPermission) && hasExperience) {
    console.log("Approved to drive");
} else {
    console.log("Not approved to drive");
}

// exercise 1: club entry system
const personAge = 19;
const hasID = true;
const isVIP = false;

if (isVIP || (personAge >=18 && hasID)) {
    console.log(`Welcome to the club!`);
} else {
    console.log(`Sorry, you cannot enter`);
}

// exercise 2: weather advisor
const temperature = 25;
const isRaining = false;
const isWindy = true;

if (temperature >= 20 && temperature <= 30 &&  !isRaining && !isWindy){
    console.log("It's a perfect day for a walk!");
} if (temperature >= 15 && temperature <= 35 && !isRaining){
    console.log("It's a good day, but be cautious of the wind.");
} else {
    console.log("Maybe stay inside today.");
}

////////////////////////////////////
// the conditional (ternary) operator
console.log("=== TERNARY OPERATOR ===");

const myAge = 20;

// basic ternary: condition ? valueIfTrue : valueIfFalse
const drink = myAge >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

// equivalent if/else (more verbose)
let drink2;
if (myAge >= 18) {
    drink2 = "wine 🍷";
} else {
    drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${myAge >= 18 ? "wine 🍷" : "water 💧"}`);
// you can't use if/else inside template literals

// exercise 1: status messages
// 1. login status
const isLoggedIn = true;
let welcomeMessage = isLoggedIn ? "Welcome back!" : "Please sign in.";
console.log(welcomeMessage);

// 2. price with discount
const isPremium = false;
let price = isPremium ? 100 * 0.8 : 100;
console.log(price)

// exercise 2: smart responses
const score = 94;
const weather = "sunny";
const battery = 15

let activity = score >= 75 ? "Congrats, you did really well!" : "It's okay, you can do better!";
console.log(activity);

let weatherMessage = weather === "sunny" ? "It's a beautiful day!" : "Maybe stay inside today.";
console.log(weatherMessage);

let batteryMessage = battery >= 20 ? "You have enough battery." : "Warning: Your batter is Low.";
console.log(batteryMessage);

////////////////////////////////////
// coding challenge #4 - tip calculator

const bill = 275;

// step 1: creathe the tip calculation using ternary operator
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// step 2: print the output using template literals
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// ps: have tested 40 and 430 as well and it works :)