// 2d soundfield

let playHeadCount1= 0;
let playHeadSpeed1= 5;

let playHeadCount2= 0;
let playHeadSpeed2= 5;

let boxies = [];

function setup() {
  
  var cnv = createCanvas(720, 400);
  var x = (windowWidth - width) / 2;
//  var y = (windowHeight - height) / 2;
  cnv.position(x, 100);
  
  for (let i = 0; i < 100; i++) {
    boxies.push(new box(random(720), random(400), 5));
  }
 getAudioContext().resume(); // this was for a problem with chrome
}

function draw() {
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

class box{
  constructor(tempX, tempY, tempSize=20){
    this.x = tempX;
    this.y = tempY;
    this.size = tempSize;
    
    this.osc = new p5.Oscillator('sine');
    this.osc.start();
    this.osc.amp(0);
    
    this.frequancy = random(300, 350);
  }
  
  make(){
    noStroke();
    square(this.x, this.y, this.size)
  }
    
  update(){
    if (playHeadCount1 > this.y - 20 && playHeadCount1 < this.y + 20 ||
      playHeadCount2 > this.x - 20 && playHeadCount2 < this.x + 20){
    this.osc.amp(.06, .1);
    this.osc.freq(this.frequancy);
  } else {this.osc.amp(.0, .1);}
  }
  
  move(){
    if (
    mouseX > this.x - this.size &&
    mouseX < this.x + this.size &&
    mouseY > this.y - this.size &&
    mouseY < this.y + this.size
  ) {
    this.x = mouseX;
    this.y = mouseY;
  }
  }
}

function mouseDragged(){
  for (let i = 0; i < boxies.length; i++) {
    boxies[i].move();
  }
  console.log("test");
}
