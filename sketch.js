var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
  gameObject1 = createSprite(50,250,20,60);
  gameObject1.shapeColor = "blue";
  gameObject2 = createSprite(200,70,30,50);
  gameObject2.shapeColor = "blue";
  gameObject3 = createSprite(350,200,80,40);
  gameObject3.shapeColor = "blue";
  gameObject4 = createSprite(420, 320, 65,35);
  gameObject4.shapeColor = "blue";
}




function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,gameObject4)){
    movingRect.shapeColor = "yellow";
    gameObject4.shapeColor = "yellow";
  } 
  else{
    movingRect.shapeColor = "blue";
    gameObject4.shapeColor = "blue";
  }

  drawSprites();
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;

}
else {
  return false;
}
}