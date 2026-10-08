function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('display', 'block');
  canvas.style('position', 'fixed');
  canvas.style('top', '0');
  canvas.style('left', '0');
  canvas.style('z-index', '0');
  canvas.style('pointer-events', 'none');

  pixelDensity(1);
  noLoop();
}

function draw() {
  background(6, 18, 28);

  stroke(146, 175, 202, 20);
  strokeWeight(1);

  for (let x = 0; x < width; x += 52) {
    line(x, 0, x, height);
  }

  for (let y = 0; y < height; y += 52) {
    line(0, y, width, y);
  }

  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
