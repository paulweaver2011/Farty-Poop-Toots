//Main playah gonna play!
var mainPlayer = {
    name: "Player",
    rank: "Pawn",
    speed: 10,
    power: 1,

    messenger: function (message){
        alert(message);
    }
}

mainPlayer.name = prompt("Enter your name, please.");

alert("Welcome, " + mainPlayer.name + ".");

var phrases = [
    prompt("Tell me about your mother."), 
    prompt("Who is your daddy and what does he do?"),
    prompt("Why do you hate yourself so much?"),
    ];

for(var i = 0 ; i < phrases.length ; i++){
    mainPlayer.messenger(phrases[i]);
}

function name(gas, anus, butts){
    return gas + anus + butts;
}

var firstPrompt = parseInt(prompt("Please enter a number between 0 and 10."));
var secondPrompt = parseInt(prompt("Please enter a number between 11 and 20."));
var thirdPrompt = parseInt(prompt("Please enter a number between 21 and 30."));

var score = playGame(firstPrompt, secondPrompt, thirdPrompt);
alert("Your score is " + score + ".");
alert("Do you want to play again?")