var userName;
var button = document.getElementById("name");
var enterName = function myFunctionHandler(){
    userName = prompt("Enter your name.")
}

button.addEventListener ("click", enterName);

var startButton = document.getElementById("startButton");

var startGameHandler = function startMyGame(){
    if(userName == undefined){
        alert("Please enter a valid name");
    } else {
        alert("Ready player one!");
    }
}

var gameButton = function GameButtonFondler(name){
    var button;
    var fire = function(){
        alert("LASER BEEEEEEAAAAAMMMMMMMMMM");
    }
}

var fireWeaponButton = new gameButton("fireWeapon");
fireWeaponButton.button = document.getElementById("fireWeapon");
fireWeaponButton.button.addEventListener("click", fireWeaponButton.fire);