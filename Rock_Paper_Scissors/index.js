
function UserChoice(){
    let userInput=(prompt("Enter your choice: "))
    
    let capsInput= userInput.toUpperCase();
    
    return(capsInput)
    
}

//UserChoice();

function ComputerChoice(){
    let options=["ROCK", "PAPER", "SCISSORS"];
    let choice = Math.floor(Math.random()* options.length)
    return(options[choice])
}

//ComputerChoice();
 
 function playRound(){
     let user= UserChoice();
     let computer= ComputerChoice();
     
     //console.log(user, computer)
    
    switch(true){
         case(user != "ROCK" || user || "PAPER" || user != "SCISSORS"):
         console.log(user + " is not a valid entry")
        
         break;
         
         case(user === computer):
         console.log("Tie game. you both chose " + computer)
         break;
         
         case(user ==="ROCK" && computer === "paper"):
         console.log(" You lose " + computer + " beats" + user)
         break;
         
         case(user === "PAPER" && computer === "SCISSORS"):
         console.log(" You lose " + computer + " beats" + user)
         break;
         
         case(user === "SCISSORS" && computer === "ROCK"):
         console.log(" You lose " + computer + " beats " + user)
         break;
         
        default:
        console.log(" You win " + user + " beats " + computer)
         
     }
 }
 
 playRound();
