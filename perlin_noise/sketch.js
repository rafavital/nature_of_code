var i = 0.01
var start = 0
function setup() {
  createCanvas(400, 400);
  pixelDensity(1)
}

function draw() {
  background(51);
  
  loadPixels()
  xoff = start;

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let id = (x + y * width) * 4
      pixels[id]      = x //red 
      pixels[id + 1]  = random(0,255) //green
      pixels[id + 2]  = random(0,255) //blue
      pixels[id + 3]  = 255 //alpha
    }
  }

  start += i

  updatePixels()
}
