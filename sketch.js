var human,human_running,leftBoundary,rightBoundary;
var ground1,path;


function preload(){
  //pre-load images
  human_running = loadAnimation("Runner-1.png","Runner-2.png");
  ground1=loadAnimation("path.png");
  
}


function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite(200,200);
  path.addAnimation("paper",ground1);
  path.velocityY = 4;
  path.scale=1;
  

  human = createSprite(200,240,100,100);
  human.addAnimation("running",human_running);
  human.scale=2;

  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;
  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
  } 
  


function draw() {
background(220);

path.velocityY.y = 4;
human.x = World.mouseX;
createEdgeSprites();
  
  human.collide(leftBoundary);
  human.collide(rightBoundary);

  if(path.y > 400 ){
    path.y = height/2;
  }

  drawSprites();
  }
