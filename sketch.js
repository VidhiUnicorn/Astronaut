var astronaut; 
var iss;
var moveAn;

function preload (){

  bathAn = loadAnimation ("bath1.png","bath2.png");
  brushImg = loadImage ("brush.png");
  drinkAn = loadAnimation ("drink1.png","drink2.png");
  eatAn = loadAnimation ("eat1.png","eat2.png");
  gymTredAn = loadAnimation ("gym1.png","gym2.png");
  gymAn = loadAnimation ("gym11.png","gym12.png");
  ISSImg = loadImage ("iss.png");
  moveAn = loadAnimation ("move1.png","move1.png","move.png");
  sleepImg = loadImage ("sleep.png")

}



function setup() {
  
  createCanvas(800,600);

  iss = createSprite (400,300);
  iss.addImage (ISSImg);
  iss.scale = 0.18;


  astronaut = createSprite (200,400);
  astronaut.addImage("sleeping",sleepImg);
  astronaut.scale = 0.13;


}

function draw() {

  background(255,255,255);  
  drawSprites();
  
  textSize (25);
  fill (255);
  text ("Instructions : ",20,40);

  textSize (20)
  text ("    - Up Arrow = Brushing",20, 65);
  text ("    - Down Arrow = Gym ",20,85);
  text ("    - Left Arrow = Eating",20,105);
  text ("    - Right Arrow = Bathing", 20,125);
  text ("    - M Key = Moving ", 20,145 );



  if (keyDown("Up_Arrow")){
    astronaut.addAnimation("brushing",brushImg);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if (keyDown("Down_Arrow")){
    astronaut.addAnimation("gym",gymTredAn);
    astronaut.changeAnimation("gym");
    astronaut.y = 400;
    astronaut.x = 400;
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  
  if (keyDown("Left_Arrow")){
    astronaut.addAnimation("eating",eatAn);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 1
    astronaut.velocityY = -1
  }
  
  if (keyDown("Right_Arrow")){
    astronaut.addAnimation("bathing",bathAn);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.x = 600
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  
  if (keyDown("m")){
    
    astronaut.addAnimation("moving",moveAn);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.x = 600;
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

}