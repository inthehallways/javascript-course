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
// console.log("=== ARRAYS ===");

// // array creation
// const friends = ["Onew", "Jonghyun", "Key", "Taemin"];
// console.log(friends);

// // different data types in same array
// const mixed = ["Minho", 34, true, friends];
// console.log(mixed);

// // alternative way (but literal notation is preferred)
// const years = new Array(1991, 1984, 2007, 2020);
// console.log(years);

// // array indexing starts at 0
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// // array length property
// console.log(friends.length);

// // get the last element
// console.log(friends[friends.length - 1]);

// // changing array elements
// friends[1] = "Kai";
// console.log(friends);

// // arrays can contain expressions and function calls
// const firstName = "Minho";
// const minho = [firstName, "Choi", 2025 - 1991];
// console.log(minho);

// // using our calcAge function from Hour 1
// const calcAge = function(birthYear) {
//     return 2025 - birthYear;
// };

// const ages = [calcAge(1991), calcAge(1988), calcAge(2005)];
// console.log(ages);

// ////////////////////////////////////
// // array methods - adding elements

// const newLength = friends.push("Kai");
// console.log(friends);
// console.log(newLength);

// // unshift - add to beginning
// friends.unshift("Changmin");
// console.log(friends);

// // pop - remove from end
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// // shift - remove from beginning
// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// // indexof - find position of element
// console.log(friends.indexOf("Onew"));
// console.log(friends.indexOf("Bob")); // -1 (not found)

// // includes - check if element exists
// console.log(friends.includes("Key"));
// console.log(friends.includes("Bob"));

// ////////////////////////////////////
// // array iteration - loops

// // traditional for loop
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

// // for loop with processing
// for (let i = 0; i < years.length; i++) {
//     ages.push(2025 - years[i]);
// }
// console.log(ages);

// // for each method - modern approach
// friends.forEach(function (friend, index) {
//     console.log(`${index}: ${friend}`);
// });

// // arrow function version (even cleaaner)
// friends.forEach((friend, index) => {
//     console.log(`Friend ${index + 1}: ${friend}`);
// });

// // real-world example
// const grades2 = [85, 92, 78, 96, 88, 74];
// let total = 0;

// // calculate average grade
// for (let i = 0; i < grades2.length; i++) {
//    total += grades2[i];
// };
// const average2 = total / grades2.length;
// console.log(`Average grade: ${average2.toFixed(2)}`);

// // count passing students (grade >= 70)
// let passedCount2 = 0;
// grades2.forEach((grade2) => {
//     if (grade2 >= 70) passedCount2++;
// });
// console.log(`${passedCount2} out of ${grades2.length} students passed.`);

// ////////////////////////////////////
// // coding challenge #2 - student grade manager

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // function to calculate average
// function calculateAverage(grades) {
//     let total = 0;

//     for (let i = 0; i < grades.length; i++) {
//         total += grades[i];
//     };

//     return total / grades.length;
// };

// // function to find highest grade
// function findHighestGrade(grades) {
//     let highestGrade = grades[0];

//     for (let i = 1; i < grades.length; i++) {
//         if (grades[i] > highestGrade) {
//             highestGrade = grades [i];
//         }
//     };

//     return highestGrade;
// }

// // function to find lowest grade
// function findLowestGrade(grades) {
//     let lowestGrade = grades[0];

//     for (let i = 1; i < grades.length; i++) {
//         if (grades[i] < lowestGrade) {
//             lowestGrade = grades [i];
//         }
//     };

//     return lowestGrade;
// }

// // function to count passing students
// function countPassing(grades, passingGrade) {
//     let count = 0;

//     grades.forEach((grade) => {
//         if (grade >= passingGrade) {
//             count++;
//         }
//     });

//     return count;
// }

// const aveGrade = calculateAverage(grades);
// const hGrade = findHighestGrade(grades);
// const lGrade = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${aveGrade.toFixed(2)}`);
// console.log(`Highest: ${hGrade}`);
// console.log(`Lowest: ${lGrade}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);

////////////////////////////////////

// JavaScript Fundamentals Part 2 - Hour 3

////////////////////////////////////
// // the array problem

// const minhoArray = [
//     "Minho",
//     "Choi",
//     2025 - 1991,
//     "singer",
//     ["Onew", "Jonghyun", "Key", "Taemin"],
// ];

// console.log(minhoArray[0]);
// console.log(minhoArray[1]);
// console.log(minhoArray[2]);

// // ^ the problem with this approach is it's difficult to remember because there are no descriptive names for the data

// ////////////////////////////////////
// // objects - creation with object literal syntax
// console.log("=== OBJECTS ===");

