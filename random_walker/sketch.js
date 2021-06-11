let walker
var step

function setup() {
  createCanvas(400, 400);
  background(50)

  step = 1
  walker = new Walker(createVector(200, 200))
}

function draw() {

  step = p5.Vector.random2D().mult(2)

  let r = random(1)
  if (r < 0.01) {
    step = random(25, 100)
  }
  walker.velocity = step
  walker.update()
  walker.draw()
}

function monteCarlo() {
  while (true) {
    var r1 = random(1)
    var p = r1
    var r2 = random(1)
    if (r2 < p)
      return r1
  }
}



