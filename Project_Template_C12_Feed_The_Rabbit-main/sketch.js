var garden,rabbit;
var gardenImg,rabbitImg;
var Apple

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
AppleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.X = World.mouseX
}


function draw() {
  background(0);
  spawnApples();
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}
//defining a function
function spawnApples(){

  if(frameCount % 100 === 0)
 {
  
  Apple = createSprite(random(50,350) ,40,10,10)
  Apple.scale = 0.1;
  Apple.addImage(AppleImg)
Apple.velocityY= 3
Apple.lifetime = 200;


}
}