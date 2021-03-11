var i = 0.01
var start = 0
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

  noFill()
  xoff = start;
  beginShape()
  for (let x = 0; x < width; x++) {
    stroke (255)
    vertex(x, noise(xoff) * height)
    xoff += i
  }
  endShape()

  start += i

}
