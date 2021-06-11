var sd = 60
var mean = 320

function setup() {
  createCanvas(640, 360);
  background(50);
}

function draw() {
  var num = randomGaussian(mean, sd)

  noStroke();
  fill(255, 10)
  ellipse(num, 180, 16, 16);
}
