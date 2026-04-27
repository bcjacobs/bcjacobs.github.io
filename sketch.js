var mode = 0;
let img;
let osc;
let scanX = 0;
let probes = []; // Objects to store x, y, and speed
let bright;
let myTypes = ["square", "triangle", "sawtooth", "sine"];

let oscillators = [];
const numOscs = 5;

function setup() {
  
 
  
  let c = createCanvas(windowWidth, windowHeight);

  splash = new Splash();
  // splash = new Splash();
  
  // c.drop(gotFile);
  
    textAlign(CENTER);
  fill(255);

  for (let i = 0; i < numOscs; i++) {
    let osc = new p5.Oscillator(myTypes[int(random(0, 3))]);
    osc.start();
    osc.amp(0);
    oscillators.push(osc);

    osc.pan(map(i, 0, numOscs - 1, -1, 1));
    oscillators.push(osc);
    reverb = new p5.Reverb();
    osc.disconnect();
    reverb.process(osc, 3, 2);

    probes.push({
      x: random(width),
      y: random(height),
      vx: random(0.5, 1.5),
      vy: random(-0.2, 0.2),
    });
  }
}

function draw() {
  if (mouseIsPressed == true && splash.update() == true) {
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

function gotFile(file) {
  if (file.type === "image") {
    img = createImg(file.data, "").hide();
    loadImage(file.data, (newImg) => {
      img = newImg;
      img.loadPixels();
    });
  } else {
    console.log("Not an image file!");
  }
}


