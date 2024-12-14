// ---------- CALLBACK HELL ----------

// Callback Hell refers to deeply nested callbacks that are used to handle asynchronous tasks sequentially.
// The issue arises when multiple tasks depend on the result of previous tasks, leading to code that's hard to read, debug, and maintain.

// Another name for Callback Hell is "Pyramid of Doom" because of the triangular, deeply-indented structure of nested code.

// Function to simulate asynchronous data fetching
function getData(dataId, getDataNext) {
    setTimeout(() => {
        console.log("DATA = ", dataId); // Logs the current dataId to the console.

        // Check if the `getDataNext` callback function is provided.
        if (getDataNext) { 
            // If `getDataNext` exists, execute it to trigger the next operation.
            // Without this condition, the code will throw an error if `getDataNext` is undefined or null.
            getDataNext();
        }
    }, 2000); // Simulates a delay of 2 seconds before logging data.
}

// Explanation of the condition:
// If we don't use `if(getDataNext)` and `getDataNext` is undefined, 
// calling it directly will throw a "TypeError: getDataNext is not a function".
// This happens because JavaScript tries to execute a function on an invalid value (null/undefined).

// ---------- EXAMPLE OF CALLBACK HELL ----------

// Here we are nesting callbacks to fetch data sequentially.
getData(1, () => {
    // First task is completed; now proceed to the next.
    getData(2, () => {
        // Second task is completed; now proceed to the third.
        getData(3, () => {
            // Third task is completed; now proceed to the fourth.
            getData(4); // No callback is provided here, so no further nesting occurs.
        });
    });
});

// ---------- WHY THIS STRUCTURE IS A PROBLEM ----------
// 1. Poor readability: The code becomes harder to understand as it grows deeper.
// 2. Debugging issues: Identifying where an error occurs is challenging in deeply nested callbacks.
// 3. Maintenance challenges: Adding or modifying tasks increases complexity and risk of errors.
// 4. Error handling: Managing errors across multiple levels of callbacks is cumbersome.

// ---------- COMMON MISTAKE ----------
// Writing `getData(1, getData(2));`
// This is incorrect because `getData(2)` is executed immediately, 
// rather than being passed as a callback function.
// Always pass the function reference without parentheses when using callbacks.

// ---------- CALLBACK HELL EXAMPLE 2 ----------

// Simulating a more complex scenario involving a sequence of tasks:
// e.g., Fetching a user, then their posts, and then comments for a specific post.

function fetchUser(userId, callback) {
    setTimeout(() => {
        console.log(`User with ID ${userId} fetched.`);
        callback();
    }, 1000); // Simulates a 1-second delay
}

function fetchPosts(userId, callback) {
    setTimeout(() => {
        console.log(`Posts for User ID ${userId} fetched.`);
        callback();
    }, 2000); // Simulates a 2-second delay
}

function fetchComments(postId, callback) {
    setTimeout(() => {
        console.log(`Comments for Post ID ${postId} fetched.`);
        callback();
    }, 1500); // Simulates a 1.5-second delay
}

// Nested callbacks creating Callback Hell:
fetchUser(1, () => {
    // First task: Fetch user data
    fetchPosts(1, () => {
        // Second task: Fetch posts after user data is fetched
        fetchComments(101, () => {
            // Third task: Fetch comments after posts are fetched
            console.log("Fetched all required data!");
        });
    });
});

// ---------- CALLBACK HELL EXPLANATION ----------
// In the above example:
// 1. Each task depends on the previous task's completion, leading to deeply nested functions.
// 2. Adding or modifying any step in this flow is cumbersome because of how dependent the tasks are on each other.
// 3. Managing errors (e.g., what happens if "fetchUser" fails?) becomes increasingly difficult as the code grows.
// 4. Readability suffers because the logic becomes buried in nested levels of code.

// ---------- SOLUTIONS TO CALLBACK HELL ----------
// To improve the code structure, we can use:
// 1. **Promises** to flatten the code and chain tasks in a more readable way.
// 2. **Async/Await** to write asynchronous code in a synchronous style.
// These techniques will make the code easier to read, debug, and maintain.
