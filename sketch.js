function setup() {
  createCanvas(900, 800);
   background("white");
}

function draw() {
  stroke("orange");
  fill("gold");
  
  
  if(mouseIsPressed) {
    rect(mouseX, mouseY, 40, 40, 40);
  }
}