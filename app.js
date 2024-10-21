let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

const drawGame = () =>{
    
    msg.innerText = "ITS A DRAW !!!!";
    msg.style.backgroundColor="yellow";
}
const generateComputerChoice = () =>{
    //rock,paper,scissors
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = `YOU WIN!!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        
        msg.innerText = `YOU LOSE :( Computer's ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}
const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    //Generate computer choice
    const compChoice = generateComputerChoice();
    console.log("Computer choice = ", compChoice);
    if(userChoice == compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice == "rock"){
            //user --> rock
            userWin = compChoice === "paper" ? false : true;        }
        else if(userChoice == "paper"){
            //user --> paper
            userWin = compChoice === "scissor" ? false : true;        }
        else{
            //user --> scissor
            userWin = compChoice === "rock"? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
    
}

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    });
});