/* Array Basics */
let marks = [88, 99, 44, 55, 67]; // Declaring an array 'marks' with 5 elements.
console.log(marks); // Prints the 'marks' array to the console.
console.log(marks.length); // Prints the length of the array (number of elements) to the console.

let hero = ["salman", "sahruk", "amir"]; // Declaring an array 'hero' with names of actors.
console.log(hero); // Prints the 'hero' array to the console.
console.log(hero.length); // Prints the length of the 'hero' array.
console.log(typeof marks); // Prints 'object' because in JavaScript, arrays are a type of object.
console.log(typeof hero); // Prints 'object' because arrays are also objects in JavaScript.

/* Iterating Over Arrays with for-of Loop */
for (let value of marks) {   // Iterating over each element of the 'marks' array.
    console.log(value); // Prints each value in the 'marks' array one by one.
}

/* Modifying Array Elements */
marks[2] = 66; // Changing the value at index 2 (from 44 to 66).
console.log(marks[2]); // Prints the updated value at index 2, which is 66.

console.log(marks[5]);  // Prints undefined because there is no element at index 5 (out of bounds of the array).

/* Iterating Using for Loop */
for (let i = 0; i < hero.length; i++) {
    console.log(hero[i].toUpperCase()); // Converts each name in 'hero' array to uppercase and prints it.
}

/* Adding and Removing Elements in Arrays */
hero.push("saktiman"); // Adds "saktiman" at the end of the 'hero' array.
console.log(hero); // Prints the updated 'hero' array.

let deletedValue = hero.pop(); // Removes the last element from the 'hero' array and stores it in 'deletedValue'.
console.log(deletedValue); // Prints the deleted element ('saktiman').
console.log(hero); // Prints the 'hero' array after removal of the last element.

/* Array Methods */
console.log(hero); 
console.log(hero.toString()); // Converts the 'hero' array into a string, but does not modify the original array.
console.log(hero); // Prints the 'hero' array after calling toString() (remains unchanged).

let indianhero = ["Bahubali", "hanuman", "me", "You"]; // Declaring a new array 'indianhero'.
let newArray = marks.concat(hero, indianhero); // Combines 'marks', 'hero', and 'indianhero' into a new array 'newArray'.
console.log(newArray); // Prints the concatenated array 'newArray'.

/* Adding and Removing from the Start of Arrays */
marks.unshift(55); // Adds 55 at the beginning of the 'marks' array.
console.log(marks); // Prints the updated 'marks' array.

console.log(marks.shift()); // Removes and returns the first element of the 'marks' array (55).
console.log(marks); // Prints the 'marks' array after removing the first element.

/* Slicing Arrays (Extracting Subarrays) */
console.log(indianhero.slice(0, 2)); // Extracts elements from index 0 to 2 (excluding 2) and prints ['Bahubali', 'hanuman'].
console.log(indianhero); // Prints the original 'indianhero' array (unchanged).

/* Splice - Modifying Arrays by Removing and Inserting Elements */
// Initial array
let arr = [1, 2, 3, 4, 6, 7, 8, 9, 5, 4, 3, 33];
console.log(arr); // Outputs: [1, 2, 3, 4, 6, 7, 8, 9, 5, 4, 3, 33]

// Using splice to remove and replace elements
arr.splice(3, 3, 0, 101, 102);
// Parameters for splice:
// 1st parameter (3) -> The starting index (from where to begin modifying the array)
// 2nd parameter (3) -> The number of elements to remove starting from the index
// 3rd, 4th, 5th parameters (0, 101, 102) -> Elements to insert at the starting index

console.log(arr); // Outputs: [1, 2, 3, 0, 101, 102, 7, 8, 9, 5, 4, 3, 33]
// The elements at index 3, 4, and 5 (i.e., 4, 6, 7) were removed, and [0, 101, 102] were inserted.


// Using splice to add elements without removing any
arr.splice(2, 0, 107, 109);
// Parameters for splice:
// 1st parameter (2) -> The index where new elements should be added
// 2nd parameter (0) -> 0 means no elements will be removed
// 3rd, 4th parameters (107, 109) -> Elements to add at index 2

console.log(arr); // Outputs: [1, 2, 107, 109, 3, 0, 101, 102, 7, 8, 9, 5, 4, 3, 33]
// The elements 107 and 109 were inserted at index 2 without removing any elements.


// Using splice to delete elements
arr.splice(2, 2);
// Parameters for splice:
// 1st parameter (2) -> The starting index (where deletion should start)
// 2nd parameter (2) -> The number of elements to delete

console.log(arr); // Outputs: [1, 2, 0, 101, 102, 7, 8, 9, 5, 4, 3, 33]
// The elements at index 2 and 3 (i.e., 107 and 109) were deleted.


// Using splice to replace elements
arr.splice(1, 1, 9990);
// Parameters for splice:
// 1st parameter (1) -> The index of the element to start replacing
// 2nd parameter (1) -> The number of elements to remove (in this case, just 1 element will be removed)
// 3rd parameter (9990) -> The new element that will replace the removed element

console.log(arr); // Outputs: [1, 9990, 0, 101, 102, 7, 8, 9, 5, 4, 3, 33]
// The element at index 1 (i.e., 2) was removed, and the value 9990 was inserted in its place.
