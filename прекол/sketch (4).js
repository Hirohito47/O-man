let eartSize = 150;
let moonSitze = 50;

let angle = 0;
let distance = 200;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(32);
  
  angle++;
  
  let moonX = width / 2 + cos(radians(angle))  * 
distance;
  let moonY = height / 2 + sin(radians(angle)) * 
distance;
  
  circle(width / 2, height / 2, 100);
  textSize(eartSize)
  text('🌏', width / 2, height / 2);
  
  textSize(moonSitze)
  
  circle(moonX, moonY, 50);
  
}