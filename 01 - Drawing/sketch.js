function setup() {
  createCanvas(400, 400);
  background(200);

}

function draw() {
//  background(200);
   let C = color (255, 204, 0); 
  let C1 = color (0, 0, 0); 
    let C2 = color (255, 195, 0); 
     let C3 = color (255, 255, 255); 
  
  
  fill (C);
   noStroke();
   circle (200, 190, 250);

    fill (C1);
    noStroke();
    circle(160, 170, 50, 50);
   fill (C1);
   circle(240, 170, 50, 50);

  fill (C2);
    noStroke();
    circle(120, 220, 70, 70);
  fill (C2);
    noStroke();
    circle(280, 220, 70, 70);
   fill (C1);
   circle(240, 170, 50, 50);

  fill(C3);
  circle(250, 160, 10, 10);
    fill(C3);
  circle(170, 160, 10, 10);
  fill(C3);
  circle(230, 180, 5, 5);
   fill(C3);
  circle(150, 180, 5, 5);

  stroke(C1);
  strokeWeight(5);
  line(140, 225, 260, 225);
  strokeWeight(5);
  line(140, 215, 140, 235);
   strokeWeight(5);
  line(260, 215, 260, 235);
   strokeWeight(4);
  line(140, 135, 180, 135);
  strokeWeight(4);
  line(220, 135, 260, 135);
 
  
}