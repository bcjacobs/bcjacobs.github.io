class Splash {
  constructor() {
    this.splashBorder = 100;
    fill(255);
    stroke(0, 0, 0);
    rect(
      this.splashBorder,
      this.splashBorder,
      windowWidth - this.splashBorder * 2,
      windowHeight - this.splashBorder * 1 - 80
    );
    fill(0, 0, 222);
    strokeWeight(3);

    line(
      windowWidth - this.splashBorder - 40,
      this.splashBorder + 20,
      windowWidth - this.splashBorder - 20,
      this.splashBorder + 40
    );
    line(
      windowWidth - this.splashBorder - 20,
      this.splashBorder + 20,
      windowWidth - this.splashBorder - 40,
      this.splashBorder + 40
    );

    this.title = createDiv("Interactive Keyboard!");
    this.title.style("color:deeppink");
    this.title.style("font-family: Arial, Helvetica, sans-serif");
    this.title.position(this.splashBorder + 20, this.splashBorder + 20);

    this.name = createDiv("Mason Valentine");
    this.name.position(this.splashBorder + 20, this.splashBorder + 60);

    this.info = createDiv(
      "Bryan Jacobs is pretty cool, but y'know what else is? <p> Your mother. (I would know). <p> But also this project! And you wanna know why? Well, it's an interactive customizeable online keyboard! Uhm. One catch - you can't actually play the keyboard in real life, but you can imagine. That's cool. Colors and stuff. Right? Surely you have a brain to imaginate with right? I imaginated that word just now. 'Cause it doesn't actually exist. But you probably thought it did, didn't you? Anyways, colors and sounds and stuff. Right? That's pretty sick. <p> Clicking on the keys will play the keyboard, and tweaking the two sliders will change the volume and pitch!<p> <a href=https://editor.p5js.org/bcjacobs/sketches/IhHSvjyZJ>view code</a>"
    );

    this.info.position(this.splashBorder + 20, this.splashBorder + 100);
    this.info.size(
      windowWidth - this.splashBorder * 2 - 50,
      windowHeight - this.splashBorder * 2 - 50
    );
  }

  update() {
    if (
      mouseX > windowWidth - this.splashBorder - 40 &&
      mouseX < windowWidth - this.splashBorder - 20 &&
      mouseY < this.splashBorder + 40 &&
      mouseY > this.splashBorder + 20
    ) {
      return true;
    }
  }

  hide() {
    this.title.remove();
    this.name.remove();
    this.info.remove();
  }
}
