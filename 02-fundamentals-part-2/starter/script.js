// JavaScript Fundamentals Part 2 - Hour 1

// ////////////////////////////////////
// // functions - declarations and expressions
// console.log("=== FUNCTIONS ===");

// // function declaration
// function logger() {
//     console.log("My name is Minho");
// }

// // calling / running / invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// // always practice DRY principle - don't repeat yourself

// ////////////////////////////////////
// // function expressions

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// console.log(calcAge(2005));
// console.log(calcAge(1988));
// console.log(calcAge(1991));

// function introduce(firstName, lastName, age) {
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
//     return introduction;
// }

// console.log(introduce("Minho", "Choi", 33));
// console.log(introduce("Seungyeon", "Han", "37"));

// ////////////////////////////////////
// // return values and scope

// function yearsUntilRetirement(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years.`;
//     } else {
//         return `${firstName} has already retired` ;
//     }
// }

// console.log(yearsUntilRetirement(1991, "Minho"));

// // global scope
// const globalVar = "I am global";

// function testScope() {
//     // function scope
//     const localVar = "I am local";
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope();
// // console.log(localVar); // this will cause an error because you can't access local var from outside
// console.log(globalVar);

// ////////////////////////////////////

// // coding challenge #1 - function calculator
// function calcAverage (score1, score2, score3) {
//     return (score1 + score2 + score3) / 3;
// }

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= (2 * avgKoalas)) {
//         return `Dolphins win ${avgDolphins} vs ${avgKoalas}.`;
//     } else if (avgKoalas >= (2 * avgDolphins)) {
//         return `Koalas win ${avgKoalas} vs ${avgDolphins}.`;
//     } else {
//         return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}.`;
//     }
// }

// // test data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // test data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

////////////////////////////////////

// JavaScript Fundamentals Part 2 - Hour 2

////////////////////////////////////
// arrays - creation and access
console.log("=== ARRAYS ===");

// array creation
const friends = ["Onew", "Jonghyun", "Key", "Taemin"];
console.log(friends);

// different data types in same array
const mixed = ["Minho", 34, true, friends];
console.log(mixed);

// alternative way (but literal notation is preferred)
const years = new Array(1991, 1984, 2007, 2020);
console.log(years);

// array indexing starts at 0
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

// array length property
console.log(friends.length);

// get the last element
console.log(friends[friends.length - 1]);

// changing array elements
friends[1] = "Kai";
console.log(friends);

// arrays can contain expressions and function calls
const firstName = "Minho";
const minho = [firstName, "Choi", 2025 - 1991];
console.log(minho);

// using our calcAge function from Hour 1
const calcAge = function(birthYear) {
    return 2025 - birthYear;
};

const ages = [calcAge(1991), calcAge(1988), calcAge(2005)];
console.log(ages);

////////////////////////////////////
// array methods - adding elements

const newLength = friends.push("Kai");
console.log(friends);
console.log(newLength);

// unshift - add to beginning
friends.unshift("Changmin");
console.log(friends);

// pop - remove from end
const popped = friends.pop();
console.log(popped);
console.log(friends);

// shift - remove from beginning
const shifted = friends.shift();
console.log(shifted);
console.log(friends);

// indexof - find position of element
console.log(friends.indexOf("Onew"));
console.log(friends.indexOf("Bob")); // -1 (not found)

// includes - check if element exists
console.log(friends.includes("Key"));
console.log(friends.includes("Bob"));

////////////////////////////////////
// array iteration - loops

// traditional for loop
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

// for loop with processing
for (let i = 0; i < years.length; i++) {
    ages.push(2025 - years[i]);
}
console.log(ages);

// for each method - modern approach
friends.forEach(function (friend, index) {
    console.log(`${index}: ${friend}`);
});

// arrow function version (even cleaaner)
friends.forEach((friend, index) => {
    console.log(`Friend ${index + 1}: ${friend}`);
});

// real-world example
const grades2 = [85, 92, 78, 96, 88, 74];
let total = 0;

// calculate average grade
for (let i = 0; i < grades2.length; i++) {
   total += grades2[i];
};
const average2 = total / grades2.length;
console.log(`Average grade: ${average2.toFixed(2)}`);

// count passing students (grade >= 70)
let passedCount2 = 0;
grades2.forEach((grade2) => {
    if (grade2 >= 70) passedCount2++;
});
console.log(`${passedCount2} out of ${grades2.length} students passed.`);

////////////////////////////////////
// coding challenge #2 - student grade manager

const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// function to calculate average
function calculateAverage(grades) {
    let total = 0;

    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    };

    return total / grades.length;
};

// function to find highest grade
function findHighestGrade(grades) {
    let highestGrade = grades[0];

    for (let i = 1; i < grades.length; i++) {
        if (grades[i] > highestGrade) {
            highestGrade = grades [i];
        }
    };

    return highestGrade;
}

// function to find lowest grade
function findLowestGrade(grades) {
    let lowestGrade = grades[0];

    for (let i = 1; i < grades.length; i++) {
        if (grades[i] < lowestGrade) {
            lowestGrade = grades [i];
        }
    };

    return lowestGrade;
}

// function to count passing students
function countPassing(grades, passingGrade) {
    let count = 0;

    grades.forEach((grade) => {
        if (grade >= passingGrade) {
            count++;
        }
    });

    return count;
}

const aveGrade = calculateAverage(grades);
const hGrade = findHighestGrade(grades);
const lGrade = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${aveGrade.toFixed(2)}`);
console.log(`Highest: ${hGrade}`);
console.log(`Lowest: ${lGrade}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);