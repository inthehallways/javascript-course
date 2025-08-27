// JavaScript Fundamentals Part 2 - Hour 1

////////////////////////////////////
// functions - declarations and expressions
console.log("=== FUNCTIONS ===");

// function declaration
function logger() {
    console.log("My name is Minho");
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

// always practice DRY principle - don't repeat yourself

////////////////////////////////////
// function expressions

const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

console.log(calcAge(2005));
console.log(calcAge(1988));
console.log(calcAge(1991));

function introduce(firstName, lastName, age) {
    const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
    return introduction;
}

console.log(introduce("Minho", "Choi", 33));
console.log(introduce("Seungyeon", "Han", "37"));

////////////////////////////////////
// return values and scope

function yearsUntilRetirement(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} has already retired` ;
    }
}

console.log(yearsUntilRetirement(1991, "Minho"));

// global scope
const globalVar = "I am global";

function testScope() {
    // function scope
    const localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}

testScope();
// console.log(localVar); // this will cause an error because you can't access local var from outside
console.log(globalVar);

////////////////////////////////////

// coding challenge #1 - function calculator
function calcAverage (score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (2 * avgKoalas)) {
        return `Dolphins win ${avgDolphins} vs ${avgKoalas}.`;
    } else if (avgKoalas >= (2 * avgDolphins)) {
        return `Koalas win ${avgKoalas} vs ${avgDolphins}.`;
    } else {
        return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}.`;
    }
}

// test data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// test data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));