// // object literal syntax - curly braces create objects
// const minhoObject = {
//     firstName: "Minho",
//     lastName: "Choi",
//     age: 2025 - 1991,
//     job: "singer",
//     friends: ["Onew", "Jonghyun", "Key", "Taemin"],
// };
// console.log(minhoObject);

// // property access methods

// // dot notation - clean and readable and most common
// console.log(minhoObject.firstName);
// console.log(minhoObject.lastName);
// console.log(minhoObject.age);

// // bracket notation - uses strings and more flexible
// console.log(minhoObject["firstName"]);
// console.log(minhoObject["job"]);
// console.log(minhoObject["friends"]);

// // advantage of bracket notation - can compute property names
// const nameKey = "Name";
// console.log(minhoObject["first" + nameKey]);
// console.log(minhoObject["last" + nameKey]);

// // modifying existing properties
// minhoObject.job = "actor";
// minhoObject["age"] = 33;
// console.log(minhoObject);

// // adding new properties
// minhoObject.location = "South Korea";
// minhoObject["twitter"] = "choiminho_1209";
// minhoObject.hasDriverLicense = true;
// console.log(minhoObject);

// // when to use bracket notation
// const property = "job";
// console.log(minhoObject[property]);

// // 1. property name is a variable
// // 2. property name has spaces or special characters
// // 3. property name is computed/dynamic
// // otherwise, use dot notation

// // object vs arrays decision making

// // arrays
// const listOfYears = [1991, 1988, 2005, 2025];
// const shoppingList = ["takoyaki", "waffles", "milktea", "bread"];
// const testScores = [85, 92, 78, 96];

// // objects
// const person = {
//     name: "Minho",
//     age: 34,
//     occupation: "singer",
// }

// const car = {
//     brand: "Mitsubishi",
//     model: "Mirage",
//     year: 2020,
//     color: "silver"
// };

// // objects can contain arrays, arrays can contain objects
// const student = {
//     name: "Seungyeon",
//     grades: [85, 92, 78],
//     address: {
//         street: "205 Gangnam St.",
//         city: "Seoul",
//     },
// };
// console.log(student.grades[0]);
// console.log(student.address.city);

// ////////////////////////////////////
// // object methods

// const minho = {
//     firstName: "Minho",
//     lastName: "Choi",
//     birthYear: 1991,
//     job: "singer",
//     friends: ["Onew", "Jonghyun", "Key", "Taemin"],
//     hasDriverLicense: true,

// // method - function iside object
//     calcAge: function(birthYear) {
//         return 2025 - birthYear;
//     },
// };

// console.log(minho.calcAge(1991));
// console.log(minho.calcAge(minho.birthYear));

// // this keyword
// const minhoImproved = {
//     firstName: "Minho",
//     lastName: "Choi",
//     birthYear: 1991,
//     job: "singer",
//     friends: ["Onew", "Jonghyun", "Key", "Taemin"],
//     hasDriverLicense: true,

//     calcAge: function() {
//         console.log(this);
//         return 2025 - this.birthYear;
//     },
// };

// console.log(minhoImproved.calcAge());

// // advanced storing calculated values in objects
// const minhoAdvanced = {
//     firstName: "Minho",
//     lastName: "Choi",
//     birthYear: 1991,
//     job: "singer",
//     friends: ["Onew", "Jonghyun", "Key", "Taemin"],
//     hasDriverLicense: true,

//     calcAge: function() {
//         this.age = 2025 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()}-year old
//     ${this.job}, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license.`;
//     },
// };

// console.log(minhoAdvanced.calcAge());
// console.log(minhoAdvanced.age);
// console.log(minhoAdvanced.getSummary());

// // complex object with multiple methods (show real world pattern)
// const bankAccount = {
//     owner: "Seungyeon Han",
//     movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//     interestRate: 1.2,
//     pin: 1111,

//     // method to calculate balance
//     calcBalance: function() {
//     this.balance = this.movements.reduce((acc, mov) => acc + mov, 0);
//     return this.balance;
//     }, 

//     // method to add movement
//     deposit: function(amount) {
//     this.movements.push(amount);
//     this.calcBalance();
//     },

//     withdraw: function(amount) {
//     this.movements.push(-amount);
//     this.calcBalance();
//     },

//     // method for account summary
//     getStatement: function() {
//         return `${this.owner}'s account balance: ${this.calcBalance()}`;
//     },
// };

// console.log(bankAccount.getStatement());
// bankAccount.deposit(500);
// console.log(bankAccount.getStatement());

// ////////////////////////////////////
// // coding challenge #3 - user profile system

