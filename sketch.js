var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var rabbit1, rabbit2, rabbit3, rabbit4, rabbit;

var rabbit1Img, rabbit2Img, rabbit3Img, rabbit4Img, jungleImg;

function preload() {
  rabbit1Img = loadImage ("Images/image 1.jpg");
  rabbit2Img = loadImage ("Images/image 2.jpg");
  rabbit3Img = loadImage ("Images/image 3.jpg");
  rabbit4Img = loadImage ("Images/image 4.jpg");
  jungleImg = loadImage ("Images/jungle.jpg");
}


function setup(){
  canvas = createCanvas(displayWidth -140, displayHeight -140);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

if (gameState === 2) {
  game.end();
    
}
}
