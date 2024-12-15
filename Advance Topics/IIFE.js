/**********************
 * ASYNC-AWAIT WITH IIFE (Immediately Invoked Function Expression)
 **********************/

// What are IIFE and why they are used?
// IIFE stands for Immediately Invoked Function Expression. 
// It is a function expression that is executed immediately after it is defined.
// It's often used to execute code that only needs to run once or for creating a private scope for variables.

function getData(dataId) {
    // This function simulates asynchronous data fetching. 
    // It returns a promise that resolves after a delay, to mimic an API call or database query.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`DATA = ${dataId}`); // Simulating data fetching for the given dataId.

            // If dataId is truthy, resolve the promise with success message, else reject with an error message.
            if (dataId) {
                resolve(`Success: Fetched data with ID ${dataId}`);
            } else {
                reject("Error: Invalid dataId provided");
            }
        }, 3000); // Simulating a 3-second delay before resolving the promise
    });
}

// Using IIFE to handle asynchronous data fetching
// IIFE allows us to run the async code immediately without needing to define a separate function.

(async function fetchDataUsingIIFE() {
    console.log("Starting IIFE to fetch data...");

    try {
        // Sequentially fetch multiple data using async-await.
        const result1 = await getData(1); // Wait for the first data fetch to complete
        console.log(result1); // Output the result

        const result2 = await getData(2); // Wait for the second data fetch to complete
        console.log(result2); // Output the result

        const result3 = await getData(3); // Wait for the third data fetch to complete
        console.log(result3); // Output the result

        console.log("IIFE execution completed: All data fetched successfully!");
    } catch (error) {
        // Catch any error that occurs during the data fetching process and log it.
        console.error("Error in IIFE:", error);
    }
})(); // Immediately invokes the function to start fetching data
