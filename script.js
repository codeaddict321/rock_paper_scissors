const playerScoreText = document.querySelector('.playerScore')
const pcScore = document.querySelector('.pcScore')
const left = document.querySelector('.chanceLeft')
const message = document.querySelector('.message')
const winner = document.querySelector('.winner')
const reset = document.querySelector('.reset')
const resetBtn = document.querySelector('.reset_btn')
function getComputerChoice() {
      const randomNum = Math.floor(Math.random()*3)+1
      const computerChoice = randomNum === 1 ? "Rock" : randomNum === 2 ? "Paper" :"Scissors"
      return computerChoice.toLowerCase()
}


let playerScore = 0
let computerScore =0


function playRound(playerChoice,getComputerChoice) {
       

 
     if(playerChoice==="rock" && getComputerChoice() === "paper") {
       message.innerText = "You lose ! paper beats rock";
        computerScore++
     }
    else if(playerChoice==="rock" && getComputerChoice() === "scissors") {
        message.innerText ="You won ! rock beats scissors";
        playerScore++
    } 
    else if(playerChoice==="paper" && getComputerChoice() === "rock") {
    message.innerText ="You won ! paper beats rock";
    playerScore++
    } 
    else if(playerChoice==="paper" && getComputerChoice() === "scissors") {
        message.innerText ="You lose ! scissors beats paper";
        computerScore++
    } 
    else if(playerChoice==="scissors" && getComputerChoice() === "rock") {
  message.innerText ="You lose ! rock beats scissors";
    computerScore++
    } 
    else if(playerChoice==="scissors" && getComputerChoice() === "paper") {
       message.innerText ="You won ! scissors beats paper";
        playerScore++
    } 
else{
   message.innerText  = "tie"
}
 
pcScore.innerText = computerScore
playerScoreText.innerText = playerScore
left.innerText = Number(left.innerText) -1
if(Number(left.innerText) === 0){
   
  if(playerScore > computerScore){
    winner.innerText = "Player"
  } else if(computerScore > playerScore){
    winner.innerText = "Computer"
  } else{
    winner.innerText = "tie"
  }
   reset.style.display = "flex"
}
   
  }


  
  document.addEventListener('click',e=>{
    const btn = e.target
    if(btn.classList.value === "btn"){
            const playerChoice =e.target.innerText.toLowerCase();
            playRound(playerChoice,getComputerChoice)
          

    }
  })

  resetBtn.addEventListener('click',()=>{
    reset.style.display = "none"
    playerScore = 0
    computerScore = 0
    left.innerText = 5
    pcScore.innerText = 0
    playerScoreText.innerText = 0
    
  })