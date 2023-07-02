let playerScore = 0;
let computerScore = 0;
let result = "";


 function getComputerChoice(){
    let action = ['rock', 'paper', 'scissors'];
    return action[Math.floor(Math.random() * 3 )];
 }
 function getPlayerChoice(){
   let playerChoice = prompt(result + "Enter your choice");
   return playerChoice;
}

 function playRound(playerSelection, computerSelection) {
    if( playerSelection=='paper' && computerSelection.toLowerCase() =='Rock'
        || playerSelection=='scissors' && computerSelection.toLowerCase() =='paper'
        || playerSelection =='Rock' && computerSelection.toLowerCase() =='Rock' ){
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
 function Game(){
   let round = 1;
  
   while(round <= 5){

     let playerSelection = getPlayerChoice() ;  
     let computerSelection = getComputerChoice();
     let roundResult = playRound(playerSelection, computerSelection);
     console.log(playerSelection,computerSelection);
     
     result =  " your score : " + playerScore + " computer score : " + computerScore ;
     result += "<br></br>";
     result += roundResult   ; 
     result += "<br></br>";
      
      
     
      document.getElementById('result').innerHTML = result;


      round++;

   }
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
 }
 
Game();
document.getElementById('result').innerHTML = result + Finalresult;