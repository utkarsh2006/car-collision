var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
 
 
  wall=createSprite(1500,200,60,height/2);


}

function draw() {
  background("black"); 
  if(wall.x-car.x <(car.width+wall.width)/2)
{
  car.velocity.X=speed;
  var deformation=0.5*weight*speed/22500;
if(deformation>180)
{
  car.shapecolor=color(225,0,0);
}
if(deformation<180 && deformation>180)
{
  car.shapecolor=color(230,230,0);
}
if(deformation<180)
{
  car.shapcolor=color(0,225,0)
}
} 
  drawSprites();
}