// Defining an object `student`
const student = { // This is an object with properties and a method.
    fullname: "Aniruddha Trivedi", 
    marks: 65,            
    
    // A method (function inside an object) to print the marks of the student.
    // Here, we use a regular function to correctly bind `this` to the `student` object.
    printMarks: function() {  
        // `this` refers to the object that owns this function, i.e., `student`.
        // Accessing the `marks` property of the `student` object using `this`.
        console.log(this.marks); 
    },
};

// Calling the `printMarks` method of the `student` object.
student.printMarks(); // Output: 65

// ---------- Prototype and `__proto__` Concepts ----------

// Prototypes allow objects to inherit properties or methods from other objects.
// Every object in JavaScript has an internal prototype (`__proto__`) that points to its parent object.
// If an object does not have a certain property or method, JavaScript looks for it in its prototype chain.

// Example: Working with an array and checking its type
let arr = ["apple", "mango", "banana"]; // Defining an array
console.log(typeof(arr)); // Output: 'object' because arrays are special kinds of objects.
arr.push("pineapple");
// The array `arr` has methods like `push`, `pop`, and `length`, which are available due to its prototype.



// ---------- Using Prototypes to Inherit Methods ----------

// Defining an object `employee` with a method `calcTax`.
const employee = {
   calcTax() { // This method calculates the tax.
       console.log("Tax is 10 percent");
   },
};

// Defining another object `karanArjun` with its own properties.
const karanArjun = {
    salary: 50000, // Property for storing salary.
};

// Linking `karanArjun` to `employee` using the `__proto__` property.
// This makes the methods of `employee` available to `karanArjun`.
karanArjun.__proto__ = employee;

// Calling the `calcTax` method using `karanArjun`.
// Since `calcTax` is not directly in `karanArjun`, JavaScript looks in its prototype (`employee`).
console.log("Tax for Karan Arjun is:");
karanArjun.calcTax(); // Output: "Tax is 10 percent"

// Defining another object `karanArjun2` with its own properties and methods.
const karanArjun2 = {
    salary: 6000, // Property for storing salary.

    // Defining a method `calcTax` specific to `karanArjun2`.
    calcTax() {
        console.log("Tax is 20 percent");
    },
};

// Linking `karanArjun2` to `employee` using the `__proto__` property.
karanArjun2.__proto__ = employee;

// Calling the `calcTax` method using `karanArjun2`.
// Since `karanArjun2` has its own `calcTax` method, it takes priority over the method in its prototype.
console.log("Tax for Karan Arjun 2 is:");
karanArjun2.calcTax(); // Output: "Tax is 20 percent"

// ---------- Key Points to Remember ----------
// 1. Prototypes are the mechanism by which JavaScript objects inherit features from one another.
// 2. The `__proto__` property links an object to its prototype.
// 3. If an object does not have a property or method, JavaScript looks for it in the prototype chain.
// 4. If an object has a property or method with the same name as in its prototype, the object's own property/method is used (priority is given to the object itself).
