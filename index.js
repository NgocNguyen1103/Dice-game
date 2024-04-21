function result(a,b){
    if (a > b){
        document.querySelector('h1').innerHTML = "Player 1 win";
    }
    else if(a < b ){
        document.querySelector("h1").innerHTML = "Player 2 win";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw";
    }
}

function roll1(a){
    if (a === 1){
        document.getElementById("dice1").src = "./images/dice1.png";
    }
    else if(a === 2){
        document.getElementById("dice1").src = "./images/dice2.png";
    }
    else if(a === 3){
        document.getElementById("dice1").src = "./images/dice3.png";

    }
    else if(a === 4){
        document.getElementById("dice1").src = "./images/dice4.png";
    }
    else if(a === 5){
        document.getElementById("dice1").src = "./images/dice5.png";
        
    }
    else {
        document.getElementById("dice1").src = "./images/dice6.png";
        
    }

}

function roll2(a){
    if (a === 1){
        document.getElementById("dice2").src = "./images/dice1.png";
    }
    else if(a === 2){
        document.getElementById("dice2").src = "./images/dice2.png";
    }
    else if(a === 3){
        document.getElementById("dice2").src = "./images/dice3.png";

    }
    else if(a === 4){
        document.getElementById("dice2").src = "./images/dice4.png";
    }
    else if(a === 5){
        document.getElementById("dice2").src = "./images/dice5.png";
        
    }
    else {
        document.getElementById("dice2").src = "./images/dice6.png";
        
    }

}

function main(){
    var Player1 = Math.floor((Math.random() * 6)) + 1;
    var Player2 = Math.floor((Math.random() * 6)) + 1;
    result(Player1,Player2);
    roll1(Player1);
    roll2(Player2);
}

main();