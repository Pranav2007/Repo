function setup() {
  createCanvas(800,400);
  FixedRect = createSprite(200, 200, 50, 80);
  FixedRect.shapeColor = "green";
  MovingRect = createSprite(400, 200, 80, 30);
  MovingRect.shapeColor = "green";
}

function draw() {
  background(0,0,0);
  MovingRect.x = World.mouseX;
  MovingRect.y = World.mouseY;
  if (MovingRect.x-FixedRect.x < FixedRect.width/2 + MovingRect.width/2 
     && FixedRect.x-MovingRect.x < FixedRect.width/2 + MovingRect.width/2
     && MovingRect.y-FixedRect.y < FixedRect.height/2 + MovingRect.height/2 
     && FixedRect.y-MovingRect.y < FixedRect.height/2 + MovingRect.height/2){
    FixedRect.shapeColor = "red";
    MovingRect.shapeColor = "red";
  }
  else {
    FixedRect.shapeColor = "green";
    MovingRect.shapeColor = "green";
  }
  drawSprites();
}
//this is a dump
