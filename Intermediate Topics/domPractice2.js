//Create a new button element. give it a text click me background color of red and text color of while. insert the button as the first element inside the body tag

let newButton = document.createElement("button");

newButton.innerText = "clik me";

newButton.style.backgroundColor = "red"
newButton.style.color = "white"

newButton.style.margin = "5px"
let body = document.querySelector("body")



// body.innerHTML = "<div>new div</div>"
// let div = document.querySelector("div");
// div.setAttribute("id", "newId")
// div.style.height = "300px"
// div.style.backgroundColor = "yellow"
// div.style.width = "300px"

body.prepend(newButton);



//create a <p> tag in html, give it a class and some styling
//now create a new class in css and try to append this class to the <p> element. 
//did you notice how you overwrite the class name when you add a new onw? solve this problem using class list



//classList In JavaScript, classList is a property available on elements that provides an easy way to work with the classes of an HTML element. It allows you to add, remove, toggle, and check the presence of CSS classes on an element without directly manipulating the className property.
let para = document.querySelector(".para")

para.classList.add("newclass")   // added a new class

//para.classList.remove("newclass") to remove the class