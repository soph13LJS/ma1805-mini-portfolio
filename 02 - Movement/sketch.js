let clickCount = 0;
let circles = [];

function setup() {
  createCanvas(400, 300);
  textSize(18);           
}

function draw() {
  background(143,188,143);
  fill(222,184,135);
  noStroke();
circle (200, 170, 250);
   fill(240,230,140);
circle (200, 170, 220);

  
  fill(0); 
  text("Pepperoni Count: " + clickCount, 120, 30);

  for (let c of circles) {
    fill(c.color);
    noStroke();
    ellipse(c.x, c.y, c.size);
  }
}

function mouseClicked() {
  clickCount++;
  let newCircle = {
    x: mouseX,
    y: mouseY,
    size: (20),
    color: color(178,34,34)
  };
  circles.push(newCircle);
}
