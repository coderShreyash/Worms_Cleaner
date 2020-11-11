var player;
var score=0;
var wormGroup;

function setup(){
canvas = createCanvas(600,600);
wormGroup = new Group();
player = createSprite(200,200,80,30);
player.shapeColor="white";


}

function draw(){

background(0);
stroke("red");
frameRate(144);
noFill();
ellipse(300,300,50,50);
textSize(30);
drawSprites();

text("Worms Destroyed: "+score,280,50)
player.position.x=mouseX;
player.position.y=mouseY;
if(player.y<325 && player.y>275){
    text("No Cheating",220,250)
    player.x=-50;
    player.y=-50;
    
}
generateWorms();
for(var i=0;i<wormGroup.length;i++){
    var tent=wormGroup.get(i)
    if(player.isTouching(tent)){
        score++
        tent.destroy();
        tent=null;
        
    }
}
}
function generateWorms(){
    if(frameCount%20==0){
        console.log(frameCount);
        worm=createSprite(random(140,500),random(170,470),40,40);
        worm.shapeColor="green";
        worm.velocityX=random(-8,8);
        worm.velocityY=random(-8,8);
        wormGroup.add(worm);
    }
}
  