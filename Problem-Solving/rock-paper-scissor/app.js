let userCount = 0;
let compCount = 0;
let choices = document.querySelectorAll(".choice");
const winnerMsg = document.querySelector("#msg");
const winCountUser = document.querySelector("#user-score");
const winCountComp = document.querySelector("#comp-score");

const genCmpChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rdmIdx = Math.floor(Math.random() * 3);
    return options[rdmIdx];
}

const gameDraw = () => {
    winnerMsg.innerText = "It's a Draw Game";
    winnerMsg.style.backgroundColor = "#000023";

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
       let userChoice = choice.getAttribute("id");
       playGame(userChoice);
    })
})

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userCount++;
        winCountUser.innerText = userCount;
        winnerMsg.innerText = `Your ${userChoice} Beats Computer ${compChoice}`;
        winnerMsg.style.backgroundColor = "green";
    }
    else{
        compCount++;
        winCountComp.innerText = compCount;
        winnerMsg.innerText = `Computer ${compChoice} Beats Your ${userChoice}`;
        winnerMsg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    let compChoice = genCmpChoice();
    let userWin = true;
    if (userChoice === compChoice){
        gameDraw();
    }
    else{
        
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    } 
}