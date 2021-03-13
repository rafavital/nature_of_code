
var pos = createVector(0,0)
function setup() {
  createCanvas(400, 400);
  pixelDensity(1)
}

function draw() {  
  background(50)
  loadPixels()
  pos.x = width / 2
  pos.y = height / 2
  pixels[pos.x * pos.y * 4] = 255
  
}
