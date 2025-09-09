// Remember, we're gonna use strict mode in all scripts now!
'use strict';

////////////////////////////////////
// professional development environment setup

console.log('=== DEVELOPMENT ENVIRONMENT SETUP ===');

const messyExample = function (name, age) {
  if (age >= 18) {
    return 'Hello ' + name + ', you are an adult.';
  } else {
    return 'Hello ' + name + ', you are a minor.';
  }
};

console.log('Current messy code example:', messyExample('Minho', 33));
console.log('Goal: Automatic formatting, auto-refresh, and typing shortcuts');

////////////////////////////////////
// extension installation text

function testExtensions() {
  const extensionTests = [
    { name: 'Prettier', status: 'installed', purpose: 'code formatting' },
    { name: 'Live Server', status: 'installed', purpose: 'auto refresh' },
    {
      name: 'Auto Rename Tag',
      status: 'installed',
      purpose: 'HTML efficiency',
    },
  ];

  return extensionTests;
}

const extensionStatus = testExtensions();
console.log('Extension installation status:', extensionStatus);

////////////////////////////////////
// prettier configuration test

const prettierTest = {
  firstName: 'Sarah',
  lastName: 'Johnson',
  skills: ['JavaScript', 'React', 'Node.js'],
  isActive: true,
};

const messyFunction = function (x, y, z) {
  if (x > 0 && y > 0) {
    return x + y + z;
  } else {
    return 0;
  }
};

const messyArrow = items => {
  return items.map(item => {
    return item.toUpperCase();
  });
};

console.log(
  'Before Prettier formatting - this code works but looks unprofessional'
);

// create this with terrible formatting:
const studentTest = {
  firstName: 'Aisle',
  skills: ['HTML', 'CSS', 'JavaScript'],
  experience: 'beginner',
  goals: ['become-designer', 'build-projects'],
};

const testFunc = function (data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
};

////////////////////////////////////
// live server testing

// test 1: basic live reload
let liveServerTest = 'Updated message - change #2';
console.log('Live Server test:', liveServerTest);

// test 2: time-based updates
const timeStamp = new Date().toLocaleTimeString();
const updateCount = 1;

console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// test 3: function testing
function demonstrateLiveReload() {
  const randomColor = ['red', 'blue', 'green', 'purple', 'orange'][
    Math.floor(Math.random() * 5)
  ];
  const message = `Live Server rocks! Random color: ${randomColor}`;

  console.log(message);
  return message;
}

demonstrateLiveReload();

// student exercise: add this function and test live reload
function showCurrentTime() {
  const now = new Date().toLocaleTimeString();
  console.log('Current time:', now);
  return now;
}

showCurrentTime();

////////////////////////////////////
// code snippets testing

// type 'cl' then press Tab - it should expand to console.log()
console.log('Testing snippet functionality - cl + Tab created this!');

// type 'func' then press Tab - it should create a function template
function testSnippets() {
  console.log('Function created with snippet - func + Tab!');
  return 'Snippets working perfectly!';
}

testSnippets();

////////////////////////////////////
// environment setup verification

console.log('🎉 Professional Development Environment Complete!');
console.log('✅ Prettier: Automatic code formatting');
console.log('✅ Live Server: Automatic browser refresh');
console.log('✅ Snippets: Fast code generation');
console.log('✅ Extensions: Enhanced productivity');
console.log('Ready for professional JavaScript development!');

// calculate time savings
function calculateTimeSavings() {
  const dailyConsoleLogs = 50;
  const keystrokesSavedPerLog = 11; // 'console.log()' vs 'cl' + Tab
  const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
  const monthlySavings = dailySavings * 22; // work days

  console.log(`Daily keystrokes saved: ${dailySavings}`);
  console.log(`Monthly keystrokes saved: ${monthlySavings}`);

  return { daily: dailySavings, monthly: monthlySavings };
}

calculateTimeSavings();

// developer skills hour 2 - learning how to code & problem-solving framework
"use strict";

