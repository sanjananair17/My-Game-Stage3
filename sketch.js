var canvas, database, gameState = 0, playerCount, form, game, player, allPlayers;
var greeting, greeting1, gryfbutton, slybutton, ravbutton, hufbutton, input, button, title;
var greet, greet1, greetings, greeting1, error;
var goToSpells, attackButton, blockButton, defenseButton;
var attackArray = [], blockArray = [], defenseArray = [];
var a1, A1, b1, B1, d1, D1;
function setup(){
    canvas = createCanvas(400,400);

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
    background(100,100,100);
    if(playerCount === 2){
        game.update(1);
    }

    if(attackArray.length > 0){
        var x = 350;
        var y = 50;
        for(var i in attackArray){
            y+=50;
            fill("white");
            textSize(15);
            text(attackArray[i],x,y);
        }
    }

    if(blockArray.length > 0){
        var x = 350;
        var y = 50;
        for(var i in blockArray){
            y+=50;
            fill("white");
            textSize(15);
            text(blockArray[i],x,y);
        }
    }

    if(defenseArray.length > 0){
        var x = 350;
        var y = 50;
        for(var i in defenseArray){
            y+=50;
            fill("white");
            textSize(15);
            text(defenseArray[i],x,y);
        }
    }
}