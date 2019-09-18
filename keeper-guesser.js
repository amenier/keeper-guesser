//Keeper Guesser

//Welcome player to the game
console.log("Welcome to Keeper Guesser!");
var ruleStart = window.prompt("Type RULES to see the rules or START to start a new game");

//Press one for rules and another to start
If (ruleStart == "RULES") {
   // console.log("Here are the rules");
    rules();
} else if (ruleStart == "START") {
    console.log("New game started");
    newGame();
} else console.log("Invalid Input");


//The RULES
function rules() {
    console.log("the rules");
}


//If start then start new game



// New game 

// Ask user to place their shot


// Randomize keeper direction


// If shot === keeper, then no goal, else goal
