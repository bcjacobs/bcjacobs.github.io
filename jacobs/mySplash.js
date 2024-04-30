class Splash {

 constructor() {
   
  this.splashBorder = 100;
  fill(255);
  stroke(255, 0, 0)
  rect(windowWidth/2-250, 
       this.splashBorder, 
       500, 
       windowHeight-this.splashBorder*2);
  // draw a rectangle like this in a 3D enviornment
  // rect(this.splashBorder-(windowWidth/2), this.splashBorder-(windowHeight/2), windowWidth-this.splashBorder*2, windowHeight-this.splashBorder*2);
  fill(0, 0, 222);
  strokeWeight(3)
   
  line(windowWidth/2+200, this.splashBorder+20,windowWidth/2+220, this.splashBorder+40)
   line(windowWidth/2+220, this.splashBorder+20,windowWidth/2+200, this.splashBorder+40)
   
  this.title = createDiv("2D Sequencer");
  this.title.style('color:deeppink');
  this.title.style('font-family: Arial, Helvetica, sans-serif');
  this.title.position(windowWidth/2-200, this.splashBorder+40);
  
  this.name = createDiv("Bryan Jacobs");
  this.name.position(windowWidth/2-200, this.splashBorder+80);
  
  this.info = createDiv("This is a 2D sequencer operating at two different tempi. Each glowing orb can be moved around the space. <p> <a href=https://editor.p5js.org/bcjacobs/sketches/SijjGsY40y>view source code</a>");
  
  this.info.position(windowWidth/2-200, this.splashBorder+120);
  this.info.size(windowWidth-this.splashBorder*2-50, windowHeight-this.splashBorder*2-50)
   

  
}
  
  update(){
       if(mouseX > windowWidth/2+200 && 
          mouseX < windowWidth/2+220 
          && mouseY < this.splashBorder+40 
          && mouseY > this.splashBorder+20
     ){
     return true
   }
  }
 
  hide(){
    this.title.remove()
    this.name.remove()
    this.info.remove()
  }
}

