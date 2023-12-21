const WIDTH = 400, HEIGHT = 400;

let circleX = 10;
let circleY = 30;
let panelX = 0;
let panelY = HEIGHT - 40 - 100;
let vX = 4;
let vY = 4;
let blocks = [
  {
    x: 150,
    y: 80,
  },
  {
    x: 100,
    y: 80,
  },
  {
    x: 200,
    y: 80,
  },
  {
    x: 250,
    y: 80,
  },
  {
    x: 300,
    y: 80,
  },
  {
    x: 50,
    y: 80,
  },
];
 

let img1 = null;
let img2 = null;


function setup() {
  createCanvas(WIDTH, HEIGHT);
  frameRate(30);
  img1 = loadImage('https://static.wikia.nocookie.net/nintendo/images/0/02/Question_Block_NSMB.png/revision/latest/scale-to-width-down/350?cb=20151206055532&path-prefix=en');
  img2 = loadImage('https://render.fineartamerica.com/images/rendered/medium/flat/ornament/images/artworkimages/medium/3/the-witcher-3-wild-hunt-blood-and-wine-nguyen-hai.jpg?&targetx=-445&targety=0&imagewidth=1475&imageheight=830&modelwidth=584&modelheight=830&backgroundcolor=2E3031&orientation=0&producttype=ornament-wood-oval');
}

function draw() {
  background(220);
  moveCircle();
  movePanel();
  for (let i = 0; i < blocks.length; i++) {   
        image(img1, blocks[i].x, blocks[i].y, 100, 20);

    if (isBallTouched(circleX, circleY, 10, blocks[i].x, blocks[i].y, 100, 20)) {
   
      blocks.splice(i, 1);
      vY = -vY;
    }
  }
  
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
  
  if (isBallTouched(circleX, circleY, 10, panelX, panelY, 100, 30)) {
    vY = -vY;
    console.log('catch');
  }

  circleX = circleX + vX;
  circleY = circleY + vY;
  // circleX = mouseX;
  // circleY = mouseY;
}

function movePanel() {
  fill('green');
  if (keyIsDown(LEFT_ARROW)) {
    panelX = panelX - 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    panelX = panelX + 5;
  }
  image(img1, panelX, panelY, 100, 30);
  // rect(panelX, panelY, 100, 30);
}

function isBallTouched(circleX, circleY, circleD, rectX, rectY, rectW, rectH) {
  if ((circleX - (circleD / 2) > rectX) &&
     (circleX + (circleD / 2) < rectX + rectW) &&
     (circleY - (circleD / 2) > rectY) &&
     (circleY + (circleD / 2) < rectY + rectH)) {
    return true;
  }
  
  return false;
}