console.log("=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===");
/*
The Reality of Learning to Code:
- Most people expect: Learn syntax → Become developer
- Actual process: Learn basics → Feel confident → Try real project → 
  Get stuck everywhere → Question everything → Keep pushing → 
  Gradual improvement → Success
- Key insight: Problem-solving matters more than syntax memorization
*/

console.log(
  "Key insight: Professional developers think systematically, not just code"
);

/*
Beginner vs Professional Problem-Solving Approaches:

BEGINNER APPROACH:
1. Jump straight into coding
2. Get stuck immediately  
3. Google random solutions
4. Copy-paste without understanding
5. Get frustrated when nothing works

PROFESSIONAL APPROACH:
1. Understand the problem completely
2. Break into smaller sub-problems
3. Research specific solutions  
4. Implement step by step
5. Test and debug systematically

Today we learn the professional approach!
*/

console.log("Goal: Transform from beginner to professional problem-solver");

////////////////////////////////////
// the 4-step problem-solving framework

/*
STEP 1: UNDERSTAND THE PROBLEM
- Ask the right questions until 100% clear
- Key questions:
  * What exactly needs to be accomplished?
  * What are the inputs and expected outputs?
  * What are the edge cases and constraints?
  * Are there any special requirements?
*/

/*
STEP 2: DIVIDE AND CONQUER  
- Break big problem into small sub-problems
- Strategy:
  * Identify the main components
  * Find dependencies between components
  * Order sub-problems logically
  * Ensure each piece is solvable independently
*/

/*
STEP 3: RESEARCH SOLUTIONS
- Find answers for sub-problems you cannot solve
- Best sources: MDN Documentation, Stack Overflow, Google
- Research tips: Be specific, understand before implementing
*/

/*
STEP 4: IMPLEMENT AND TEST
- Code the solution step by step with testing
- Start simple, test each piece, combine gradually
*/

console.log("4-Step Framework: Understand → Divide → Research → Implement");

////////////////////////////////////
// practical problem-solving: smart home thermometer

/*
PROBLEM STATEMENT:
Given an array of temperatures from one day, calculate the temperature amplitude. 
Keep in mind that sometimes there might be a sensor error.

Test data: [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

STEP 1: UNDERSTANDING THE PROBLEM
- Temperature amplitude = difference between highest and lowest temperature
- Sensor errors = 'error' strings that should be ignored
- Return a number representing amplitude (max - min)

STEP 2: SUB-PROBLEMS
1. How to ignore errors? (Skip non-number values)
2. Find max value in temperature array
3. Find min value in temperature array  
4. Subtract min from max and return result
*/

const calcTempAplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const amplitude = calcTempAplitude(temperatures);
console.log(amplitude);

////////////////////////////////////
// extended problem: two arrays

/*
PROBLEM 2: Function should handle TWO arrays of temperatures

STEP 1: UNDERSTAND - Merge arrays, then apply existing logic
STEP 2: SUB-PROBLEMS - 1) Merge arrays 2) Use existing algorithm  
STEP 3: RESEARCH - array1.concat(array2) method
STEP 4: IMPLEMENT - Combine and reuse existing code
*/

const calcTempAplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const array1 = [3, 5, 1];
const array2 = [9, 0, 5];
const amplitudeNew = calcTempAplitudeNew(array1, array2);
console.log(amplitudeNew);

console.log("Problem-solving framework applied successfully to extended challenge!");

////////////////////////////////////
// problem-solving framework mastery

/*
FRAMEWORK SUCCESS ANALYSIS:
- ✅ Solved complex problems systematically
- ✅ Broke problems into manageable pieces
- ✅ Applied research when needed
- ✅ Implemented and tested successfully
- ✅ Adapted to changing requirements efficiently
*/

console.log("🎯 Framework mastered - ready for independent problem solving!");

// developer skills hour 3 - research skills & debugging fundamentals
"use strict";

