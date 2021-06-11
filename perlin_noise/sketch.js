var inc = 0.01
var start = 0

function setup() {
  createCanvas(400, 400);
  pixelDensity(1)
}

function draw() {
  let yoff = start
  loadPixels()
  for (let y = 0; y < height; y++) {
    let xoff = start
    for (let x = 0; x < width; x++) {
      let id = (x + y * width) * 4
      let r = noise(xoff, yoff) * 255
      pixels[id] = r
      pixels[id + 1] = r
      pixels[id + 2] = r
      pixels[id + 3] = 255

      xoff += inc
    }
    yoff += inc
  }

  start += inc
  updatePixels()
}
