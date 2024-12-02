// Initial array with numbers
let arr = [1, 2, 3, 4, 5, 56];

// Using forEach to log each element (value) in the array
arr.forEach(function printVal(val) {
    // The function 'printVal' is called for each value in the array
    console.log(val); // It prints the value at each index
});

// Using an arrow function as a callback in forEach
arr.forEach((val, index, arr) => {
    // The arrow function takes three arguments:
    // val - the value at each index of the array
    // index - the index (position) of that value in the array
    // arr - the entire array
    console.log("Value = ", val, " at index =", index, arr); // Logs the value, its index, and the entire array
});

// ---- Higher Order Functions ----
// Higher-order functions are functions that take other functions as arguments or return a function.
// In this case, 'forEach' is a higher-order function because it takes another function (callback) as an argument.

// ---- Task: Square each number in an array using forEach ----
let newArr = [];
let size = prompt("Type the size of the array"); // Asking the user for the array size

// Loop to take input for each element in the array
for (let index = 0; index < size; index++) {
    let input = prompt("Value"); // Prompt the user for each value
    newArr[index] = Number(input); // Convert the input to a number and store it in the array
}

// Log the array after input
console.log("Your array", newArr);

// Now, use forEach to square each number in the array
newArr.forEach((val, index) => {
    newArr[index] = val * val;  // Square each value and store it back in the array
});

// Log the array after squaring the values
console.log("Square array ", newArr);

// ---- Another Example: Using an Arrow Function Callback ----
let nums = [60, 30, 60];

// Defining a function to calculate the square of a number
let calcSquare = (num) => {
    console.log(num * num); // This will print the square of the number
};

// Using forEach to apply 'calcSquare' to each number in the array 'nums'
nums.forEach(calcSquare);  // This will log the square of each element in 'nums'

// ---- map() Method ----
// map() is used to create a new array by transforming each element in the array using a function.
// Unlike forEach, map returns a new array without modifying the original array.

// Let's use map() to double each number in the 'nums' array
let doubledArray = nums.map((val) => {
    return val * 2;  // Multiply each number by 2 and return the result
});

// Log the new array with doubled values
console.log(doubledArray);

// ---- Difference Between forEach and map ----
// forEach: Executes the callback on each element of the array but doesn't return anything.
// map: Transforms each element of the array and returns a new array with the transformed values.


// ---- filter() Method ----
// filter() creates a new array that only includes the elements that satisfy a condition.
// For example, you could use filter to extract only the even numbers from an array.

let numbers = [2, 4, 5, 6, 7, 8, 3];

// Filtering even numbers from the 'numbers' array
let evenNumbers = numbers.filter((val) => {
    return val % 2 === 0;  // Condition: only keep even numbers
});

// Log the array of even numbers
console.log(evenNumbers);

// Filtering numbers greater than 4
let greaterThanFour = numbers.filter((val) => {
    return val > 4;  // Condition: only keep numbers greater than 4
});

// Log the array of numbers greater than 4
console.log(greaterThanFour);


// ---- reduce() Method ----
// reduce() is used to reduce an array to a single value by applying a function that combines each element.
// For example, you could use reduce to sum all elements in the array.

let numbersToSum = [1, 2, 3, 4, 5];

// Using reduce to calculate the sum of all numbers in the array
let sum = numbersToSum.reduce((accumulator, currentValue) => {
    // 'accumulator' holds the accumulated result, 'currentValue' is the current element in the array
    return accumulator + currentValue;  // Add the current value to the accumulator
}, 0);  // The second argument (0) is the initial value of the accumulator

// Log the sum of the numbers
console.log(sum);  // Output: 15


//filter  the students that scored more than 90 marks

let marks = [20,40,70,60,99,98,67,92];


let toppers = marks.filter((res) => {
    return res > 90;
})
console.log("Students who scored more than 90:", toppers);

//take n input now amke a aaray and find sum of all no. toill n and find n factorial

let n = prompt("Type the value of n");
n = Number(n); // Convert the input to a number

let arrNumbers = [];

// Populate arrNumbers array with values from 1 to n
for (let i = 1; i <= n; i++) {
    arrNumbers.push(i); // Use push instead of assigning with index
}

// Find the sum of all numbers from 1 to n
let sumOfAll = arrNumbers.reduce((sum, current) => sum + current, 0);
console.log("Sum of all numbers from 1 to", n, ":", sumOfAll);

// Find the factorial of numbers from 1 to n
let factorial = arrNumbers.reduce((fact, current) => fact * current, 1);
console.log("Factorial of numbers from 1 to", n, ":", factorial);

