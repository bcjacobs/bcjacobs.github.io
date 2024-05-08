var buttons = [];
var yPos = 0;
var overflow = false;
var boarder;
var img = [];
var column

var student = [
  ["bryanjacobs", "https://bcjacobs.github.io/jacobs"],
  ["gainesjordan", "https://jgaine16.github.io/Audio-Images/"],
  ["haosiyuan", "https://siyuanhao2004.github.io/SiyuanHaoRefined/"],
  ["litian", "https://ypo123.github.io/Monk_Synth/"],
  ["tianqi", "https://daysonyang.github.io/3D-synthesizer/"],
  ["wangqihao", "https://myshadowgithub.github.io/My_P5JS_Final_Project/OnlineKeyboard/"],
  ["yiting", "https://naw9nawnaw.github.io/Shader1-With-Sound-by-Nawmel/"],
  ["fionawu", "https://fionawu1212.github.io/p5jsFinal/Final_2024/"],
  ["yangmengyi", "https://mengyi0830.github.io/Programming_Final_Project_Reverb/"], 

  ["faisalaletani", "https://faisalaletani.github.io/CYMATICS-of-MAQAM/"], 
  ["askewjonah", "https://jozartmusic.github.io/FinalProjectNotFinished/"], 
  ["benjin", "https://mjin27.github.io/final/"], 
  ["sambroomell", "https://sbroomell.github.io/FinalProject/"], 

  ["michaelchase", "https://m-a-c-m-a-c.github.io/Procedural-Sequencer/"], 
  ["louischavasse", "https://novedeht.github.io/The-Looper/"], 
  ["claire", "https://claireduuu.github.io/p5jsFinalproject/"], 
  ["rossleo", "https://aeyth1.github.io/flappy-bird/"], 
  ["fujulia", "https://juliafu420.github.io/the-maze-runner/"], 
  ["jeonjiwoong", "https://wjswldndfpdh.github.io/ITP-final/Jiwoong_Jeon_final_project_2024_05_06_21_12_44/"], 
  ["jiangxinyu", "https://editor.p5js.org/inorijam/full/vtaCiY21a"], 

  ["quigleybianca", "https://biancaquig.github.io/Color_Synthesizer/3/"], 
  ["sad", "https://asheaquiles.github.io/Chris-Ale-FINAL-project-V2/"], 
  ["louisshen", "https://louisshen1.github.io/p5jsTest1/Virtual%20Piano/"], 
  ["zhangjustin", "https://justinzhangjx.github.io/SYNTHZIV/synthziv/"], 
  ["liuandrea", "https://andrealiu1002.github.io/Final-Proj/"], 
  ["andreasimons", "https://andrjjj.github.io/maze-generator/"], 
 
  
];

function preload() {
   for (i = 0; i < student.length; i++) {
     let name = student[i][0];
  img[i] = loadImage("images/" + name + ".png");
   }
}


function setup() {
  
  
  textFont("courier");

  boarder = int((width % 200) / 2);
  
  createCanvas(windowWidth, 2000);
  


  
  for (i = 0; i < student.length; i++) {
    positions = (i*200)
    numOfColumn = int(width/200)
    row = i % numOfColumn
    column = int(i / numOfColumn)
    
      buttons[i] = new linkImages(
      row*200+boarder,
      column*200+90,
      img[i],
      student[i][1]
    );
  }
  
  
  
  textSize(45);
  fill(0, 102, 153);
  text("2024 PEABODY Intro to Programming", int(boarder), 50);
  strokeWeight(5);
  stroke(0, 102, 153)
  line(int(boarder), 65, width-boarder, 65)


  for (i = 0; i < student.length; i++) {
    buttons[i].make();
    
  }
// console.log(buttons[1])


}


function draw() {

}

function mousePressed() {
  for (i = 0; i < student.length; i++) {
    if (buttons[i].intersect() === true) {
      buttons[i].goToLink();
    }
  }
}

class linkImages {
  constructor(posX, posY, name, link) {
    this.name = name;
    this.link = link;
    this.posX = posX;
    this.posY = posY;
    // this.button = createImg('images/'+name+'.png', this.name);
    // this.button = loadImage("images/" + name + ".png");
  this.button = name;
  }
  make() {
    image(this.button, this.posX, this.posY, 195, 195);
    
  }
  intersect() {
    return (
      mouseX >= this.posX &&
      mouseX <= this.posX + 200 &&
      mouseY >= this.posY &&
      mouseY <= this.posY + 200
    );
  }
  goToLink() {
//     console.log(this.link);
    window.open(this.link);
  }
}

// function windowResized() {}
