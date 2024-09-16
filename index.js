let boxes = document.querySelectorAll(".btn");
let newGameBtn = document.querySelector(".new-game");
let resetBtn = document.querySelector(".rstbtn");
let msgContainer = document.querySelector(".container-msg");
let msg = document.querySelector("#msg");

let turn0 = true; //playerX , playerY

let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    turn0 = true;
    boxenable();
    msgContainer.classList.add("hide");
    
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true; 
        checkWinner();   
        
    }

    )
})

const boxdisabled = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const boxenable = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (Winner) => {
    msg.innerText = "Congratulation, The winner is " + Winner;
    msgContainer.classList.remove("hide");
    boxdisabled();
}

const checkWinner = () => {
    for (let pattern of winPattern){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                 showWinner(posVal1);
            }
        }
    }
}


newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click", resetGame);
