// ========================== FOR LOOP ==========================
// The for loop is used to run a block of code a certain number of times.
// Syntax: for (initialization; condition; increment) { code }

console.log("==== FOR LOOP ====");

// Example 1: A simple for loop that counts from 0 to 4.
for (let i = 0; i < 5; i++) { // i starts at 0, runs while i is less than 5, increments i by 1 after each loop.
  console.log(i); // Prints the value of i in each iteration: 0, 1, 2, 3, 4.
}

// Example 2: A for loop with a different increment.
for (let i = 0; i <= 10; i += 2) { // i starts at 0, runs while i is less than or equal to 10, increments i by 2.
  console.log(i); // Prints even numbers from 0 to 10: 0, 2, 4, 6, 8, 10.
}


// ========================== WHILE LOOP ==========================
// The while loop runs as long as a given condition is true.
// Syntax: while (condition) { code }

console.log("==== WHILE LOOP ====");

// Example 1: A while loop that counts from 0 to 4.
let i = 0;
while (i < 5) { // Runs while i is less than 5.
  console.log(i); // Prints the value of i in each iteration: 0, 1, 2, 3, 4.
  i++; // Increments i by 1.
}

// Example 2: A while loop that prints numbers from 1 to 10.
let j = 1;
while (j <= 10) { // Runs while j is less than or equal to 10.
  console.log(j); // Prints the value of j.
  j++; // Increments j by 1.
}


// ========================== DO...WHILE LOOP ==========================
// The do...while loop runs the block of code once before checking the condition, and then continues to run as long as the condition is true.
// Syntax: do { code } while (condition);

console.log("==== DO...WHILE LOOP ====");

// Example 1: A do...while loop that runs at least once, then counts from 0 to 4.
let k = 0;
do {
  console.log(k); // Prints the value of k in each iteration: 0, 1, 2, 3, 4.
  k++; // Increments k by 1.
} while (k < 5); // Runs while k is less than 5.


// ========================== FOR...IN LOOP ==========================
// The for...in loop is used to iterate over the properties of an object or elements of an array.
// Syntax: for (let key in object) { code }

console.log("==== FOR...IN LOOP ====");

// Example 1: A for...in loop to iterate over the properties of an object.
const person = {
  name: "John",
  age: 30,
  country: "USA"
};

for (let key in person) { // Iterates over each property in the person object.
  console.log(key + ": " + person[key]); // Prints the key and its corresponding value.
}
// Output: 
// name: John
// age: 30
// country: USA

// Example 2: A for...in loop to iterate over the elements of an array.
const colors = ["red", "blue", "green", "yellow"];

for (let index in colors) { // Iterates over each index in the colors array.
  console.log(index + ": " + colors[index]); // Prints the index and the corresponding value.
}
// Output: 
// 0: red
// 1: blue
// 2: green
// 3: yellow


// ========================== FOR...OF LOOP ==========================
// The for...of loop is used to iterate over iterable objects (like arrays, strings, etc.) and returns the values directly.
// Syntax: for (let value of iterable) { code }

console.log("==== FOR...OF LOOP ====");

// Example 1: A for...of loop to iterate over an array and print the values.
const numbers = [10, 20, 30, 40];

for (let value of numbers) { // Iterates over each value in the numbers array.
  console.log(value); // Prints each value: 10, 20, 30, 40.
}

// Example 2: A for...of loop to iterate over a string and print each character.
let str = "hello";

for (let char of str) { // Iterates over each character in the string.
  console.log(char); // Prints each character: h, e, l, l, o.
}


// ========================== NESTED LOOPS ==========================
// Nested loops are loops inside another loop. They are useful for working with multi-dimensional arrays or complex conditions.

console.log("==== NESTED LOOPS ====");

// Example 1: A nested for loop that prints a multiplication table.
let n = 3;
for (let i = 1; i <= n; i++) { // Outer loop for rows.
  for (let j = 1; j <= n; j++) { // Inner loop for columns.
    console.log(`${i} * ${j} = ${i * j}`); // Prints the multiplication of i and j.
  }
}

// Example 2: A nested for loop that iterates over a 2D array.
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) { // Outer loop for rows.
  for (let j = 0; j < matrix[i].length; j++) { // Inner loop for columns.
    console.log(matrix[i][j]); // Prints each element of the 2D array.
  }
}

// Output: 
// 1 2 3
// 4 5 6
// 7 8 9


// ========================== BREAK AND CONTINUE ==========================
// The break statement is used to exit a loop early.
// The continue statement is used to skip the current iteration and move to the next iteration of the loop.

console.log("==== BREAK AND CONTINUE ====");

// Example 1: Using break to stop the loop when a condition is met.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Stops the loop when i is 5.
  }
  console.log(i); // Prints numbers from 0 to 4, then exits the loop when i is 5.
}

// Example 2: Using continue to skip the current iteration.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Skips the iteration when i is 5.
  }
  console.log(i); // Prints numbers from 0 to 9, but skips 5.
}
