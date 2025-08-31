let boxes = document.querySelectorAll(".box");
let winnerMsg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector(".new-btn");
let resetBtn = document.querySelector(".rst-btn");
let winnerList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const newGame = () => {
    enableBoxes();
    turnO = true;
    msgContainer.classList.add("hide");
    
}
const resetGame = () => {
    enableBoxes();
    turnO = true;
    msgContainer.classList.add("hide"); 
}

let turnO = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO){
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        findWinner();
    })
   
})

const disabledBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    
}
const findWinner = () => {
    for(let pattern of winnerList){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                disabledBoxes();
                showWinner(pos1Val);
                
            }
            
        }

    }
}

const showWinner = (winner) => {
    winnerMsg.innerText = `Congratulations! Winner ${winner}`;
    msgContainer.classList.remove("hide");
}

newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", resetGame);
