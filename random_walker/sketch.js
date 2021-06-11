let walker
var step

function setup() {
  createCanvas(400, 400);
  background(50)

  step = 1
  walker = new Walker(200, 200)
}

function draw() {
  let r = floor(random(4))
  //step = randomGaussian(4, 2)
  step = monteCarlo() * 5

  switch (r) {
    case 0:
      walker.velocity.x = step;
      break;

    case 1:
      walker.velocity.x = -step;
      break;

    case 2:
      walker.velocity.y = step
      break;

    case 3:
      walker.velocity.y = -step;
      break;
  }

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



