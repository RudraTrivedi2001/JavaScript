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

// Printing out properties and methods of the 'document' object, which represents the entire HTML document.
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