let walker1
let x,y
let r,g,b

function setup() {
  createCanvas(400,400);
  pixelDensity(1)
  
  x = random(400)
  y = random(400)
  r = random(255)
  g = random(255)
  b = random(255)
  
  background(51)  
}

function draw() {  
  loadPixels()
  
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (x == this.x && y == this.y)
      {
      let pixel_id = (x + y * width) * 4

      pixels[pixel_id]     = r
      pixels[pixel_id + 1] = g
      pixels[pixel_id + 2] = b
      pixels[pixel_id + 3] = 255
        }
    }
    
  }

  let pixel_id = (x + y * width) * 4

  pixels[pixel_id]     = r
  pixels[pixel_id + 1] = g
  pixels[pixel_id + 2] = b
  pixels[pixel_id + 3] = 255

  updatePixels()

  let rand = floor (random(4))

  switch (rand) {
      case 0:
      x ++;
      break;

      case 1:
      x--;
      break;

      case 2:
      y++      
      break;
      
      case 3:
      y--;
      break;
  }
}