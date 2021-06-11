var rMean, gMean, bMean
var sd = 60

function setup() {
  createCanvas(640, 360)
  background(50)
  rMean = random(0, 255)
  gMean = random(0, 255)
  bMean = random(0, 255)
}

function draw() {
  var x = randomGaussian(320, sd)
  var y = randomGaussian(180, sd)
  var r = randomGaussian(rMean, sd)
  var g = randomGaussian(gMean, sd)
  var b = randomGaussian(bMean, sd)
  var a = randomGaussian(255, 30)

  noStroke()
  fill(r, g, b, a)
  ellipse(x, y, 20, 20)
}
