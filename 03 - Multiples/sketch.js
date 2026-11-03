let textX, textY;
let i = 0;
let words = ['LOADING...', 'still loading...', 'still loading sorry', 'almost there', 'error', 'load failed'];
let lines = [];

function setup() {
  createCanvas(500, 500);
  
  textSize(22);
  background (0, 0, 80);
    }


function draw() {  
  background(10,0,130,25);
  fill(255, 255, 255);
  text(words[i], 150, 30);

  for(let i = 0; i < lines.length; i++){
    text(lines[i], 50, 100 + i * 20);
  }
}

function mouseClicked() {
      i++;
  if(i>=words.length){
    i=0;
  }
    let next = words[lines.length % words.length];
    lines.push(next);
}