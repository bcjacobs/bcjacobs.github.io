let audioStarted = false; // needed to get it to work in full screen mode

let lowLevels;
let highLevels;

let fft;

let mic;

let spectrum;

function preload(){
  sound = loadSound('drumLoop.mp3');
}

function setup() {
  
  getAudioContext().suspend(); // needed to get it to work in full screen mode
  
  fullscreen();
  
  createCanvas(710, 400, WEBGL);
  // sound.play();
  
  fft = new p5.FFT();
  mic = new p5.AudioIn();
  mic.start()
  
  fft.setInput(mic);
}

function draw() {
  

  
  
  background(255);
  
  
  spectrum = fft.analyze();
  
  // console.log(spectrum);
  
  // console.log(mic.getLevel());
  
  lowLevels = spectrum[10];
  highLevels = spectrum[500];
  
  
  push();
  translate(-150, 0, 0);
  // rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(lowLevels, 20);
  pop();
  
  push();
  translate(150, 0, 0);
  // rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(highLevels , 20);
  pop();
}

function mousePressed() { // needed to get it to work in full screen mode
    // Start audio on user gesture
    if (!audioStarted) {
        userStartAudio();
        audioStarted = true;
    }
}