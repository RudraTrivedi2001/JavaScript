// ---------- CLASSES IN JAVASCRIPT ----------

// A class is like a blueprint for creating objects. 
// It defines properties (variables) and methods (functions) that objects created from it will have.

// Example: Defining a class `ToyotaCar`
class ToyotaCar {

    // The `constructor` method is a special method in a class.
    // It is automatically called when a new object is created using the `new` keyword.
    // Its purpose is to initialize properties of the object.
    constructor(brand) { 
        console.log("Object is being created"); // This runs whenever an object is created.
        this.brand = brand; // Initializing the `brand` property of the object.
    }

    // Defining methods inside the class
    start() {
        console.log("start"); // This method can be called on objects created from the `ToyotaCar` class.
    }

    stop() {
        console.log("stop");
    }
}

// Creating an object from the `ToyotaCar` class
let fortuner = new ToyotaCar("Fortuner"); // Passes "Fortuner" as the brand name.
console.log(fortuner); // Output: ToyotaCar { brand: 'Fortuner' }

// Creating another object without passing a value to the constructor
let swift = new ToyotaCar(); // No error, but the `brand` property will be `undefined`.
console.log(swift); // Output: ToyotaCar { brand: undefined }

// Assigning a value to the `brand` property after object creation
swift.brand = "Swift";
console.log(swift); // Output: ToyotaCar { brand: 'Swift' }

// ---------- CLASSES VS OBJECTS IN JAVASCRIPT ----------

// 1. A class is a **template or blueprint** to create objects.
// 2. An object is an **instance** of a class, meaning it is created based on the blueprint provided by the class.
// 3. Objects are the actual data containers, while classes define the structure and behavior of those objects.

// ---------- INHERITANCE IN JAVASCRIPT ----------

// Inheritance allows one class (child class) to inherit properties and methods from another class (parent class).
// In JavaScript, this is done using the `extends` keyword.

class Parent {

    // Method in the parent class
    hello() {
        console.log("Hello from Parent");
    }
}

// The `Child` class extends the `Parent` class, inheriting its properties and methods.
class Child extends Parent {}

// Creating an object of the `Child` class
let c1 = new Child();
c1.hello(); // Output: "Hello from Parent"

// ---------- METHOD OVERRIDING IN JAVASCRIPT ----------

// If a child class defines a method with the same name as one in the parent class, the child's method is used.
// This is called "method overriding."

class NewChild extends Parent {
    // Overriding the `hello` method
    hello() {
        console.log("New child says hello");
    }
}

// Creating an object of the `NewChild` class
let c2 = new NewChild();
c2.hello(); // Output: "New child says hello"

// ---------- THE `super` KEYWORD ----------

// The `super` keyword is used in a child class to refer to its parent class.
// It can be used to:
// 1. Call the constructor of the parent class (`super()`).
// 2. Access methods or properties of the parent class (`super.method()`).

class Person {
    // Constructor for the `Person` class
    constructor(name) {
        this.species = "Homo sapiens"; // A default property for all `Person` objects.
        this.name = name; // Initializing the `name` property.
    }

    // Method for the `Person` class
    eat() {
        console.log("Eat");
    }

    // Method for the `Person` class
    work() {
        console.log("Work");
    }
}

// The `Engineer` class extends the `Person` class, inheriting its properties and methods.
class Engineer extends Person {
    // Constructor for the `Engineer` class
    constructor(name, branch) {
        super(name); // Calls the constructor of the `Person` class to initialize `name`.
        this.branch = branch; // Adds a new property specific to the `Engineer` class.
    }

    // Overriding the `work` method of the parent class
    work() {
        super.eat(); // Calls the `eat` method from the parent class.
        console.log("Solve problems"); // Adds new functionality specific to `Engineer`.
    }
}

// Creating an object of the `Engineer` class
let engObj = new Engineer("Aniruddha", "B.Tech");
console.log(engObj); // Output: Engineer { species: 'Homo sapiens', name: 'Aniruddha', branch: 'B.Tech' }

// Calling the overridden `work` method
engObj.work(); 
// Output:
// Eat
// Solve problems
