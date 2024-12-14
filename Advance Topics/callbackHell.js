// ---------- CALLBACK HELL EXAMPLE 1 ----------

// Function to simulate asynchronous data fetching
function getData(dataId, getDataNext) {
    setTimeout(() => {
        console.log("DATA = ", dataId); // Logs the current dataId to the console.

        // Check if the `getDataNext` callback function is provided.
        if (getDataNext) {
            // If `getDataNext` exists, execute it to trigger the next operation.
            getDataNext();
        }
    }, 2000); // Simulates a delay of 2 seconds before logging data.
}

// Fetching multiple data sequentially, leading to Callback Hell.
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4, () => {
                console.log("All data fetched!");
            });
        });
    });
});

// ---------- CALLBACK HELL EXAMPLE 2 ----------

// A more complex example involving multiple asynchronous tasks (e.g., fetching user info, posts, and comments)

// Simulating asynchronous operations
function fetchUser(userId, callback) {
    setTimeout(() => {
        console.log(`Fetched User with ID: ${userId}`);
        callback();
    }, 1000);
}

function fetchPosts(userId, callback) {
    setTimeout(() => {
        console.log(`Fetched Posts for User ID: ${userId}`);
        callback();
    }, 2000);
}

function fetchComments(postId, callback) {
    setTimeout(() => {
        console.log(`Fetched Comments for Post ID: ${postId}`);
        callback();
    }, 1500);
}

// Example of Callback Hell: Fetching user, their posts, and comments for a post
fetchUser(1, () => {
    fetchPosts(1, () => {
        fetchComments(101, () => {
            console.log("Fetched all required data!");
        });
    });
});

// ---------- WHY CALLBACK HELL IS A PROBLEM ----------
// In both examples:
// - The tasks are sequential and dependent on the previous task.
// - As the tasks increase, the code becomes deeply nested and harder to manage.
// - Adding new tasks or handling errors makes the code even more complicated.

// ---------- HOW TO AVOID CALLBACK HELL ----------
// Solutions to avoid Callback Hell include:
// 1. **Promises**: Allows chaining of asynchronous tasks to flatten the code structure.
// 2. **Async/Await**: Provides a cleaner and more synchronous-looking approach to handle asynchronous operations.
