function preload() {
  //load game assets
  woody=loadImage("obs.png")
  man=loadImage("don.png")
}
var player;
var edges;
function setup() {
  createCanvas(1000,600);
player=createSprite(900,50,50,50);
target=createSprite(100,550,150,50);
enemy1=createSprite(500,200,250,10);
enemy1.velocityX=8;
enemy2=createSprite(500,400,250,10);
enemy3=createSprite(500,300,300,15);
enemy3.shapeColor="lime"
enemy2.velocityX=-8;
enemy1.shapeColor="red";
enemy2.shapeColor="indigo";
enemy1.addImage(woody);
enemy2.addImage(woody);
enemy3.addImage(woody);
player.addImage(man);
player.scale=0.2;
enemy1.scale=0.8;
enemy2.scale=0.8;
player.shapeColor=rgb(random(0,255),random(0,255),random(0,255));
target.shapeColor=rgb(random(0,255),random(0,255),random(0,255));
edges=createEdgeSprites();
}

function draw() {
  enemy1.setCollider("rectangle",0,10,120,40);
  enemy2.setCollider("rectangle",0,10,120,40);
  enemy3.setCollider("rectangle",0,10,150,40);

  background(0);  
  if(keyWentDown("up")){
    player.velocityY=-5;
  }
  else if(keyWentDown("down")){
    player.velocityY=5;
  }
  else if(keyWentDown("right")){
    player.velocityX=5;
  }
  else if(keyWentDown("left")){
    player.velocityX=-5;
  }
  enemy1.bounceOff(edges);
  enemy2.bounceOff(edges);
  player.bounceOff(edges);
  if(player.isTouching(target)){
    player.velocityX=0;
    player.velocityY=0;
    fill("white");
    textSize(40);
    text("Yay You Won !!!",380,300);
  }
  else if(player.isTouching(enemy1)){
    player.velocityX=0;
    player.velocityY=0;
    enemy1.velocityX=0;
    enemy1.velocityY=0;
    fill("white");
    textSize(30);
    text("Bad Luck, Try Again !",400,270);
    
  }
  else if(player.isTouching(enemy2)){
    player.velocityX=0;
    player.velocityY=0;
    enemy2.velocityX=0;
    enemy2.velocityY=0;
    fill("white");
    textSize(30);
    text("Bad Luck, Try Again !",400,270)
  }
  else if(player.isTouching(enemy3)){
    player.velocityX=0;
    player.velocityY=0;
    
    fill("white");
    textSize(30);
    text("Bad Luck, Try Again !",400,270)
  }
  drawSprites();
  

}
