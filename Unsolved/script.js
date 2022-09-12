
var wins = 0
var ties = 0
var losses = 0

var options = [ "R", "P", "S"];

var playGame = function(){
    var userChoice = window.prompt("Enter R, P, S");
    if(!userChoice) {
        return;
    }

    userChoice = userChoice.toUpperCase();
//How to generate a rondom index from a array of options 
    var index = Math.floor(Math.random ()*options.length);
    var ComputerChoise = options[index];

    window.alert("The computure chose " + ComputerChoise);

    if(userChoice === ComputerChoise){
        ties++
        window.alert("Its a tie!")
    } else if(
        (userChoice === "P" && ComputerChoise === "R")||
        (userChoice === "R" && ComputerChoise === "S")||
        (userChoice === "S" && ComputerChoise === "P")
    )
    {
    wins++
    window.alert("You win!");
    } else{
        losses++
        window.alert("You lose!");
    }

    window.alert( "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);

    var playAgain = window.confirm("Play agian!");
    if (playAgain){
        playGame()
    }
}

playGame()