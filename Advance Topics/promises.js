
// ---------- WHAT ARE PROMISES ----------
// Promises are objects in JavaScript used to handle asynchronous operations.
// They act as placeholders for future values (e.g., data from an API or a file).
// A Promise has three states:
// 1. Pending: The operation has started but is not yet completed.
// 2. Resolved: The operation was successful, and the promise is fulfilled.
// 3. Rejected: The operation failed, and the promise is rejected.

// ---------- WHY PROMISES ARE USED ----------
// Promises make it easier to manage asynchronous operations, avoiding deeply nested callbacks (callback hell).
// They allow chaining `.then()` for successful results and `.catch()` for error handling, making code cleaner and more readable.

// ---------- CREATING A SIMPLE PROMISE ----------

let simplePromise = new Promise((resolve, reject) => {
    console.log("This is a simple promise."); // This will log immediately.
    // The promise is now in a 'pending' state.
    resolve("Promise Resolved!"); // This changes the state to 'resolved'.
    // If you wanted to reject the promise, use `reject("Some error occurred!")`.
});

// ---------- HOW TO USE A PROMISE ----------
// Using .then() to handle a resolved promise:
simplePromise.then((message) => {
    console.log(message); // Output: Promise Resolved!
});

// ---------- EXAMPLES OF PROMISE STATES ----------

// Example 1: A pending promise (No resolve or reject called)
let promise1 = new Promise((resolve, reject) => {
    console.log("Promise 1 is created but neither resolved nor rejected.");
    // No resolve or reject means the promise remains 'pending'.
});
console.log("State of promise1: Pending");

// Example 2: A resolved promise
let promise2 = new Promise((resolve, reject) => {
    console.log("Promise 2 is created.");
    resolve("Promise 2 Resolved!"); // Sets the state to 'fulfilled'.
});
promise2.then((result) => {
    console.log(result); // Output: Promise 2 Resolved!
});

// Example 3: A rejected promise
let promise3 = new Promise((resolve, reject) => {
    console.log("Promise 3 is created.");
    reject("Promise 3 Rejected!"); // Sets the state to 'rejected'.
});
promise3.catch((error) => {
    console.log(error); // Output: Promise 3 Rejected!
});

// ---------- CREATING PROMISES IN FUNCTIONS ----------
// Typically, promises are returned by functions (e.g., fetching data from an API).

function getData(dataId) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching data for ID: ${dataId}`);
        setTimeout(() => {
            // Simulating an API call with a delay of 2 seconds
            if (dataId) {
                console.log(`Data for ID: ${dataId} fetched successfully.`);
                resolve(`Success: Data ID = ${dataId}`); // Resolves the promise if the data is valid
            } else {
                reject("Error: Invalid data ID"); // Rejects the promise if dataId is invalid
            }
        }, 2000);
    });
}

// Example 1: Using .then() for success and .catch() for errors
getData(1)
    .then((result) => {
        console.log(result); // Output: Success: Data ID = 1
    })
    .catch((error) => {
        console.log(error); // If dataId was invalid, this would handle the error
    });

// Example 2: Handling rejected promises
getData(null) // Passing an invalid ID
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error); // Output: Error: Invalid data ID
    });



// ---------- ANOTHER EXAMPLE WITH .THEN() AND .CATCH() ----------

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("Executing getPromise...");
        // Simulate a successful operation
        resolve("Success: Promise fulfilled!");
    });
};

getPromise()
    .then((result) => {
        console.log(result); // Output: Success: Promise fulfilled!
    })
    .catch((error) => {
        console.log(error); // This won't execute as the promise is resolved
    });

const getPromiseWithError = () => {
    return new Promise((resolve, reject) => {
        console.log("Executing getPromiseWithError...");
        // Simulate a failed operation
        reject("Error: Promise rejected!");
    });
};

getPromiseWithError()
    .then((result) => {
        console.log(result); // This won't execute as the promise is rejected
    })
    .catch((error) => {
        console.log(error); // Output: Error: Promise rejected!
    });

// ---------- SUMMARY ----------
// - Promises represent the eventual completion (or failure) of an asynchronous operation.
// - Use `.then()` to handle success and `.catch()` to handle errors.
// - They help avoid callback hell and improve the readability of asynchronous code.
// - Chaining allows sequential handling of multiple asynchronous tasks.

