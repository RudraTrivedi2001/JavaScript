console.log("Hello");
let name = "Aniruddha";    //values can be udated but cant be redeclared
let totalPrice = 22;
console.log(name);


var age = 2;
var age = 33;    //var can be redeclared and updated 
console.log(age);

const area  = 33; //cant be redeclared and updated
console.log(area);

{
    let a = 10;
    console.log(a);
}
{
    let a =100;
    console.log(a);
}
 

const student = {
    fullName : "Aniruddha",
    age : 23,
    cgpa : 8.9,
    isPass : true

}
student["age"]  = student["age"] + 1;  //this is how you update a value inside a object
 console.log(student);

 student["name"]  = "Ram"
console.log(student.name);
console.log(student["cgpa"]);


const pen = {
    name : "Parker Jotter Standard Ct Ball Pen (Black)",
    ratings : 7002,
    isDeal : true,
    price : 270,
    offer : 5
}
console.log(pen);