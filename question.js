// Apna college Questions 

//Usename
let userFullName = prompt("Type your full name without spaces")
userFullName = userFullName.toLocaleLowerCase();


let username = "@" + userFullName  + userFullName.length ;
console.log(` your username is ${username}`);



// arrays average marks of class

let marks = [85, 97, 44, 37,76,60];
let sumMarks  = 0;
for(let i = 0; i< marks.length ; i++){

    sumMarks = marks[i] + sumMarks;


}
let avg = sumMarks/ marks.length;
console.log(`averasge of the class is ${avg} `);


//replce values of a array after 10percent off

let price = [250, 645, 300,900, 50];
for(let val of price){
     val = val - (val*0.1);     
     console.log(val)
}



