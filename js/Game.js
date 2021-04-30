class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    rabbit1 = createSprite (100,200);
    rabbit1.scale = 0.5
    rabbit2 = createSprite (300,200);
    rabbit2.scale = 0.5
    rabbit3 = createSprite (500,200);
    rabbit3.scale = 0.5
    rabbit4 = createSprite (700,200);
    rabbit4.scale = 0.5
    rabbit = [rabbit1, rabbit2, rabbit3, rabbit4];

    rabbit1.addImage("rabbit1",rabbit1Img);
    rabbit2.addImage("rabbit2",rabbit2Img);
    rabbit3.addImage("rabbit3",rabbit3Img);
    rabbit4.addImage("rabbit4",rabbit4Img);

      }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){

    background ("grey");  
    image (trackImg, 0, -displayHeight*4, displayWidth, displayHeight*5);

      var index = 0 
        var  x = 170
        var y 

      for(var plr in allPlayers){
       index = index +1
       x = x +200
       y = displayHeight -allPlayers [plr].distance
       
       rabbit [index -1].x = x
       rabbit [index -1].y = y

      if (index === player.index){
       fill ("Green"); 
       ellipse (x, y, 70, 70) 
       //cars [index -1].shapeColor = "Green"
       camera.position.x = displayWidth/2
       camera.position.y = cars [index -1].y

        }
      
      }  
    }
   

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }

    if (player.distance > 3860) {
      gameState = 2;
      player.rank = player.rank +1
      Player.updateCarsSetEnd(player.rank)
      text ("You Win",displayWidth/2, displayHeight/2)
      
    }

    drawSprites();
  }

  end() {
    console.log ("You Win")
    console.log (player.rank)
  }

}
