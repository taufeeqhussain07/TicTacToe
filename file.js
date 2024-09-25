let oneScore = 0;
let twoScore = 0;
let player1Name = 'Player 1';
let player2Name = 'Player 2';

let boxes =document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let updateName = document.querySelector("#update");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let score1 = document.querySelector("#one-score");
let score2 = document.querySelector("#two-score");
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
const updateNames = () => {
    player1Name = document.getElementById('player1').value;
    player2Name = document.getElementById('player2').value;

    document.getElementById('name1').innerText = player1Name;
    document.getElementById('name2').innerText = player2Name;
    yourTurn.innerText = ` ${player1Name}'s Turn`;
}
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
            yourTurn.innerText = ` ${player2Name}'s Turn`;
            box.innerText="O";
            turnO = false;
        }else{
            yourTurn.innerText = `${player1Name}'s Turn`;
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
                oneScore++;
                score1.innerText = oneScore;
                showWinner(pos1Val);
            }
            else if(pos1Val === pos2Val && pos2Val === pos3Val && pos3Val==="X"){
                twoScore++;
                score2.innerText = twoScore;
                showWinner(pos1Val);
            }
        }
    }
};

updateName.addEventListener("click", updateNames);
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
