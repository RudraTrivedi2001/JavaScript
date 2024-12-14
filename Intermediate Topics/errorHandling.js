// ---------- ERROR HANDLING IN JAVASCRIPT ----------

// Error handling ensures that our program can deal with unexpected situations gracefully.
// It prevents the program from crashing and allows us to take appropriate actions, 
// such as showing meaningful error messages or providing fallback solutions.

// The `try...catch...finally` block is the primary mechanism in JavaScript for handling runtime errors.

// Function to demonstrate error handling
function divideNumbers(a, b) {
    try {
        // ---------- TRY BLOCK ----------
        // The `try` block contains the code that we expect might cause an error.
        // If an error occurs, the code inside the `try` block stops running,
        // and the control is passed to the `catch` block.

        // Example of error condition:
        if (b === 0) {
            // ---------- THROW KEYWORD ----------
            // The `throw` statement is used to create a custom error.
            // It stops the current code execution in the `try` block and sends the error
            // to the `catch` block for handling.

            // Why `throw` is used:
            // - To manually trigger an error when we detect an invalid condition.
            // - It allows us to specify a custom error message or even an error object.

            throw new Error("Division by zero is not allowed."); // Custom error message
        }

        // If no error occurs, this code runs:
        let result = a / b; // Perform the division
        console.log(`Result: ${result}`); // Output the result
    } catch (error) {
        // ---------- CATCH BLOCK ----------
        // The `catch` block is executed if an error occurs in the `try` block.
        // It allows us to handle the error gracefully.

        // The `error` object contains details about the error that occurred.
        // `error.message` gives the custom message specified in the `throw` statement.
        console.log(`An error occurred: ${error.message}`);
    } finally {
        // ---------- FINALLY BLOCK ----------
        // The `finally` block is optional and always runs after the `try` or `catch` block.
        // It is typically used for cleanup actions (e.g., closing files or releasing resources)
        // that should happen regardless of whether an error occurred or not.

        console.log("Division operation completed."); // General cleanup message
    }
}

// ---------- TESTING THE FUNCTION ----------

// Case 1: Valid division
divideNumbers(10, 2);
// Output:
// Result: 5
// Division operation completed.

// Explanation:
// - No error occurs because `b` is not zero.
// - The division result is logged from the `try` block.
// - The `finally` block runs after that, printing a completion message.

// Case 2: Division by zero
divideNumbers(10, 0);
// Output:
// An error occurred: Division by zero is not allowed.
// Division operation completed.

// Explanation:
// - The condition `b === 0` triggers the `throw` statement.
// - The control goes directly to the `catch` block, where the error is handled.
// - After the `catch` block, the `finally` block runs, ensuring cleanup actions are executed.
