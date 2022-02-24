var ball;
var edgeT,edgeR, edgeB,edgeL;
var edge;
function setup() {
  createCanvas(450, 400);

  //ball sprite
  ball = createSprite(150, 250, 15, 15);
  ball.shapeColor = "orange";

  //Top edge
  edgeT = createSprite(225, 0, 450, 5);
  edgeT.shapeColor = "gray";

  //Left edge
  edgeL = createSprite(0, 200, 5, 400);
  edgeL.shapeColor = "gray";

  //Right edge
  edgeR = createSprite(450, 200, 5, 400);
  edgeR.shapeColor = "gray";

  //Bottom Edge
  edgeB = createSprite( 225 ,400 ,450 ,5);
  edgeB.shapeColor = "gray";

}

function draw() {
  background("honeydew");

  //move the ball using velocityX and velocityY properties
  if(mouseIsPressed){
    ball.velocityX=3;
ball.velocityY=4;
  }

  //make the ball bounce off the edges
  ball.bounceOff(edgeT);
  ball.bounceOff(edgeB);
  ball.bounceOff(edgeR);
  ball.bounceOff(edgeL);
  drawSprites();
}


