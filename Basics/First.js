console.log("Hello");

let name = "Aniruddha"; // 'let' allows updating values but prevents redeclaration in the same scope.
let totalPrice = 22;
console.log(name);

var age = 2;  // 'var' can be redeclared and updated in the same scope.
var age = 33;
console.log(age);

const area = 33; // 'const' prevents redeclaration and reassignment of the variable.
console.log(area);

{
    let a = 10;
    console.log(a);
}
{
    let a = 100;  // Each block creates a separate scope, so 'a' can be redeclared in different blocks.
    console.log(a);
}

const student = {
    fullName: "Aniruddha",
    age: 23,
    cgpa: 8.9,
    isPass: true
};
student["age"] = student["age"] + 1;  // Object properties can be modified even if the object is declared with 'const'.
console.log(student);

student["name"] = "Ram";  // New properties can be added to an object even when it's declared with 'const'.
console.log(student.name);
console.log(student["cgpa"]);

const pen = {
    name: "Parker Jotter Standard Ct Ball Pen (Black)",
    ratings: 7002,
    isDeal: true,
    price: 270,
    offer: 5
};
console.log(pen);  // Prints the 'pen' object, which contains different properties and values.
