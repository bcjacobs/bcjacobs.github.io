var counter = 0;
var C;
var Csharp;
var D;
var Dsharp;
var E;
var F;
var Fsharp;
var G;
var Gsharp;
var A;
var Asharp;
var B;
let valueC = 255;
let valueCsharp = 0;
let valueD = 255;
let valueDsharp = 0;
let valueE = 255;
let valueF = 255;
let valueFsharp = 0;
let valueG = 255;
let valueGsharp = 0;
let valueA = 255;
let valueAsharp = 0;
let valueB = 255;

let volumeSlider, pitchSlider;

var mode = 0;

function preload() {
  logoImage = loadImage("Mason Valentine.png");
  
  C = loadSound("C.wav");
  Csharp = loadSound("Csharp.wav");
  D = loadSound("D.wav");
  Dsharp = loadSound("Dsharp.wav");
  E = loadSound("E.wav");
  F = loadSound("F.wav");
  Fsharp = loadSound("Fsharp.wav");
  G = loadSound("G.wav");
  Gsharp = loadSound("Gsharp.wav");
  A = loadSound("A.wav");
  Asharp = loadSound("Asharp.wav");
  B = loadSound("B.wav");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  splash = new Splash();

  volumeSlider = createSlider(0, 1, 1, 0.01);
  volumeSlider.position(160, height - 325);
  volumeSlider.style("width", "200px");

  pitchSlider = createSlider(0.5, 2, 1, 0.01);
  pitchSlider.position(160, height - 275);
  pitchSlider.style("width", "200px");
}

