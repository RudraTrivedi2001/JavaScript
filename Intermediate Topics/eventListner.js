// Selecting elements from the HTML
let button = document.querySelector("#btn"); // The button element
let mainDiv = document.querySelector("#mainDiv"); // The div with id "mainDiv"
let content = document.querySelector(".content"); // The paragraph with class "content"

// Adding an event handler using `onclick`
// This is a simple way to attach an event to an element
button.onclick = () => {
    alert("Button clicked using onclick!");
};

// Adding an event listener using `addEventListener`
// More modern and flexible way to handle events
button.addEventListener("click", () => {
    mainDiv.innerText = "Button was clicked!"; // Dynamically updates the div content
    mainDiv.style.backgroundColor = "lightblue"; // Changes the background color of the div
});

// Adding another event listener to the same event
// This shows the flexibility of `addEventListener`
button.addEventListener("click", () => {
    console.log("This is another listener for the same click event.");
});

// Event listener for `mouseover`
// Triggers when the mouse hovers over the content paragraph
content.addEventListener("mouseover", () => {
    content.style.color = "red"; // Changes the text color to red
    content.style.cursor = "pointer"; // Changes the cursor to a pointer
});

// Event listener for `mouseout`
// Triggers when the mouse leaves the content paragraph
content.addEventListener("mouseout", () => {
    content.style.color = "black"; // Resets the text color to black
});

// Removing an event listener dynamically
let removeListener = () => {
    button.removeEventListener("click", logMessage);
    alert("Click event listener removed!");
};

// Function to log a message (used for demonstration)
let logMessage = () => {
    console.log("This message will be logged until the event listener is removed.");
};

// Adding a click event listener to log a message
button.addEventListener("click", logMessage);

// Adding a delayed removal of the event listener
setTimeout(removeListener, 10000); // Removes the event listener after 10 seconds
