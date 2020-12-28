var car1,car2,car3;
var wall1,wall2,wall3;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car1=createSprite(50,150,50,50);
  car2=createSprite(50,250,50,50);
  car3=createSprite(50,350,50,50);
  wall1=createSprite(1300,200,60,height/2);
  wall2=createSprite(1300,300,60,height/2);
  wall3=createSprite(1300,400,60,height/2);
  //wall1.shapeColor="grey";
}

function draw() {
  background(255,255,255);  
  car1.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;

  if(wall1.x - car1.x < (car1.width/2 * wall1.width/ 2)){
    deformation = 0.5*weight*speed*speed/22500;
    if(deformation < 100){
      car1.shapeColor = "green";
    }
    else if(deformation > 100 && 
      deformation < 180){
      car1.shapeColor = "yellow";
    }
    else if(deformation > 180){
      car1.shapeColor = "red";
    }
  }

  if(wall2.x - car2.x < (car2.width/2 * wall2.width/ 2)){
    deformation = 0.5*weight*speed*speed/22500;
    if(deformation < 100){
      car2.shapeColor = "green";
    }
    else if(deformation > 100 && 
      deformation < 180){
      car2.shapeColor = "yellow";
    }
    else if(deformation > 180){
      car2.shapeColor = "red";
    }
  }

  if(wall3.x - car3.x < (car3.width/2 * wall3.width/ 2)){
    deformation = 0.5*weight*speed*speed/22500;
    if(deformation < 100){
      car3.shapeColor = "green";
    }
    else if(deformation > 100 && 
      deformation < 180){
      car3.shapeColor = "yellow";
    }
    else if(deformation > 180){
      car3.shapeColor = "red";
    }
  }

  drawSprites();
}