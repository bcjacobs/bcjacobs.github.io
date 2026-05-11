var students = [
 
["jude", "https://racookitty2.github.io/Programming-Final---Granular-Synth/"],
 
  
["lisa", "https://chenglisa18.github.io/repositoryfinalprojectlisacheng/"],
["marco", "https://clayboimari.github.io/Final-Project/"],
["camryn", "http://camryndavis-bot.github.io/Castle-Builder-Dark-Fantasy-Fortress/"],
["rayna", "https://raykavalauskas-creator.github.io/TheMeowMatrix/"],
["zihan", "https://harlylin2025-creator.github.io/zihanlin/"],
["jaxx", "https://jaxxplease.github.io/Zooniverse/"],
["zoe", "https://zoeshack.github.io/Zoe-Shack-Final-Project/"],
["joe", "https://exventory.github.io/MouseMoods/"],
["carina", "https://carneedssomerest.github.io/Soundscape-in-the-Mist/"],
["tungchin", "https://chinn6689.github.io/Acoustic-Ripples/"],
["jackson", "https://jacksonhollo.github.io/introtoprogrammingfinal/"],
["alexm", "https://sushirolls-am.github.io/chooseyourfate_visualizer/"],
  ["greg", "https://gregehrhardt.github.io/Spring-2026-Intro/"],
  
["hayley", "https://hayleycamp.github.io/ProgrammingProject/"],
["bolai", "https://victor-art-gif.github.io/introTest/"],
["yichen", "https://angelosalsas.github.io/YichenLiu-SixShot/"],
["alexb", "https://backa3090.github.io/IntroCoding/"],
["obie", "https://editor.p5js.org/osfeldi/sketches/rtja3ADzZ"],
["jay", "https://jay-ding216.github.io/Final-projectSnakkkkeeee/"],
  
["justice", "https://justicewastakenunfortunately.github.io/ITP-FinalProject-WaveSim-JN/"],
["willow", "https://wotten2.github.io/intro2programmingclass/"],
["miaoge", "https://ylin35.github.io/Visualizer/"]
  
  
  
];

let gallery = [];
let img = [];
let button;
let isDark = false;
const thumbnail = 240;
const padding = 30;

function preload() {
   for (i = 0; i < students.length; i++) {
     let name = students[i][0];
  img[i] = loadImage("images/" + name + ".png");
   }
}


function setup() {
  
  createCanvas(windowWidth, windowHeight)
  
  button = createButton('toggle mode');
  button.position(windowWidth - 150, 45);
  
  button.mousePressed(toggleMode);

  calculateLayout();
}

function toggleMode() {
  isDark = !isDark;
}

function draw() {
  let bgColor = isDark ? 20:255;
  let txtMain = isDark ? 225:0;
  let txtSub = isDark ? 225:0;

  background(bgColor);
  cursor(ARROW);

  textAlign(LEFT, TOP);
  textFont("courier");
  textStyle("bold")
  fill(txtMain);
  textSize(28);
  text("PEABODY 2026", padding, 40);

  fill(txtSub);
  textSize(14);
  text("INTRO TO PROGRAMMING // FINAL GALLERY", padding, 75);

  textAlign(RIGHT,CENTER);
  textSize(10);
  text(isDark ? "DARK MODE" : "LIGHT MODE", width - 160, 53);

  gallery.forEach(card => card.display(isDark));
}

function  calculateLayout(){
  gallery = []
  let cols = floor((width - padding) / thumbnail);
  let startX = (width - (cols * thumbnail)) / 2;
  let startY = 140;

  students.forEach((s,i) => {
    let x = startX + (i % cols) * thumbnail;
    let y = startY + floor(i / cols) * thumbnail;
    gallery.push(new linkImages(x, y, s[0], s[1], img[i]));
  });
  
  let rows = ceil(students.length / cols);
  let newheight = startY + (rows * thumbnail) + padding;
  
  resizeCanvas(windowWidth, newheight);
}

function mousePressed() {
  gallery.forEach(card => {
    if (card.isHovered()) {
      card.goToLink();
    }
  })
}

class linkImages {
  constructor(x, y, name, link, img) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.link = link;
    this.img = img;
  }

  isHovered(){
    return mouseX > this.x && mouseX < this.x + 200 && 
           mouseY > this.y && mouseY < this.y + 200;
  }

  display(isDark){
    let hovering = this.isHovered();

    push();
    translate(this.x, this.y);

    noStroke();

    // Image
    if(this.img){
      if(hovering){
        tint(200);
        cursor(HAND);
      }
      else{
        noTint();
      }
      image(this.img, 0, 0, 200, 200);
    }

    // Label
    if (isDark) {
      fill(hovering ? 100 : 255); 
    } else {
      fill(hovering ? 0 : 100);
    }
    textAlign(LEFT, BOTTOM);
    textSize(11);
    text(this.name.toUpperCase(), 0, -5);

    if(hovering) cursor(HAND);
    pop();
  }

  goToLink() {
    window.open(this.link);
  }
}