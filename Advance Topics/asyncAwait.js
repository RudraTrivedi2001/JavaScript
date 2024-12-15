/**********************
 * ASYNC FUNCTIONS AND ASYNC-AWAIT
 **********************/

// ---------- WHAT ARE ASYNC FUNCTIONS? ----------
// 1. An `async` function is a special type of function in JavaScript that always returns a `Promise`.
// 2. Inside an `async` function, you can use the `await` keyword to pause the execution of the function until a Promise is resolved or rejected.
// 3. This allows for cleaner and more readable asynchronous code compared to chaining `.then()` and `.catch()`.

// ---------- WHAT IS ASYNC-AWAIT? ----------
// 1. **`async` keyword**:
//    - Marks a function as asynchronous.
//    - Always returns a `Promise`, even if it doesn’t explicitly return one.
// 2. **`await` keyword**:
//    - Used only inside `async` functions.
//    - Pauses the execution of the function until the Promise is resolved.
//    - Simplifies working with asynchronous code by avoiding Promise chains.

// ---------- CONDITIONS FOR ASYNC-AWAIT ----------
// 1. `await` can only be used inside an `async` function. Using it outside will throw a `SyntaxError`.
// 2. The function you are awaiting must return a Promise; otherwise, it behaves as a normal synchronous function.
// 3. Async-await works well for sequential asynchronous tasks that need to wait for the previous task to complete before moving forward.

/**********************
 * CODE EXAMPLE 1: ASYNC-AWAIT
 **********************/

// Function `hello` simulates an asynchronous operation using a Promise
async function hello() {
    // Returns a Promise that resolves after 3 seconds
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hello");
            resolve(); // Marks the Promise as resolved
        }, 3000); // Simulates a delay of 3 seconds
    });
}

// Function `sayHello` demonstrates async-await in action
async function sayHello() {
    console.log("Starting sayHello function");

    // Waits for the first `hello` call to complete
    await hello();
    console.log("First Hello completed");

    // Waits for the second `hello` call to complete
    await hello(); // Executes only after the first hello finishes
    console.log("Second Hello completed");

    console.log("sayHello function finished");
}

// Invoking the `sayHello` function
sayHello();

/**********************
 * CODE EXAMPLE 2: ASYNC-AWAIT WITH getData()
 **********************/

// Function `getData` simulates fetching data asynchronously
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`DATA = ${dataId}`);
            if (dataId) {
                resolve("Success"); // Resolves the Promise if dataId is valid
            } else {
                reject("Error: Provide a valid dataId"); // Rejects the Promise if dataId is invalid
            }
        }, 3000); // Simulates a delay of 3 seconds
    });
}

// Function `fetchAllData` uses async-await to fetch multiple data sequentially
async function fetchAllData() {
    try {
        console.log("Fetching data 1...");
        await getData(1); // Waits for the first data fetch to complete

        console.log("Fetching data 2...");
        await getData(2); // Waits for the second data fetch to complete

        console.log("Fetching data 3...");
        await getData(3); // Waits for the third data fetch to complete

        console.log("Fetching data 4...");
        await getData(4); // Waits for the fourth data fetch to complete

        console.log("All data fetched successfully!");
    } catch (error) {
        console.error("An error occurred:", error); // Handles any errors during the fetch process
    }
}

// Invoking the `fetchAllData` function
fetchAllData();

/**********************
 * EXPLANATION OF THE CODE
 **********************/

// 1. The `hello` function returns a Promise that resolves after 3 seconds and logs "Hello" to the console.
// 2. The `sayHello` function is declared as `async`, enabling the use of `await` inside it.
// 3. When `sayHello` is executed:
//    - It logs "Starting sayHello function".
//    - Pauses at the first `await hello()` until the Promise returned by `hello` is resolved.
//    - Logs "First Hello completed" and proceeds to the next `await hello()`.
//    - Pauses again until the second `hello` call completes.
//    - Logs "Second Hello completed" and finally logs "sayHello function finished".

// 4. The `fetchAllData` function demonstrates sequential fetching of multiple data using `getData`.
//    - It uses `await` to ensure each fetch completes before starting the next.
//    - Errors are handled using a `try...catch` block for clean error management.

/**********************
 * CORE CONCEPTS HIGHLIGHTED
 **********************/

// 1. **Sequential Execution with `await`**:
//    - The `await` keyword ensures that each asynchronous operation is completed before moving to the next.
//    - This is useful when tasks are dependent on each other.

// 2. **Readable Asynchronous Code**:
//    - Using `async-await` makes the code look like synchronous, top-to-bottom execution, making it easier to read and debug.

// 3. **Error Handling**:
//    - You can use `try...catch` blocks inside `async` functions to handle errors gracefully.



/**********************
 * ASYNC-AWAIT WITH IIFE (Immediately Invoked Function Expression)
 **********************/

