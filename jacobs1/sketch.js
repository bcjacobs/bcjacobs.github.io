let audioStarted = false; // needed to get it to work in full screen mode

var levelsLow;
var levelsHigh;

function preload(){
  sound = loadSound('drumLoop.mp3');
}



function setup() {

  getAudioContext().suspend(); // needed to get it to work in full screen mode

  
  createCanvas(710, 400, WEBGL);
  
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
    line(i-355, -200, i-355, 200);
  }


  push();
  translate(-150, 0, 0);
  // rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(levelsLow, 20);
  pop();
  
  push();
  translate(150, 0, 0);
  // rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(levelsHigh , 20);
  pop();
  
}

function mousePressed() { // needed to get it to work in full screen mode
    // Start audio on user gesture
    if (!audioStarted) {
        userStartAudio();
        audioStarted = true;
    }
}
