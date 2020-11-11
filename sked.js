function preload(){
    swamp=loadImage("worm.jpg");
    garden=loadImage("guard.jpg");
    bag=loadImage("swampy.jpg");
}
var player;
var score=0;
var wormGroup;

function setup(){
canvas = createCanvas(600,600);
back=createSprite(300,300,600,600);
back.addImage(bag);
back.scale=2;
wormGroup = new Group();
player = createSprite(200,200,80,30);
player.shapeColor="black";
player.addImage(garden)
player.scale=0.125;
}

function draw(){

background(255);
stroke("red");
strokeWeight(2);
frameRate(144);
noFill();

textSize(30);
drawSprites();
text("Worms Destroyed: "+score,280,50);

player.x=mouseX;
player.y=mouseY;
if(player.x<335 && player.x>285 && player.y<335 && player.y>285){
    text("No Cheating",220,250)
    player.x=-50;
    player.y=-50;
    score--;
}
generateWorms();
for(var i=0;i<wormGroup.length;i++){
    var tent=wormGroup[i];
    if(player.isTouching(tent)){
        score+=5;
        tent.destroy();
    } 
}
}
function generateWorms(){
    if(frameCount%30==0){
        var worm=createSprite(random(40,600),random(450,600),40,40);
        worm.addImage(swamp);
        worm.scale=0.1;
        worm.velocityX=random(-2,-8);
        worm.velocityY=random(-2,-8);
        wormGroup.add(worm);
    }
}
  