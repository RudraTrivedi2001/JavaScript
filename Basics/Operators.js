/* Arithmetic operators */
// Used for basic mathematical operations.
let a = 10; // Declaring a variable 'a' with a value of 10.
let b = 4;  // Declaring a variable 'b' with a value of 4.

console.log(a + b); // Addition: Adds 'a' and 'b', prints 14.
console.log(a - b); // Subtraction: Subtracts 'b' from 'a', prints 6.
console.log(a * b); // Multiplication: Multiplies 'a' and 'b', prints 40.
console.log(a ** b); // Exponentiation: Raises 'a' to the power of 'b', prints 10000.
console.log(a / b); // Division: Divides 'a' by 'b', prints 2.5.
console.log(a % b); // Modulus: Returns the remainder of 'a' divided by 'b', prints 2.

/* Unary operators */
// Perform operations on a single operand.
console.log("a = ", a, "& b = ", b);

// Post-increment: Increments 'a' by 1 but returns the original value before increment.
a++; // Increments 'a' to 11.
console.log(a); // Prints the updated value of 'a', 11.

a--; // Decrements 'a' back to 10.
console.log(a); // Prints the updated value of 'a', 10.

// Post-increment on 'b': Returns the original value before increment, then increments 'b'.
console.log("b++ = ", b++); // Prints the original value of 'b' (4), then increments it to 5.
console.log("b = ", b); // Prints the updated value of 'b', which is 5.

// Pre-increment: Increments 'c' by 1 before returning the value.
console.log("++c = ", ++c); // Prints the incremented value of 'c', which is 3.
console.log("c = ", c); // Prints the updated value of 'c', 3.

/* Assignment operators */
// Used to assign values to variables in various ways.
a = 10; // Resetting 'a' to 10.
b = 2;  // Resetting 'b' to 2.

console.log(a += b); // Addition assignment: a = a + b, prints 12.
console.log(a -= b); // Subtraction assignment: a = a - b, prints 10.
console.log(a *= b); // Multiplication assignment: a = a * b, prints 20.
console.log(a /= b); // Division assignment: a = a / b, prints 10.
console.log(a **= b); // Exponentiation assignment: a = a ** b, prints 100.

/* Comparison operators */
// Used to compare two values and return a boolean result (true or false).
let c = "2"; // 'c' is a string with value "2".

console.log(a == b); // '==' checks equality of values, prints false because 100 (a) is not equal to 2 (b).
console.log(b == c); // '==' checks equality of values without considering type, prints true (2 is equal to "2").
console.log(b === c); // '===' checks both value and type equality, prints false because 2 is a number and "2" is a string.
console.log(b !== c); // '!==': checks if values are not equal or types are different, prints true because 2 (number) is not equal to "2" (string).

/* Ternary operator */
// The ternary operator is a shorthand for an if-else statement.
// Syntax: condition ? value_if_true : value_if_false;
let age = 18;
let isAdult = (age >= 18) ? "Adult" : "Minor"; // If age is 18 or more, it's "Adult", otherwise "Minor".
console.log(isAdult); // Prints "Adult" because age is 18.
