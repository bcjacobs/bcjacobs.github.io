var mode = 0;

let audioStarted = false; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  splash = new Splash();
  getAudioContext().suspend();
}

function draw() {
  if (mouseIsPressed == true) {
    mode = 1;
  }
  if (mode == 1) {
    splash.hide();
    
    // your code here
    background(255);
    fill(100);
    noStroke();
    rect(50, 50, windowWidth - 100, windowHeight - 100);
    fill(0);
    ellipse(mouseX, mouseY, 20, 20);
  }
}

/////////////////

function mousePressed() { 
    if (!audioStarted) {
        userStartAudio();
        audioStarted = true;
    }
}



