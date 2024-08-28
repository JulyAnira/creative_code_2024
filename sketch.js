console.log("this message is from sketch.js");
let weight = 0;


function setup() {
  createCanvas(400, 400);
  frameRate(12);
}

function draw() {
  background(10, 20, 200, 40);
  weight = dist(mouseX, mouseY, pmouseX, pmouseY);
  fill(200,10,10,20);
  stroke(200,100,100,100);
  line(mouseX, mouseY, pmouseX, pmouseY);
  ellipse(pmouseX, pmouseY, 30)
  
}
