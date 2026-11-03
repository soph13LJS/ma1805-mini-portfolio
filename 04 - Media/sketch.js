let hum1;
let hum2;
let img;
let video;
let showingVideo = false;

function preload(){
  hum1 = loadSound("meow.mp3");
  hum2 = loadSound("eating.mp3");
  img = loadImage('angryCat.jpg');
  video = createVideo('catEating.mp4');
  video.hide();
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  hum1.loop();
}

function draw() {
  background(0);
  
  if(!showingVideo){
    image(img, 0, 0, width, height);
  }else{
    image(video, 0, 0, width, height);
  }
}

function mousePressed(){
  if(!showingVideo){
    showingVideo = true;
    if(hum1.isPlaying()){
      hum1.stop();
    }
    hum2.loop();
    video.loop();
  }else{
    showingVideo = false;
    if(hum2.isPlaying()){
      hum2.stop();
    }
    video.stop();
    hum1.loop();
  }
}
