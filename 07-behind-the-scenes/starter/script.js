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