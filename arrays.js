let marks = [88,99,44,55,67]

console.log(marks) 

console.log(marks.length) 

let hero = ["salman " , "sahruk", "amir" ]
console.log(hero)
console.log(hero.length)  
console.log(typeof marks) // in  js araay is a type of object
console.log(typeof hero) 



  for(let value of marks){   //for-of loop for iteration over arrays and strings
    console.log(value) 
  }

marks[2] = 66;   //arrays are mutable
console.log(marks[2])


console.log(marks[5])  // will give undefined as there is no value in that posoition 


for(let i  = 0; i<hero.length ; i++){
    console.log(hero[i].toUpperCase());
}


hero.push("saktiman") // push add in end of the original array
console.log(hero);

let deletedValue = hero.pop(); //deletes the last value of the array and returns the value 
console.log(deletedValue);
console.log(hero);


console.log(hero);
console.log(hero.toString()); // makes a string of the array but dosent change the original array
console.log(hero)

let indianhero = ["Bahubali" , "hanuman", "me", "You"]

let newAarray = marks.concat(hero,indianhero);
console.log(newAarray);   //concats two arrays and forms a new array but dosent affect the original arrays


marks.unshift(55)//adds element to the start
console.log(marks)


console.log(marks.shift()); // delets from start and returns
console.log(marks)


console.log(indianhero.slice(0, 2)); //returns a peice of the array. dosent change the original array
console.log(indianhero);

 //splice 

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
