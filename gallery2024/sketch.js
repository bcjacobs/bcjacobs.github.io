var buttons = [];
var yPos = 0;
var overflow = false;
var boarder;

var student = [
  ["BryanJacobs", "https://bcjacobs.github.io/jacobs/"],
  ["AviKrishan", "https://editor.p5js.org/krishan.fred/full/s5lEa_LSm"],
  ["XinyaoChen", "https://editor.p5js.org/xchen4061/sketches/UUuwuWk-X"],
  ["YunxianZhang", "https://editor.p5js.org/YunxiangZhang/full/T7Hi57VGX"],
  ["BaoqiZhao", "https://editor.p5js.org/Baoqi/sketches/GMiPOjGz7"],
  ["YumanWu", "https://editor.p5js.org/yumanwu/sketches/wTsg7L59y"],
  ["SooHyunBahn", "https://editor.p5js.org/sbahn2/full/WrKDR3rOK"],
  [
    "ShashaChen",
    "https://editor.p5js.org/thewolrdisyouroyster/sketches/lIRiqoUWB",
  ],
  ["JosephGipple", "https://editor.p5js.org/CaptainBarjoser/full/jSZpIq5uJ"],
  ["MarcusHart", "https://editor.p5js.org/mhart1127/full/LtFfMW2XG"],
  ["png", "https://editor.p5js.org/tjorda23/full/HBLTFLgrs"], // TylerJordan
  ["png", "https://editor.p5js.org/aosuhdsaodh/sketches/IbiagiG-M"], // ZiQiLi
  ["ZhitaoLin", "https://editor.p5js.org/zitroll1224/full/jn3_WKupJ"],
  ["DerrickPeng", "https://editor.p5js.org/Sitbear/full/FNyZ4wyw_"],
  ["HengyiWang", "https://editor.p5js.org/henry21/full/HVNi5wv63"],
  ["GeneYi", "https://editor.p5js.org/GeneYi/full/QjNMoLcbT"],
  ["JoannaZheng", "https://editor.p5js.org/Joanna03/full/VniEkFGRi"],
  ["YuanZheng", "https://editor.p5js.org/YuanZheng/sketches/OACVtL76r"],
  ["png", "https://editor.p5js.org/zvosher/full/Mx5LeetK8"], // ZiviOsher
  ["png", "https://editor.p5js.org/Xiyao-create/full/m23lcmjf7"], //XiyaoTu,
  ["png", "https://editor.p5js.org/subject9point3/sketches/CzmVnPF8D"], //BenjaminStewart
  ["png", "https://editor.p5js.org/yqian/full/335wSa6BR"], //YuntianQian
  [
    "Chien-YuanCheng",
    "https://github.com/Chien-Yuan/FInal-Websocket-Connection",
  ],
  ["XiwenFan", "https://editor.p5js.org/gxc0203/full/GXIaWzOuD"],
  ["RobGreaney", "https://editor.p5js.org/Rgreane1/full/7I-JISGkv"],
  ["YuYuHsiao", "https://editor.p5js.org/yuyuhsiao/full/RQ3eXHEov"],
  ["png", "https://editor.p5js.org/CJ608/sketches/QIdn21asm"], //ChenxingJi,
  ["YiLao", "https://editor.p5js.org/CJ608/sketches/QIdn21asm"],
  ["png", "https://editor.p5js.org/ehartzler/sketches/OFbMTiGEF"], //EliotHartzler
  ["NikkoMusuraca", "https://editor.p5js.org/nikkomusuraca/full/IU0VvyThS"],
  ["png", "https://editor.p5js.org/MaxWang/sketches/F4jAyztlX"], //ZhenghaoWang
  ["YunxiangZhang", "https://editor.p5js.org/YunxiangZhang/full/T7Hi57VGX"],
];

var img;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("courier");

  boarder = (width % 200) / 2;

  for (i = 0; i < student.length; i++) {
    buttons[i] = new linkImages(
      ((i * 200) % (int(width / 200) * 200)) + boarder,
      int((i * 200) / width) * 200 + 70,
      student[i][0],
      student[i][1]
    );
  }
  textSize(45);
  fill(0, 102, 153);
  text("2024 PEABODY Intro to Programming", int(boarder), 50);
}

function draw() {
  for (i = 0; i < student.length; i++) {
    buttons[i].make();
  }
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
    this.button = loadImage("images/" + name + ".png");
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
    console.log(this.link);
    window.open(this.link);
  }
}

function windowResized() {}
