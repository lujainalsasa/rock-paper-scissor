let playerScore = 0;
let computerScore = 0;
let result = "";
let playerChoice ='';
let buttonClicks = 0;

 function getComputerChoice(){
    let action = ['rock', 'paper', 'scissors'];
    return action[Math.floor(Math.random() * 3 )];
 }
 
 function getPlayerChoice(){
   return playerChoice;
}
function  buttonClickHandler(){
   buttonClicks++;
}

function rock(){
  playerChoice = 'rock';
  buttonClickHandler();
  if(buttonClicks <= 5){ Game();}
  else {res();}
}
function paper(){
   playerChoice =  'paper';
   buttonClickHandler();
   if(buttonClicks <= 5){ Game();}
   else {res();}
}
function scissors(){
   playerChoice = 'scissors';
   buttonClickHandler();
   if(buttonClicks <= 5){ Game();}
   else {res();}
}

 function playRound(playerSelection, computerSelection) {
    if( playerSelection.toLowerCase()=='paper' && computerSelection.toLowerCase() =='Rock'
        || playerSelection.toLowerCase()=='scissors' && computerSelection.toLowerCase() =='paper'
        || playerSelection.toLowerCase() =='rock' && computerSelection.toLowerCase() =='Rock' ){
         playerScore++;
        return "You Won! " + playerSelection + " beats " +  computerSelection;
       
        }
      else if ( playerSelection === computerSelection){
         return "it is a tiy!";
      }
      else{
         computerScore++;
         return "You Lose! " + computerSelection + " beats " +  playerSelection;
      }
   
    
  }
  function res(){
   result =  " your score : " + playerScore + " computer score : " + computerScore ;
   result += "<br></br>";
   
   if(playerScore > computerScore)
   {
      
      Finalresult = "you Won! reload this page to play again";
   }
   else if(playerScore === computerScore){
    
      Finalresult = "it is a tiy! non of you won";
   }
   else {
      
      Finalresult = "you Lose! reload this page to play again";

   }
   document.getElementById('Finalresult').innerHTML = Finalresult;
}
 function Game(){
  
   
     let playerSelection = getPlayerChoice() ;  
     let computerSelection = getComputerChoice();
     let roundResult = playRound(playerSelection, computerSelection);
     console.log(playerSelection,computerSelection);
     
     result =  " your score : " + playerScore + " computer score : " + computerScore ;
     result += "<br></br>";
     result += roundResult   ; 
     result += "<br></br>";
      
      
      document.getElementById('result').innerHTML = result;  
    
 }

 


