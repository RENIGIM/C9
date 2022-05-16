var box;
function setup() {
  createCanvas(600,600);
  box = createSprite(200,200,10,10);
}

function draw() 
{
  

  if(keyDown("right")){
    background("yellow");
    box.x = box.x + 3;
  }
  if(keyDown("left")){
    background("blue");
    box.x = box.x -3;
  }
  if(keyDown("up")){
    background("pink");
    box.y = box.y -3;
  }
  if(keyDown("down")){
    background("green");
    box.y = box.y +3;
  }
  drawSprites();
}




