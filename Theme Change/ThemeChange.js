let body = document.querySelector("body");
let btn = document.querySelector("#btn")
let bg = btn.style.backgroundColor;


btn.addEventListener("click", () => {
    if(body.style.backgroundColor == "white")
        {
          
         body.style.backgroundColor = "black";
    }else{
        
        body.style.backgroundColor = "white"; 
    }
})

