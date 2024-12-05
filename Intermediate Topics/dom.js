// JavaScript code execution can happen before or after the HTML page is fully loaded.
// The following alert will appear immediately when the JavaScript is executed, 
// even before the HTML content is fully loaded. This is because the script is executed as soon as it's encountered in the HTML file.

alert("hello"); // Shows an alert message "hello" when the JavaScript runs

// Q: How many ways can JavaScript be added to an HTML page?
// There are several ways to include JavaScript in an HTML document:
// 1. Inline JavaScript: Inside the <script> tag within the HTML file.
// 2. External JavaScript: Linking to a separate .js file using the <script src="file.js"></script> tag.
// 3. External JavaScript at the end of the body tag (best practice to ensure HTML loads first).

// Q: What is the window object?
// The window object represents the browser's window or tab. It contains properties and methods related to the browser window itself.
// In the browser, the window object is the global object, meaning it's accessible everywhere in your JavaScript code.

console.log("hello"); // Logs "hello" to the browser console.

window.console.log("hello2"); // Another way to log to the console. Here 'window' is the global object, and 'console' is a property of 'window'.

// Q: What is DOM (Document Object Model) and why is it used?
// The DOM is an interface that allows JavaScript to interact with the HTML document.
// It represents the structure of the HTML page as a tree of nodes. 
// Through the DOM, we can access, modify, and manipulate the content and structure of the webpage.

console.dir(document); // Shows all properties and methods of the 'document' object in a structured view.

// Q: What does window.document refer to?
// 'window.document' refers to the same 'document' object that represents the entire HTML content of the page.
// It's a global object available in the window object.

console.log(window.document); // Logs the entire HTML content inside the document object to the console.

// Accessing specific parts of the HTML document using the 'document' object
console.log(document.body); // Logs the body element of the HTML document (everything inside <body> tags)
console.log(document.head); // Logs the head element of the HTML document (everything inside <head> tags)

// DOM Manipulation

// Q: What is DOM manipulation?
// DOM manipulation refers to the process of changing the structure, content, or style of an HTML document dynamically using JavaScript.
// It allows us to modify elements on the page after it has loaded, making the page interactive and responsive.

// Q: Why do we write the script tag just before the ending of the body tag?
// We write the <script> tag just before the closing </body> tag to ensure the HTML content is fully loaded before the JavaScript runs.
// This ensures that any elements (like buttons or divs) that JavaScript might need to interact with are available and not undefined.


// Selecting with ID
let byId = document.getElementById("heading"); // Selects the element with id="heading"
console.log(byId); // Logs the element to the console
console.dir(byId); // Logs a structured view of the element's properties and methods

// Selecting by class name
let byClass = document.getElementsByClassName("HEADING-CLASS"); // Selects elements with class="HEADING-CLASS" (returns an HTMLCollection)
console.dir(byClass); // Logs the HTMLCollection to the console
console.log(byClass); // Logs the HTMLCollection to the console (like an array-like object)

// Selecting by tag name
let byTag = document.getElementsByTagName("p"); // Selects all <p> elements (returns an HTMLCollection)
console.dir(byTag); // Logs the HTMLCollection to the console
console.log(byTag); // Logs the HTMLCollection to the console

// QuerySelector
let element = document.querySelector("p"); // Selects the first <p> element found (returns the first matching element)
let elements = document.querySelectorAll("p"); // Selects all <p> elements (returns a NodeList)
console.dir(element); // Logs the first <p> element's properties and methods
console.log(elements); // Logs all <p> elements as a NodeList

let bynewId = document.querySelector("#heading"); // Selects the first element with id="heading"
console.log(bynewId); // Logs the element with id="heading"

let bynewClass = document.querySelectorAll(".HEADING-CLASS"); // Selects all elements with class="HEADING-CLASS"
console.log(bynewClass); // Logs all elements with class="HEADING-CLASS"

// DOM Manipulation Properties:

// Step 1: Selecting the first `div` element in the DOM
// `querySelector("div")` is a method that returns the first `div` element found in the document.
let div = document.querySelector("div");

// Step 2: Logging the inner HTML of the `div` element
// `innerHTML` property retrieves the entire HTML content of the selected element, including HTML tags and text content.
console.log(div.innerHTML);  
// For example, if the `div` contains `<p>Hello</p>`, this will log: `<p>Hello</p>`.

// Step 3: Logging only the text content of the `div` element
// `innerText` property retrieves only the visible text inside the selected element, excluding any embedded HTML tags.
console.log(div.innerText);  
// If the `div` contains `<p>Hello</p>`, this will log: `Hello`.

// Step 4: Modifying the text content of the `div` element
// By assigning a new string to the `innerText` property, we can dynamically change the text content of the element.
div.innerText = "abcdefg";   
// After this assignment, the `div` will display the text "abcdefg", and any previous content is removed.

// Step 5: Modifying the HTML content of the `div` element
// `innerHTML` allows us to update not just the text, but the complete HTML structure within the element.
div.innerHTML = "<div>inner div</div>";  
// This replaces the original content of the `div` with a new `div` element containing the text "inner div".

// Step 6: Selecting the entire `body` element and logging its text content
// `querySelector("body")` selects the `body` element, which contains all the visible content of the webpage.
let bodycontents = document.querySelector("body");

// Step 7: Logging the text content of the `body` element
// `textContent` returns all the text inside the `body`, including any text that might be hidden using CSS.
console.log(bodycontents.textContent);  
// Even if elements are hidden with styles like `visibility: hidden`, `textContent` will include their text in the output.