function draw() {
  if (mouseIsPressed == true && splash.update() == true) {
    mode = 1;
  }

  if (mode == 0) {
    volumeSlider.hide();
    pitchSlider.hide();
  }

  if (mode == 1) {
    splash.hide();
    volumeSlider.show();
    pitchSlider.show();
    

    background(0);
    strokeWeight(2);
    fill(50);
    rect(50, 50, windowWidth - 100, windowHeight - 100);
    image(logoImage, width - 200, height - 500, 125, 125);

    fill(255);
    textSize(16);
    text(
      "Volume",
      volumeSlider.x + volumeSlider.width + 10,
      volumeSlider.y + 10
    );
    text("Pitch", pitchSlider.x + pitchSlider.width + 10, pitchSlider.y + 10);

    //white keys
    fill(valueC);
    keyboardC();
    fill(valueD);
    keyboardD();
    fill(valueE);
    keyboardE();
    fill(valueF);
    keyboardF();
    fill(valueG);
    keyboardG();
    fill(valueA);
    keyboardA();
    fill(valueB);
    keyboardB();

    //black keys
    fill(valueCsharp);
    keyboardCsharp();
    fill(valueDsharp);
    keyboardDsharp();
    fill(valueFsharp);
    keyboardFsharp();
    fill(valueGsharp);
    keyboardGsharp();
    fill(valueAsharp);
    keyboardAsharp();
  }
}
function mousePressed() {
  
  let volume = volumeSlider.value();
  let pitch = pitchSlider.value();

  //C
  if (mouseX > 80 && mouseX < 120 && mouseY > 100 && mouseY < 220) {
    C.setVolume(volume);
    C.rate(pitch);
    C.play();
    if (valueC == 255) {
    }
    valueC = " green";
  } else {
    if (valueC == 0) {
    }
    valueC = 255;
  }

  //Csharp
  if (mouseX > 117 && mouseX < 140 && mouseY > 100 && mouseY < 160) {
    Csharp.setVolume(volume);
    Csharp.rate(pitch);
    Csharp.play();
    if (valueCsharp == 0) {
    }
    valueCsharp = "green";
  } else {
    if (valueCsharp == 255) {
    }
    valueCsharp = 0;
  }

  //D
  if (mouseX > 140 && mouseX < 170 && mouseY > 100 && mouseY < 220) {
    D.setVolume(volume)
    D.rate(pitch)
    D.play();
    if (valueD == 0) {
    }
    valueD = "green";
  } else {
    if (valueD == 0) {
    }
    valueD = 255;
  }
  //Dsharp
  if (mouseX > 173 && mouseX < 190 && mouseY > 100 && mouseY < 160) {
    Dsharp.setVolume(volume)
    Dsharp.rate(pitch)
    Dsharp.play();
    if (valueDsharp == 0) {
    }
    valueDsharp = "green";
  } else {
    if (valueDsharp == 255) {
    }
    valueDsharp = 0;
  }
  //E
  if (mouseX > 190 && mouseX < 225 && mouseY > 100 && mouseY < 220) {
    E.setVolume(volume)
    E.rate(pitch)
    E.play();
    if (valueE == 255) {
    }
    valueE = "green";
  } else {
    if (valueE == 0) {
    }
    valueE = 255;
  }
  //F
  if (mouseX > 225 && mouseX < 270 && mouseY > 100 && mouseY < 220) {
    F.setVolume(volume)
    F.rate(pitch)
    F.play();
    if (valueF == 0) {
    }
    valueF = "green";
  } else {
    if (valueF == 0) {
    }
    valueF = 255;
  }
  //Fsharp
  if (mouseX > 267 && mouseX < 290 && mouseY > 100 && mouseY < 160) {
    Fsharp.setVolume(volume)
    Fsharp.rate(pitch)
    Fsharp.play();
    if (valueFsharp == 0) {
    }
    valueFsharp = "green";
  } else {
    if (valueFsharp == 255) {
    }
    valueFsharp = 0;
  }
  //G
  if (mouseX > 290 && mouseX < 320 && mouseY > 100 && mouseY < 220) {
    G.setVolume(volume)
    G.rate(pitch)
    G.play();
    if (valueG == 0) {
    }
    valueG = "green";
  } else {
    if (valueG == 0) {
    }
    valueG = 255;
  }
  //Gsharp
  if (mouseX > 320 && mouseX < 340 && mouseY > 100 && mouseY < 160) {
    Gsharp.setVolume(volume)
    Gsharp.rate(pitch)
    Gsharp.play();
    if (valueGsharp == 0) {
    }
    valueGsharp = "green";
  } else {
    if (valueGsharp == 255) {
    }
    valueGsharp = 0;
  }
  //A
  if (mouseX > 340 && mouseX < 370 && mouseY > 100 && mouseY < 220) {
    A.setVolume(volume)
    A.rate(pitch)
    A.play();
    if (valueA == 0) {
    }
    valueA = "green";
  } else {
    if (valueA == 0) {
    }
    valueA = 255;
  }

  //Asharp
  if (mouseX > 370 && mouseX < 390 && mouseY > 100 && mouseY < 160) {
    Asharp.setVolume(volume)
    Asharp.rate(pitch)
    Asharp.play();
    if (valueAsharp == 0) {
    }
    valueAsharp = "green";
  } else {
    if (valueAsharp == 255) {
    }
    valueAsharp = 0;
  }
  //B
  if (mouseX > 390 && mouseX < 430 && mouseY > 100 && mouseY < 220) {
    B.setVolume(volume)
    B.rate(pitch)
    B.play();
    if (valueB == 0) {
    }
    valueB = "green";
  } else {
    if (valueB == 0) {
    }
    valueB = 255;
  }
}

function keyboardC() {
  rect(80, 100, 50, 120);
}
function keyboardCsharp() {
  rect(117, 100, 25, 70);
}
function keyboardD() {
  rect(130, 100, 50, 120);
}
function keyboardDsharp() {
  rect(167, 100, 25, 70);
}
function keyboardE() {
  rect(180, 100, 50, 120);
}
function keyboardF() {
  rect(230, 100, 50, 120);
}
function keyboardFsharp() {
  rect(267, 100, 25, 70);
}
function keyboardG() {
  rect(280, 100, 50, 120);
}
function keyboardGsharp() {
  rect(317, 100, 25, 70);
}
function keyboardA() {
  rect(330, 100, 50, 120);
}
function keyboardAsharp() {
  rect(367, 100, 25, 70);
}
function keyboardB() {
  rect(380, 100, 50, 120);
}