console.log("=== HOUR 3: RESEARCH SKILLS & DEBUGGING FUNDAMENTALS ===");

/*
Random Googling vs Strategic Research:

RANDOM GOOGLING (Beginner Approach):
- Search only when completely stuck
- Use vague search terms like "javascript array problem"
- Copy-paste first solution found
- Don't understand what the code does
- Same problems happen repeatedly

STRATEGIC RESEARCH (Professional Approach):
- Research proactively to understand concepts
- Use specific, targeted search terms
- Evaluate multiple solutions
- Understand solutions before implementing
- Build knowledge for future problems
*/

console.log("Goal: Master research and debugging like a professional developer");
console.log("Strategic research builds lasting knowledge, not just quick fixes");

////////////////////////////////////
// professional google research techniques

/*
RESEARCH CHALLENGE: Find Maximum Value in Array
Search progression:
1. "javascript maximum value array"
2. "javascript Math.max array"  
3. "javascript Math.max spread operator array"
4. "Math.max MDN javascript"
*/

function demonstrateArrayMax(numbers) {

  // method 1 - using Math.max with spread operator 
  const method1 = Math.max(...numbers);

  // method 2 - using for loop (traditional approach)
  let method2 = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > method2) method2 = numbers[i];
  }

  // method 3 - using reduce method (functional approach)
  const method3 = numbers.reduce((max, current) => (current > max ? current : max));

  return { method1, method2, method3};
}

// test our research with sample data
const testNumbers = [3, 7, 2, 9, 1, 5];
const maxResults = demonstrateArrayMax(testNumbers);
console.log("Multiple approaches from research:", maxResults);

////////////////////////////////////
// stack overflow research results

function reverseStringMethods(str) {
  // method 1 - most common stack overflow solution
  const method1 = str.split("").reverse().join("");

  // method 2 - manual loop approach (educational)
  let method2 = "";
  for (let i = str.length - 1; i >= 0; i--) {
      method2 += str[i];
    }

  // method 3 - modern spread operator approach 
  const method3 = [...str].reverse().join("");

  return { method1, method2, method3 };
}

// test stack overflow research results
const reverseResults = reverseStringMethods("hello");
console.log("Stack Overflow research results:", reverseResults);

////////////////////////////////////
// mdn documentation master

////////////////////////////////////
// MDN DOCUMENTATION MASTERY

/*
MDN RESEARCH: Array.concat()
- Purpose: Merge two or more arrays
- Syntax: array1.concat(array2, array3, ..., arrayN)
- Returns: New array (doesn't modify originals)
- Key insight: Can concatenate multiple arrays at once!
*/

function demonstrateConcat() {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const array3 = [7, 8, 9];

  const simple = array1.concat(array2);
  const multiple = array1.concat(array2, array3);

  // verify concat doesn't modify original arrays
  console.log("Original array1 unchanged:", array1);

  return { simple, multiple };
}

const concatResults = demonstrateConcat();
console.log("MDN documentation applied:", concatResults);

////////////////////////////////////
// systematic debugging methodology

/*
5-STEP DEBUGGING PROCESS:
1. IDENTIFY - Recognize bug exists
2. ISOLATE - Locate where bug happens
3. INVESTIGATE - Understand why bug occurs
4. FIX - Implement correction
5. PREVENT - Add safeguards against similar bugs
*/

// buggy function for debugging practice
function calculateAverageScore(scores) {
  let total; // BUG: Should be initialized to 0

  for (let i = 0; i <= scores.length; i++) {
    // BUG: Should be < not <=
    total += scores[i];
  }

  return total / (scores.length + 1); // BUG: Should be scores.length
}

// test the buggy function
const testScores = [85, 92, 78, 96, 88];
const buggyResult = calculateAverageScore(testScores);
console.log("Buggy result:", buggyResult); // will show NaN or incorrect value

////////////////////////////////////
// browser developer tools mastery

