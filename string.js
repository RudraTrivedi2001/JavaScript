// template literals
let example = `This a template literal `;
console.log( example)
console.log(typeof example)

let a =  20;
let b = 30;

//string interpolation
console.log(`a = ${a} and b = ${b}`);


//escape characters
console.log("hello \n Welcome");
console.log("hello \t Welcome");

// string methods
let str = "abc"
let newStr = str.toUpperCase();
let newStrLower = str.toUpperCase();
console.log(newStr);
console.log(newStrLower);

let s = "     fdf   df    " //removes whitespaces from start and end only
let newS = s.trim();
console.log(newS);


let string = "abcde"
console.log(string.slice(1,3)); //ending index is not included


console.log(str.concat(string)); //concatination

console.log(string.replace("c","u"));  // c will be replaced by u

console.log(string.charAt(3));

