function getComputerChoice() {
      const randomNum = Math.floor(Math.random()*3)+1
      const computerChoice = randomNum === 1 ? "Rock" : randomNum === 2 ? "Paper" :"Scissors"
      return computerChoice.toLowerCase()
}


let playerScore = 0
let computerScore =0

function playRound(getComputerChoice) {
    let playerChoice = prompt("Rock, paper or scissors?").toLowerCase();
     if(playerChoice==="rock" && getComputerChoice() === "paper") {
        console.log( "You lose ! paper beats rock");
        computerScore++
     }
    else if(playerChoice==="rock" && getComputerChoice() === "scissors") {
        console.log("You won ! rock beats scissors");
        playerScore++
    } 
    else if(playerChoice==="paper" && getComputerChoice() === "rock") {
    console.log("You won ! paper beats rock");
    playerScore++
    } 
    else if(playerChoice==="paper" && getComputerChoice() === "scissors") {
        console.log("You lose ! scissors beats paper");
        computerScore++
    } 
    else if(playerChoice==="scissors" && getComputerChoice() === "rock") {
   console.log("You lose ! rock beats scissors");
    computerScore++
    } 
    else if(playerChoice==="scissors" && getComputerChoice() === "paper") {
        console.log("You won ! scissors beats paper");
        playerScore++
    } 
else{
   console.log('tie');
}
  
   
  }

  for(let i =0;i<5;i++){
    playRound(getComputerChoice)

    if(i===4){
      
        console.log(`${playerScore > computerScore ? "Player Won" : "Computer Won"} your score - ${playerScore},computer score  - ${computerScore}`)
    }
  }
  
  