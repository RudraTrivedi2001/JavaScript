let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")


let turnO = true ;      //player x, player o

const winpatterns = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6],


];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if(turnO){
          box.innerText = "O"
          turnO = false;
        }else{
            box.innerText = "X"
            turnO = true;
        }
        
        console.log("box was clicked");
        
    
    });
});

