// Select the button element with id "btn"
let btn = document.querySelector("#btn");

// Add a click event to the button
btn.onclick = () => {
    alert("Button is clicked")
    
};

// Select the div element with id "mainDiv"
let box = document.querySelector("#mainDiv");

// Add the "onmouseover" event listener
// This event triggers when the mouse hovers over the element
box.onmouseover = function () {
    box.style.backgroundColor = "orange"; // Change background color to orange
    box.style.color = "white"; // Change text color to white
    box.innerText = "You hovered over me!"; // Update the text inside the box
};

// Add the "onmouseout" event listener
// This event triggers when the mouse moves out of the element
box.onmouseout = function () {
    box.style.backgroundColor = "lightblue"; // Reset background color to light blue
    box.style.color = "black"; // Reset text color to black
    box.innerText = "Hover over me!"; // Reset the text inside the box
};
