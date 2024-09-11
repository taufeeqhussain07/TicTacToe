let nidaScore = 0;
let sohaScore = 0;

let boxes =document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let score1 = document.querySelector("#nida-score");
let score2 = document.querySelector("#soha-score");
let yourTurn = document.querySelector("#your-turn");

let turnO = true;
let win=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        msgContainer.classList.add("hide");
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            yourTurn.innerText = "Soha's Turn";
            box.innerText="O";
            turnO = false;
        }else{
            yourTurn.innerText = "Nida's Turn";
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide")
    for(let box of boxes){
        box.disabled = true
    }
}
const checkWinner = () => {
    for(let pattern of win){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val && pos3Val==="O"){
                nidaScore++;
                score1.innerText = nidaScore;
                showWinner(pos1Val);
            }
            else if(pos1Val === pos2Val && pos2Val === pos3Val && pos3Val==="X"){
                sohaScore++;
                score2.innerText = sohaScore;
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);