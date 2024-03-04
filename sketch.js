let audioStarted = false; // needed to get it to work in full screen mode

var levelsLow;
var levelsHigh;

function preload(){
  sound = loadSound('drumLoop.mp3');
}



function setup() {

  getAudioContext().suspend(); // needed to get it to work in full screen mode

  
  // createCanvas(710, 400, WEBGL);
  
  createCanvas(displayWidth, displayHeight, WEBGL);
  
  fft = new p5.FFT();
  sound.play();
  sound.amp(0.2);
}

function draw() {
  background(255);
  
  let spectrum = fft.analyze();
  
  if(spectrum[10] > 100){
    levelsLow = spectrum[10];
  }
  
  if(spectrum[200] > 100){
    levelsHigh = spectrum[200];
  }
 
  for (let i=0; i<width; i=i+7){
    line(i-(width/2), -height/2, i-(width/2), height/2);
  }


  push();
  translate(-width/4, 0, 0);
  // rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(levelsLow+ width/100, width*.015);
  pop();
  
  push();
  translate(width/4, 0, 0);
  // rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(levelsHigh+ width/100 , width*.015);
  pop();
  
}

function mousePressed() { // needed to get it to work in full screen mode
    // Start audio on user gesture
    if (!audioStarted) {
        userStartAudio();
        audioStarted = true;
    }
}
