//append "from apana college students to h2 using js"

let str = document.querySelector("h2");

//str.append(" from apna college students")  // 1st method
 
str.innerText = str.innerText + " from apna college students" //2nd method


//create 3 divs with common class name - "box". Access them and add some unique text to each of them

let div = document.querySelectorAll(".box");

//this will return nodelist of divs which  will act as array
let idx = 1;
for ( div of div) {

    div.innerText = `new value = ${idx}`;
    idx++;
    
}

// div[0].innerText = "new unique value 1";
// div[1].innerText = "new unique value 2";
// div[2].innerText = "new unique value 3";