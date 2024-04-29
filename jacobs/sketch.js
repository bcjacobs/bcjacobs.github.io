// 2d soundfield

let playHeadCount1= 0;
let playHeadSpeed1= 3;

let playHeadCount2= 0;
let playHeadSpeed2= 2;

let boxies = [];

var mode = 0;

var numOfBoxes = 20;

var lowFreq = 500;
var highFreq = 1200;

let audioStarted = false; // needed to get it to work in full screen mode. Add in the variable section

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i = 0; i < numOfBoxes; i++) {
    boxies.push(new box(random(height), random(width), 10));
  }

  
   splash = new Splash();
  getAudioContext().suspend(); // needed to get it to work in full screen mode. Add in setup
}

function draw() {
  
    if (mouseIsPressed == true) {
    mode = 1;
  }
  
    if (mode == 1) {
    splash.hide();
  
  background(0);
  
  for (let i = 0; i < boxies.length; i++) {
    boxies[i].make();
    boxies[i].update();
  }
  
  playHeadCount1 = playHeadCount1 + playHeadSpeed1;
  playHeadCount2 = playHeadCount2 + playHeadSpeed2;
  
  if (playHeadCount1 > height){
    playHeadCount1 = 0;
  }
  
  if (playHeadCount2 > width){
    playHeadCount2 = 0;
  }
  
  // Playhead
  stroke(255);
  line(0, playHeadCount1, width, playHeadCount1);
  line(playHeadCount2, 0, playHeadCount2, height);
    } 
}

function splash() {
  // background(222, 222, 0);
  fill(222, 222, 0);
  noStroke();
  rect(50, 50, windowWidth-100, windowHeight-100);
  fill(0, 0, 222);
  text("This is my splash screen", width / 2, height / 2);
}

class box{
  constructor(tempX, tempY, tempSize=50){
    this.x = tempX;
    this.y = tempY;
    this.size = tempSize;
    
    this.osc = new p5.Oscillator('sine');
    this.osc.start();
    this.osc.amp(0);
    this.osc.pan(random(-0.5, 0.5))
    
    this.frequancy = map(this.y, windowHeight, 0, lowFreq, highFreq);
    
    this.clicked = false;
    
    this.env = new p5.Envelope(.5, .02, 2, 0.00)
    
    this.playHeadOver = false;
    this.prevPlayHeadOver = false;
    
  }
  
  make(){
    noStroke();
    fill(255, random(0, 200), 0, 50)
    for(let i=0; i<10; i++){
      circle(this.x, this.y, this.size+i*3)
    }
  }
    
  update(){
    if (playHeadCount1 > this.y - 20 && playHeadCount1 < this.y + 20 ||
      playHeadCount2 > this.x - 20 && playHeadCount2 < this.x + 20){
    this.playHeadOver = true;
    }
    else{
      this.playHeadOver = false;
    }
    if(this.playHeadOver == true && this.prevPlayHeadOver != true){
    this.env.play(this.osc);
    this.osc.freq(map(this.y, windowHeight, 0, lowFreq, highFreq))

    }
    

    this.prevPlayHeadOver = this.playHeadOver;
  }
  
  overBox(){
    if (
    mouseX > this.x - this.size &&
    mouseX < this.x + this.size &&
    mouseY > this.y - this.size &&
    mouseY < this.y + this.size
  ) {
    this.clicked = true;
    }
    else{
      this.clicked = false;
  }
    // return this.clicked;

  }
  
  move(){
    this.x = mouseX;
    this.y = mouseY;
  }
  
}

function mousePressed(){
  
      if (!audioStarted) {
        userStartAudio();
        audioStarted = true;
        mode = 1;
    }
  
  for (let i = 0; i < boxies.length; i++) {
    boxies[i].overBox()
    }
  }


function mouseDragged(){
  for (let i = 0; i < boxies.length; i++) {
    if(boxies[i].clicked){
    boxies[i].move();
    }
  }
}


