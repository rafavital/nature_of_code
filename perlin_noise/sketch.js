var noiseOffset1 = 0;
var noiseOffset2 = 10000;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

  let x = noise(noiseOffset1) * width;
  let y = noise (noiseOffset2) * height;
  noiseOffset1 += 0.01;
  noiseOffset2 += 0.01;

  ellipse(x, y, 20,20)

}
