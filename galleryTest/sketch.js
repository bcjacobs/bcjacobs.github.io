var mode = 0;

let audioStarted = false; // needed to get it to work in full screen mode. Add in the variable section

function setup() {
  createCanvas(windowWidth, windowHeight);
  splash = new Splash();
  getAudioContext().suspend(); // needed to get it to work in full screen mode. Add in setup

  filter = new p5.BandPass();
  noise = new p5.Noise();
  noise.disconnect();
  noise.connect(filter);
  noise.start();
  noise.amp(0.5, 0.2);
  
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
    
      let freq1 = map(mouseX, 0, width, 20, 10000);
  filter.freq(freq1);
  // give the filter a narrow band (lower res = wider bandpass)
  filter.res(10);
  }
}

function mousePressed() { // needed to get it to work in full screen mode. Add in mousePressed()
    // Start audio on user gesture
    if (!audioStarted) {
        userStartAudio();
        audioStarted = true;
        mode = 1;
    }
}



