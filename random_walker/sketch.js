
var x, y, step
function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
  background(50)
  step = 1
}

function draw() {
  stroke(255)
  strokeWeight(2)
  point(x, y)

  let r = floor(random(4))
  step = randomGaussian(4, 2)

  switch (r) {
    case 0:
      x += step;
      break;

    case 1:
      x -= step;
      break;

    case 2:
      y += step
      break;

    case 3:
      y -= step;
      break;
  }
}
