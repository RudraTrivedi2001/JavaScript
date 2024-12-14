// ---------- CALLBACK FUNCTIONS ----------

// Callback functions are passed as arguments to other functions and executed later.
// This is useful for handling tasks like asynchronous operations or reusing logic.

// Function to calculate the sum of two numbers
function sum(a, b) {
    console.log("sum = ", a + b); // This prints the sum of two numbers
}

// Function that accepts two numbers and a callback function
function calc(a, b, sumCallback) {
    // Execute the callback function with `a` and `b` as arguments
    sumCallback(a, b);
}

// Call the `calc` function with the `sum` function as a callback
// The `sum` function is passed without parentheses, meaning it's not executed immediately.
calc(2, 3, sum); 
// Output: sum = 5


// ---------- ARROW FUNCTION AS A CALLBACK ----------

// Another example of a callback, this time using an arrow function to perform multiplication
function multi(a, b, multiCallback) {
    // Execute the callback function passed as `multiCallback`
    multiCallback(a, b);
}

// Pass an arrow function as a callback to calculate multiplication
multi(2, 3, (a, b) => {
    console.log("multiplication =", a * b); 
});
// Output: multiplication = 6


// ---------- SYNCHRONOUS CODE ----------

// Synchronous code executes line by line in the order it appears.
console.log('First');
console.log('Second');
console.log('Third');
// Output:
// First
// Second
// Third

// ---------- ASYNCHRONOUS CODE ----------

// Asynchronous code doesn't block the execution of other tasks.
// It allows other operations to continue while waiting for a task to complete.

// Example: Using `setTimeout` to introduce a delay

// Function to demonstrate asynchronous behavior
function hello() {
    console.log("Hello"); // Prints "Hello" after a 4-second delay
}

// Use `setTimeout` to call the `hello` function after 4000 milliseconds (4 seconds)
setTimeout(hello, 4000); 
// Output (after 4 seconds): Hello

// Using an arrow function inside `setTimeout`:
setTimeout(() => {
    console.log("Aniruddha Trivedi is using This PC");
}, 4000); 
// Output (after 4 seconds): Aniruddha Trivedi is using This PC

// NOTE: `setTimeout` is an example of a callback function because it accepts another function to execute after the specified delay.