function demonstrateConsoleDebugging(data) {
  console.group("Debugging Session");

  console.log("Input data:", data);

  if (typeof data !== "object") {
    console.warn("Warning: Expected object, got", typeof data);
  }

  console.table(data);
  console.groupEnd();

  return Array.isArray(data) ? data.length : Object.keys(data).length;
}

// test console debugging with different data types
const arrayData = [1, 2, 3, 4, 5];
const objectData = { name: "Minho", age: 33, city: "South Korea" };

demonstrateConsoleDebugging(arrayData);
demonstrateConsoleDebugging(objectData);

////////////////////////////////////
// debugger statement and breakpoints

function stepThroughDebugging(numbers) {
  debugger;

  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    console.log(`Processing index ${i}: value = ${currentNumber}`);

    if (typeof currentNumber === "number") {
      sum += currentNumber;
      count++;
    } else {
      console.error(`Invalid number at index ${i}:`, currentNumber);
    }
  }

  const average = count > 0 ? sum / count : 0;
  console.log("Final results:", { sum, count, average });

  return average;
}

// test debugging function
const mixedNumbers = [10, 20, "error", 30, null, 40];
const debugResult = stepThroughDebugging(mixedNumbers);
console.log("Debug session result:", debugResult);

////////////////////////////////////
// systematic bug fixing application

/*
DEBUGGING PROCESS APPLICATION:

STEP 1: IDENTIFY ✅
- Bug: calculateAverageScore returns NaN or wrong value
- Expected: Average of [85, 92, 78, 96, 88] should be 87.8
- Actual: Getting NaN or incorrect value

STEP 2: ISOLATE ✅
- Bug location: Inside calculateAverageScore function
- Specific issues: initialization, loop condition, division

STEP 3: INVESTIGATE ✅
- total starts as undefined (undefined + number = NaN)
- Loop goes one iteration too far (accesses undefined)
- Division uses wrong denominator

STEP 4: FIX ✅
- Initialize total to 0
- Change <= to < in loop condition
- Remove + 1 from division

STEP 5: PREVENT ✅
- Add input validation
- Add type checking for array elements
*/

function calculateAverageScoreFixed(scores) {
  // step 5 - PREVENT: Add input validation
  if (!Array.isArray(scores) || scores.length === 0) {
    console.error("Invalid input: scores must be a non-empty array");
    return 0;
  }

  // step 4 - FIX: Proper initialization
  let total = 0; // FIXED: Initialize to 0, not undefined

  // step 4 - FIX: Correct loop condition
  for (let i = 0; i < scores.length; i++) {
    // FIXED: < instead of <=
    // step 5 - PREVENT: Add type checking
    if (typeof scores[i] === "number") {
      total += scores[i];
    } else {
      console.warn(`Skipping non-number value at index ${i}:`, scores[i]);
    }
  }

  // step 4 - FIX: Correct division
  return total / scores.length; // FIXED: Remove + 1
}

// test the fixed function
const fixedResult = calculateAverageScoreFixed(testScores);
console.log("Fixed result:", fixedResult); // should show correct average: 87.8

// comprehensive debugging verification
console.group("Debugging Verification Tests");

// test 1 - normal case
const normalScores = [85, 92, 78, 96, 88];
const normalResult = calculateAverageScoreFixed(normalScores);
console.log("Normal case result:", normalResult);

// test 2 - edge case with invalid data
const mixedScores = [85, "invalid", 92, null, 78];
const mixedResult = calculateAverageScoreFixed(mixedScores);
console.log("Mixed data result:", mixedResult);

// test 3 - error case with invalid input
const errorResult = calculateAverageScoreFixed("not an array");
console.log("Error case result:", errorResult);

// test 4 - edge case with empty array
const emptyResult = calculateAverageScoreFixed([]);
console.log("Empty array result:", emptyResult);

console.groupEnd();

console.log("Systematic debugging process successfully applied!");
console.log("All bugs identified, isolated, investigated, fixed, and prevented.");