// const user = {
//     firstName: "Seungyeon",
//     lastName: "Han",
//     birthYear: 1988,
//     location: "South Korea",
//     interests: ["dogs", "singing", "photography"],
//     friends: [
//         {name: "Gyuri", status: "active"},
//         {name: "Hara", status: "inactive"},
//         {name: "Jiyoung", status: "active"},
//         {name: "Nicole", status: "active"},
//     ],
//     isActive: true,

//     // calculate age method
//     calcAge: function () {
//         this.age = new Date().getFullYear() - this.birthYear;
//         return this.age;
//     },

//     // add friend method
//     addFriend: function (name, status = "active") {
//         this.friends.push({name, status: status});
//         return this.friends.length;
//     },

//     // get active friends count
//     getActiveFriends: function () {
//         const activeFriends = this.friends.filter(friend => friend.status === "active").length;
//         return activeFriends;
//     },

//     // toggle active status
//     toggleStatus: function () {
//         this.isActive = !this.isActive;
//         return this.isActive;
//     },

//     // generate profile summary
//     getSummary: function () {
//         const age = this.calcAge();
//         const activeFriends = this.getActiveFriends();
//         const status = this.isActive ? "active" : "away";

//         return `${this.firstName} ${this.lastName} (${age}) from ${this.location}
//         Currently ${status}
//         ${activeFriends} active friends out of ${this.friends.length} total
//         Interests: ${this.interests.join(", ")}
//         fateflysy | 한승연 Vlog | INFJ`;

//     }
// };

// // test your user profile system
// console.log(user.getSummary());
// user.addFriend("Youngji", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());

////////////////////////////////////
// selecting dom elements

// querySelector - works with any css selector
// const message = document.querySelector(".message");
// // gets us the entire element object with all its properties
// const button = document.querySelector("#btn");
// console.log(button);

// const heading = document.querySelector("h1");
// console.log(message);

// const input = document.querySelector(".guess");
// console.log(heading);

// // query selector returns the first matching element
// console.log(message.textContent);
// console.log(button.id);
// console.log(heading.tagName);
// console.log(heading.textContent);

// // getElementById 
// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(buttonById === button); // same element, different method

// // querySelectorAll - multiple elements
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]);
// console.log(allParagraphs.length);

////////////////////////////////////
// modifying element content 

const message = document.querySelector(".message");

// textContent - gets/sets just the text, no HTML
console.log(message.textContent); // "Start interacting!"
message.textContent = "Hello from JavaScript!";
console.log(message.textContent); // "Start interacting!"

// innerHTML - includes HTML tags (more powerful but be careful)
message.innerHTML = "<strong>Bold text from JS!</strong>";

// innerText - respects styling (what user actually sees)
console.log(message.innerText);

// input element values (use .value, not textContent)
const input = document.querySelector(".guess");

console.log(input.value);
input.value = "Default text";
input.placeholder = "Type here...";

// dynamic style changes

//changing element styles with the style property
const heading = document.querySelector("h1");

heading.style.color = "mediumseagreen";
heading.style.backgroundColor = "lightgray";
heading.style.fontSize = "3rem";
heading.style.padding = "20px";
heading.style.borderRadius = "10px";

const button = document.querySelector("#btn");
button.style.padding = "5px";
button.style.borderRadius = "5px";
button.style.backgroundColor = "mediumseagreen";

const inputText = document.querySelector("input")
inputText.style.padding = "5px";
inputText.style.borderRadius = "5px";
inputText.style.backgroundColor = "lightgray";

////////////////////////////////////
// event listeners - user interaction

button.addEventListener("click", function() {
    console.log("Button was clicked!");
    message.textContent = "You clicked the button!";
    message.style.color = "mediumseagreen";
});

// event listener with state management
let clickCount = 0;
button.addEventListener("click", function() {
    clickCount++
    button.textContent = `Clicked ${clickCount} times`;
    button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
});

// input events fire every time user types
const display = document.querySelector("message");
input.addEventListener('input', function() {
    const userText = input.value;
    message.textContent = `You typed: ${userText}`;
    message.style.fontSize = `${userText.length + 10}px`;
})

// keyboard events - responding to specific keys
input.addEventListener("keydown", function (event) {
    console.log(`Key pressed: ${event.key}`);

    if (event.key === "Enter") {
        message.textContent = `You pressed Enter! Text was ${input.value}`;
        input.value = ""; // clear input
    }
});

// global keyword events
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        // reset everything
        message.textContent = "Reset with Escape key!";
        input.value = "";
        clickCount = 0;
        button.textContent = "Click Me!";
    }
});