// Select all the elements with the class "box"
let boxes = document.querySelectorAll(".box");
// Select the reset button by its ID
let reset = document.querySelector("#reset");
// Select the new game button by its ID
let newGameBtn = document.querySelector("#new-game-btn");
// Select the message container where messages like winner or draw are displayed
let msgContainer = document.querySelector(".msg-container");
// Select the specific message element inside the message container
let msg = document.querySelector("#msg");

// Initialize the game state variables
let turnO = true; // Player O always starts the game
let count = 0; // Keeps track of the number of moves made to check for a draw

// Define all possible winning patterns (combinations of box indices that form a win)
const winpatterns = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
];

// Function to disable all the boxes (used after a win or draw)
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true; // Disable the button so it can't be clicked
    }
};

// Function to enable all the boxes (used when starting a new game)
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false; // Enable the button to allow clicking
        box.innerText = ""; // Clear any text (O or X) from the boxes
    }
};

// Function to reset the game state
const resetGame = () => {
    turnO = true; // Reset the turn to Player O
    count = 0; // Reset the move counter
    enableBoxes(); // Clear the board and re-enable the boxes
    msgContainer.classList.add("hide"); // Hide any messages
};

// Function to handle a game draw
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`; // Display a draw message
    msgContainer.classList.remove("hide"); // Show the message container
    disableBoxes(); // Disable all boxes since the game is over
};

// Function to display the winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`; // Show the winner
    msgContainer.classList.remove("hide"); // Make the message container visible
    disableBoxes(); // Disable all boxes since the game is over
};

// Function to check if there's a winner
const checkWinner = () => {
    for (const pattern of winpatterns) {
        // Get the text content of the three boxes in the current winning pattern
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        // Check if all three positions are non-empty and match
        if (posVal1 !== "" && posVal2 !== "" && posVal3 !== "") {
            if (posVal1 === posVal2 && posVal2 === posVal3) {
                showWinner(posVal1); // Declare the winner (O or X)
                return true; // A winner is found, exit the function
            }
        }
    }
    return false; // No winner found
};

// Add a click event listener to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"; // Player O's turn
            turnO = false; // Switch to Player X
        } else {
            box.innerText = "X"; // Player X's turn
            turnO = true; // Switch to Player O
        }
        box.disabled = true; // Disable the box to prevent further clicks

        count++; // Increment the move counter

        // Check if there's a winner after this move
        let isWinner = checkWinner();

        // If all boxes are filled and there's no winner, declare a draw
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

// Add event listeners for reset and new game buttons
reset.addEventListener("click", resetGame); // Reset game when the reset button is clicked
newGameBtn.addEventListener("click", resetGame); // Reset game when the new game button is clicked
