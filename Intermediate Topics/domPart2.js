// Select the div element using querySelector and store it in a variable
let div = document.querySelector("#box");

// Get the 'id' attribute of the div and log it
let attr = div.getAttribute("id"); // Retrieves the 'id' attribute
console.log(attr); // Output: "box"

// Get the 'name' attribute of the div and log it
console.log(div.getAttribute("name")); // Output: "divJs"

// Select the paragraph element and store it in a variable
let para = document.querySelector(".para");

// Get the 'class' attribute of the paragraph and log it
console.log(para.getAttribute("class")); // Output: "para"

// Set a new class value for the paragraph element
para.setAttribute("class", "newClass"); // Changes the class to "newClass"

// Modify the styles of the div element
div.style.backgroundColor = "green"; // Change background color to green
div.innerText = "hello"; // Change the text inside the div
div.style.fontSize = "13px"; // Add a new CSS style: font size

// Modify the inner HTML of the div to make the text italic
div.innerHTML = "<i>hello</i>"; // Replaces content with italic "hello"

// Insert a new button element into the div
let newButton = document.createElement("button"); // Create a new button
newButton.innerText = "Click Me"; // Set text of the button
newButton.style.margin = "12px"; // Add some margin for spacing
newButton.style.backgroundColor = "red"; // Set background color to red
div.append(newButton); // Append the button to the div

// Prepend a new paragraph inside the div (adds as the first child)
let newP = document.createElement("p"); // Create a new paragraph element
newP.innerHTML = "<i>This is a new paragraph added through JS</i>"; // Set italic text
newP.style.color = "black"; // Set text color to black
div.prepend(newP); // Add paragraph at the start of the div

// Insert a button before the div (outside and above the div)
let btn = document.createElement("button"); // Create a new button
btn.innerText = "Help"; // Set text for the button
btn.style.margin = "12px"; // Add some spacing
div.before(btn); // Insert the button before the div

// Insert a paragraph after the div (outside and below the div)
let p = document.createElement("p"); // Create a new paragraph element
p.innerText = "Second paragraph"; // Set the text
div.after(p); // Add the paragraph after the div

// Remove the first button found in the document (in this case, the "Help" button)
let removeButton = document.querySelector("button"); // Select the first button
removeButton.remove(); // Remove the selected button from the DOM

// Log the content of the entire body
let body = document.querySelector("body");
console.log(body.textContent); // Output all the text in the body
