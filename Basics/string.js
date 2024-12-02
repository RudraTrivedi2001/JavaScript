// template literals: Allows embedding variables or expressions directly inside strings using `${}` syntax.
let example = `This is a template literal`; // Template literals are enclosed in backticks (` `).
console.log(example); // Prints the value of 'example' to the console.
console.log(typeof example); // Prints the type of 'example', which is 'string'.

let a = 20; // Declaring a variable 'a' with a value of 20.
let b = 30; // Declaring a variable 'b' with a value of 30.

// string interpolation: Embeds variables or expressions inside a string.
console.log(`a = ${a} and b = ${b}`); // Outputs: a = 20 and b = 30

// escape characters: Special characters to represent certain actions within strings.
console.log("hello \n Welcome"); // \n creates a newline, printing 'hello' on one line and 'Welcome' on the next.
console.log("hello \t Welcome"); // \t creates a tab space between 'hello' and 'Welcome'.

// string methods: Functions available to manipulate strings.
let str = "abc"; // String 'abc'.
let newStr = str.toUpperCase(); // Converts 'str' to uppercase ('ABC').
let newStrLower = str.toUpperCase(); // Converts 'str' to uppercase again, stored in newStrLower.
console.log(newStr); // Prints 'ABC'.
console.log(newStrLower); // Prints 'ABC'.

let s = "     fdf   df    "; // String with extra spaces.
let newS = s.trim(); // Removes whitespace from the start and end of the string.
console.log(newS); // Prints 'fdf   df' (no leading/trailing spaces).

let string = "abcde"; // String 'abcde'.
console.log(string.slice(1, 3)); // slice(start, end): Extracts part of a string. Prints 'bc' (index 1 to 2).

console.log(str.concat(string)); // concat() joins two strings. Prints 'abcabcde'.

console.log(string.replace("c", "u")); // replace(oldChar, newChar): Replaces the first occurrence of 'c' with 'u'. Prints 'abude'.

console.log(string.charAt(3)); // charAt(index): Returns the character at index 3 ('d').
