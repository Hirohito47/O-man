const WIDTH = 400, HEIGHT = 400;

let circleX = 10;
let circleY = 30;
let panelX = 0;
let panelY = HEIGHT - 40;
let vX = 4;
let vY = 4;
let img_panel = null

function setup() {
  createCanvas(WIDTH, HEIGHT);
  frameRate(30);
  ing_panel = loadImage('https://static.wikia.nocookie.net/nintendo/images/0/02/Question_Block_NSMB.png/revision/latest/scale-to-width-down/350?cb=20151206055532&path-prefix=en')
}

function draw() {
  background(220);
  moveCircle();
  movePanel();
}

function moveCircle() {
  fill('red');
  circle(circleX, circleY, 10);
  
  if (circleX >= WIDTH || circleX <= 0) {
    vX = - vX;
  }
  if (circleY >= HEIGHT || circleY <= 0) {
    vY = - vY;
  }

  if ((5 + circleX >= panelX) &&
     (circleX <= panelX + 100) &&
     (circleY) &&
     ()
   ) {
    vY = - vY;
  }
  circleX = circleX + vX;
  circleY = circleY + vY;
}

function movePanel() {
  fill('green');
  if (keyIsDown(LEFT_ARROW)) {
    panelX = panelX - 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    panelX = panelX + 5;
  }
  panelX = mouseX;
  rect(panelX, panelY, 100, 10);
  image(image_panel, panelX , panely)
  
  
}