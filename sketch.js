function setup() {
  createCanvas(500, 400);
  background("green");
}

function draw() {
  stroke("red");
  fill("yellow");
  if (mouseIsPressed){
    rect (mouseX, mouseY, 100, 200);
}
}
