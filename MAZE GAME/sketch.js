var Maze;
var GameState = "wait";
var Button,Button2;
var bg,restart,start,CHARACTER,winner,gameover;
function preload() {
  Maze = loadImage("MAZE.png");
  start = loadImage("start.png");
  restart = loadImage("restart.png");
  CHARACTER = loadImage("player.png");
  winner = loadImage("winner.png");
  gameover = loadImage("game over.jpg");
  bg = loadImage("stars.jpg");

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  wall1 = createSprite(70,height/2,10,height-100); 
  wall2 = createSprite(width/4-20,50,width/3+80,10);
  wall3 = createSprite(width/4+30,height-50,width/3+170,10);
  wall4 = createSprite(width-80,height/2,10,height-100); 
  wall5 = createSprite(width-370,height-50,width/3+80,10);
  wall6 = createSprite(width-430,50,width/3+170,10);
  wall7 = createSprite(270,135,200,7)
  wall8 = createSprite(270,height/2,200,7)
  wall9 = createSprite(270,height/2+85,200,7)
  wall10 = createSprite(270,height/2+220,200,7)
  wall11 = createSprite(425,height/4,300,7)
  wall12 = createSprite(520,height/4+47,290,7)
  wall13 = createSprite(520,height/4+90,290,7)
  wall14 = createSprite(325,height/2-40,300,7)
  wall15 = createSprite(425,height/4,300,7)
  wall16 = createSprite(470,90,200,7);
  wall17 = createSprite(470,height/2+130,200,7)
  wall18 = createSprite(570,height/2+175,200,7)
  wall19 = createSprite(175,height/2+130,200,7)
  wall20 = createSprite(375,height-85,200,7)
  wall21 = createSprite(width/2+150,height-85,100,7)
  wall22 = createSprite(width/2-50,height/2+220,300,7)
  wall23 = createSprite(width/2-40,height/2,500,7)
  wall24 = createSprite(width/2+300,height/2+220,200,7)
  player = createSprite(width/2+40,height-55,20,20);
  player.addImage(CHARACTER);
  player.scale = 0.05;
  player.debug = true;
  player.visible=false;
  wall1.shapeColor = "red";
  wall2.shapeColor = "red";
  wall3.shapeColor = "red";
  wall4.shapeColor = "red";
  wall5.shapeColor = "red";
  wall6.shapeColor = "red";
  wall7.shapeColor = "red";
  wall8.shapeColor = "red";
  wall9.shapeColor = "red";
  wall10.shapeColor = "red";
  wall11.shapeColor = "red";
  wall12.shapeColor = "red";
  wall13.shapeColor = "red";
  wall14.shapeColor = "red";
  wall15.shapeColor = "red";
  wall16.shapeColor = "red";
  wall17.shapeColor = "red";
  wall18.shapeColor = "red";
  wall19.shapeColor = "red";
  wall20.shapeColor = "red";
  wall21.shapeColor = "red";
  wall22.shapeColor = "red";
  wall23.shapeColor = "red";
  wall24.shapeColor = "red";
 Restart = createSprite(width/2,height/2+150);
 Restart.addImage(start);
 Button = createButton ("Start");
 Button.position (width/2-30,height/2+130);
 Restart.scale = 0.2;
 //Restart.visible = false;
 startGame();
}


function draw() {
  background(bg);  
  if(GameState == "play"){
    Restart.visible = false;
    if (keyDown(UP_ARROW)) {
      player.velocityX = 0;
      player.velocityY = -3;
    }
    if (keyDown(DOWN_ARROW)) {
      player.velocityX = 0;
      player.velocityY = 3;
    }
    if (keyDown(LEFT_ARROW)) {
      player.velocityX = -3;
      player.velocityY = 0;
    }
    if (keyDown(RIGHT_ARROW)) {
      player.velocityX = 3;
      player.velocityY = 0;
    }
    
    player.collide(wall1,endGame);
    player.collide(wall2,endGame);
    player.collide(wall3,endGame);
    player.collide(wall4,endGame);
    player.collide(wall5,endGame);
    player.collide(wall6,endGame);
    player.collide(wall7,endGame);
    player.collide(wall8,endGame);
    player.collide(wall9,endGame);
    player.collide(wall10,endGame);
    player.collide(wall11,endGame);
    player.collide(wall12,endGame);
    player.collide(wall13,endGame);
    player.collide(wall14,endGame);
    player.collide(wall15,endGame);
    player.collide(wall16,endGame);
    player.collide(wall17,endGame);
    player.collide(wall18,endGame);
    player.collide(wall19,endGame);
    player.collide(wall20,endGame);
    player.collide(wall21,endGame);
    player.collide(wall22,endGame);
    player.collide(wall23,endGame);
    player.collide(wall24,endGame);
    console.log(player.x);
    console.log(player.y);
  if(player.x < 680 && player.x > 765 && player.y < 50 ){
    GameState = "won";
    player.addImage(winner);
    player.x = width/2;
    player.y = height/2;
    player.scale = 2;
  }
  }
  else if(GameState == "end"){
    background (gameover);
    Restart.addImage(restart);
    Restart.visible = true;
  }
  
  
  
  drawSprites();
 
}
function startGame(){
  
  Restart.addImage(start);
  Restart.visible=true;
  
  Button.mousePressed(()=>{
    GameState = "play";
  player.visible = true;
  Button.hide()
  })
  
}

function endGame(){
  GameState = "end";
  player.visible = false;
  background(gameover);
  player.x = width/2+40;
      player.y = height-55;
      player.setVelocity(0,0);
      Button2 = createButton ("Restart");
 Button2.position (width/2-30,height/2+130);
 Button2.mousePressed(()=>{
  GameState = "play";
player.visible = true;
Button2.hide()
})
}
