/**********************
 * PROMISE CHAINING EXPLAINED
 **********************/

// ---------- WHAT IS PROMISE CHAINING? ----------
// Promise Chaining is the process of linking multiple `.then()` calls to perform sequential asynchronous tasks.
// Each `.then()` call returns a new Promise, enabling us to handle the result of one operation before starting the next.
// It provides a clean and structured way to execute dependent tasks in order without creating deeply nested callbacks.

/**********************
 * EXAMPLE 1: SIMPLE PROMISE CHAINING
 **********************/

// Function `asynch1` simulates an asynchronous task that resolves after 14 seconds
function asynch1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 1 fetched");
            resolve("Success from asynch1"); // Marks the Promise as resolved
        }, 14000); // Simulated delay of 14 seconds
    });
}

// Function `asynch2` simulates another asynchronous task that resolves after 14 seconds
function asynch2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 2 fetched");
            resolve("Success from asynch2"); // Marks the Promise as resolved
        }, 14000); // Simulated delay of 14 seconds
    });
}

// Chaining Promises
asynch1()
    .then((res1) => {
        console.log("Result of asynch1:", res1);
        return asynch2(); // Return the next Promise to chain
    })
    .then((res2) => {
        console.log("Result of asynch2:", res2);
    })
    .catch((err) => {
        console.log("Error occurred:", err); // Handles any error in the chain
    });

/**********************
 * EXAMPLE 2: PROMISE CHAINING WITH DATA FETCHING
 **********************/

// Function `getData` simulates fetching data asynchronously with `dataId`
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetching DATA with ID: ${dataId}`);
            if (dataId) {
                resolve(`Success: Data ${dataId}`); // Resolve if dataId is valid
            } else {
                reject("Error: Provide a valid dataId"); // Reject if dataId is invalid
            }
        }, 3000); // Simulated delay of 3 seconds
    });
}

// Chaining multiple `getData` calls
console.log("Starting data fetching...");

getData(1)
    .then((res1) => {
        console.log("Result 1:", res1);
        console.log("Fetching data 2...");
        return getData(2); // Chain the next data fetch
    })
    .then((res2) => {
        console.log("Result 2:", res2);
        console.log("Fetching data 3...");
        return getData(3); // Chain the next data fetch
    })
    .then((res3) => {
        console.log("Result 3:", res3);
        console.log("Fetching data 4...");
        return getData(4); // Chain the next data fetch
    })
    .then((res4) => {
        console.log("Result 4:", res4);
        console.log("All data fetched successfully!");
    })
    .catch((err) => {
        console.log("Error in data fetching:", err); // Handle errors in any part of the chain
    });

/**********************
 * CORE CONCEPTS HIGHLIGHTED
 **********************/

// 1. **Promise Chaining** allows us to avoid deeply nested `.then()` calls.
// 2. **Returning Promises in `.then()`**: Always return a Promise in `.then()` to continue chaining.
// 3. **Error Handling with `.catch()`**: Errors anywhere in the chain are caught in the `.catch()` block.
// 4. **Sequential Execution**: Promises in the chain execute sequentially, with each task depending on the previous one.

