// behind the scenes development hour 1 - scoping & hosting
'use strict';

console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

/*
In this hour, we'll explore:
1. How JavaScript executes code (execution contexts)
2. Where variables are accessible (scoping)
3. Why some code works before declaration (hoisting)
4. How to avoid common pitfalls (TDZ and strict mode)

This foundation is crucial for understanding JavaScript's behavior!
*/

// global execution context
console.log('Starting program');

function alpha() {
    console.log('alpha:start');
    beta();
    console.log('alpha:end');
}

function beta() {
    console.log('beta');
}

alpha();
// expected output: alpha:start → beta → alpha:end

// scoping & scope chain -- determines where variables are accessible in your code

// global scope
const globalVar = 'I am global';
function anyFunction() {
    console.log(globalVar);
}

// function scope
function myFunction() {
    const functionVar = 'I am local to myFunction';
    console,log(functionVar); // if i move this after line 44, it would return an error
}

// block scope
if (true) {
    let blockVar = 'I am block-scoped';
    const alsoBlockVar = 'Me too!';
    var notBlockScoped = 'I leak out of the block'; // var ignores block scope
}

// hoisting -- variable and function declarations are moved to the top of their scope
// examples

console.log(varX); // works, undefined
// console.log(letX); // reference error in TDZ
// console.log(constX); // reference error in TDZ

var varX = 1;
let letX = 2;
const constX = 3;

console.log(addDecl(7, 8)); // this would work wherever you put it

function addDecl(a, b) {
    return a + b;
}

console.log(addDecl(7, 8)); // like this too

// however, this one would return an error
// console.log(addExpr(7, 8)); // because it's called before the value is defined

const addExpr = function(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

// temporal dead zone (TDZ) - period between when a let or const variable is hoisted and when it's initialized
const apiUrl = 'https://example.com';
console.log(apiUrl); // if this was declared first before const, it would return an error

// behind the scenes development hour 2 - this keyword & arrow functions

const person = {
    name: 'Hyewon',
    greet: function() {
        console.log(`Hello, I am ${this.name}`);
    },
};

person.greet();

// borrowing method or greet function
const anotherPerson = { name: 'Daniela' };
anotherPerson.greet = person.greet;
anotherPerson.greet();

// detached function
const greetFunction = person.greet;
// greetFunction(); // would return Hello, I am undefined or an error

// arrow functions
const obj = {
    name: 'Object',
    regularMethod: function() {
        console.log('Regular:', this.name);
    },

    arrowMethod: () => {
        console.log('Arrow:', this.name);
    },
};

obj.regularMethod(); // regular: Object
obj.arrowMethod(); // arrow: undefined

// arrow functions are used when you need a very quick function call

// common real-world example: timer with setTimeout
const timer = {
    name: 'Timer',

    // old approach with self = this
    start: function() {
        console.log(`${this.name} starting...`);
        const self = this; // in the modern approach, this isn't needed. it fixes this problem

        setTimeout(function() {
            console.log(`${self.name} finished`);
        }, 1000);
    },

    // modern approach with arrow function
    startModern: function() {
        console.log(`${this.name} starting modern...`);

        setTimeout(() => {
            console.log(`${this.name} finished modern`);
        }, 1500);
    },
};

timer.start();
timer.startModern();

// user arrow functions for callbacks where you want to preserve the outer this

// arguments keywords & advanced scenarios
const functionTypes = {
    regularFunction: function() {
        console.log('Arguments length:', arguments.length);
        console.log('First argument:', arguments[0]);
    },

    arrowFunction: () => {
        // console.log(arguments); // error because arguments is not defined
        console.log('Arrow function called');
    },

    modernFunction: (...args) => {
        console.log('Args length:', args.length);
        console.log('First arg:', args[0]);
    },
};

functionTypes.regularFunction('hello', 'world');
functionTypes.arrowFunction('test'); 
functionTypes.modernFunction('modern', 'approach');