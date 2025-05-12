var spalsh_screen = true;

var start_time = 0;

var p1, p2, g;

var p1_score = 0;
var p2_score = 0;

var p1_score_offset = 0;
var p2_score_offset = 0;

particles = [];

//preload,
//sound.loop();

let creative_freedom;

var red_alpha = 0;
var blue_alpha = 0;

const rect_width = 25;
const rect_speed = 4;

var knockback_factor = 5;

const dash_speed = 24;

var hit = false;

function preload()
{
  creative_freedom = loadSound("deltarune.mp3");
}

function setup() {
  createCanvas(600, 600);
  
  p1 = new player1(100, 200);
  p2 = new player2(300, 200);
  g = new gamecontroller();
}

function draw() {
  if (!spalsh_screen)
  {
    
    let ms = millis() - start_time;
    
    let time_left = (floor((ms - (creative_freedom.duration() * 1000))/1000) * -1) - 5;
    
    fill(255, 255, 255)
    stroke(255);
    
    console.log(time_left)
  
  background(0);
  
  noStroke();
  
  fill(255, 0, 0, red_alpha);
  
  red_alpha = lerp(red_alpha, 0, 0.2)
  
  rect(0, 0, windowWidth, windowHeight);
  
  fill(0, 0, 255, blue_alpha);
  
  blue_alpha = lerp(blue_alpha, 0, 0.2);
  
  rect(0, 0, windowWidth, windowHeight);
  
  fill(255);
  
  stroke(1);
  
  textSize(80 + p1_score_offset);
  fill(255, 0, 0);
  text(p1_score, 50, 100);
  textSize(80 + p2_score_offset);
  fill(0, 0, 255);
  text(p2_score, 500, 100);
    
    
   textSize(30); 
   fill(255, 255, 255) 
    text(time_left, 300, 100);
  
  p2_score_offset = lerp(p2_score_offset, 0, 0.1);
  p1_score_offset = lerp(p1_score_offset, 0, 0.1);
  
    if (time_left < 72)
    {
      knockback_factor = 10;
      
      if (time_left > 67) text("Knockback Increase!!", 300, 500)
    }
    
    if (time_left > 0)
    {
    
     fill(0, 0, 0); 
      
  p1.run();
  
  p2.run();
  
  g.run();
      
    }
    else
    {
     if (p1_score > p2_score)
     {
       fill(255, 0, 0)
       
       rect(0, 0, 600, 600);
       
       fill(0, 0, 0)
       
       stroke(0, 0, 0)
       
       text("Player 1 Wins!", 300, 300)
     }
      else
      {
        fill(0, 0, 255)
       
       rect(0, 0, 600, 600);
       
       fill(0, 0, 0)
        
        stroke(0, 0, 0)
       
       text("Player 2 Wins!", 300, 300)
      }
    }  
    
    
    
  }
  else
  {
    background(0);
    
    fill(255, 255, 255);
    
    textAlign(CENTER);
    
    text("Press SHIFT To Start", 300, 25);
    
    text("You're gonna need a friend", 300, 50);
    
    text("WASD vs Arrow Keys", 300, 75);
    
    text("Dash with Shift and Space", 300, 100);
    
    text("Knock each other off the screen", 300, 125);
    
    text("By Austin BTW", 300, 375);
    
    text("You have one Song Cycle.", 300, 225);
    
    if (keyIsDown(SHIFT))
    {
     spalsh_screen = false; 
      
      start_time = millis();
      
      creative_freedom.play();
    }
  }
}

class player1 {
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
    
    this.hsp = 0;
    this.vsp = 0;
    this.hsp_target = 0;
    this.vsp_target = 0;
    
    this.mode = 0;
    
    this.hitshake = 0;
    this.dash_cooldown = 0;
    
    this.white = true;
    
    this.death_timer = 0;
  }
  
  run()
  {
    if (this.mode != 3)
    {
    fill(255, 0, 0);
    
    triangle(this.x - (rect_width/2), this.y - (rect_width), this.x + rect_width - (rect_width/2), this.y - (rect_width), this.x + rect_width/2 - (rect_width/2), this.y + rect_width/4 - (rect_width))
    
    if (this.white)
    {
      fill(255 - max(blue_alpha * 255, red_alpha * 255));
      stroke(max(blue_alpha * 255, red_alpha * 255));
    }
    else
    {
     fill(0); 
      stroke(255);
    }
    
     rect(this.x - rect_width/2 + random(-this.hitshake, this.hitshake), this.y - rect_width/2 + random(-this.hitshake, this.hitshake), rect_width, rect_width);
      
    }
    
    fill(255);
    stroke(1);
    
    switch (this.mode)
    {
        case 0: //Moving Normally
        
        this.white = true;
        
        this.hsp_target = 0;
        this.vsp_target = 0;

        if (keyIsDown(65))
        {
          this.hsp_target = -rect_speed;
        }
        if (keyIsDown(68))
        {
          this.hsp_target = rect_speed;
        }

        if (keyIsDown(87))
        {
          this.vsp_target = -rect_speed;
        }
        if (keyIsDown(83))
        {
          this.vsp_target = rect_speed;
        }
        
        if ((keyIsDown(SHIFT)) && (this.dash_cooldown <= 0))
        {
          if (keyIsDown(65)) this.hsp = -dash_speed;
          if (keyIsDown(68)) this.hsp = dash_speed;
          
          if (keyIsDown(87)) this.vsp = -dash_speed;
          if (keyIsDown(83)) this.vsp = dash_speed;
          
          this.mode = 1;
        }
        
        this.dash_cooldown = max(0, this.dash_cooldown - 1);
        
        if ((this.x < 0) || (this.x > 600) || (this.y < 0) || (this.y > 600))
        {
          this.mode = 3;
          
          p2_score++;
          
          p2_score_offset = 50;
          this.death_timer = 60;
        }
        
        break;
        
        case 1: //dashing
        
        this.white = false;
        
        this.hsp_target = 0;
        this.vsp_target = 0;
        
        if ((abs(this.hsp) < 0.01) && (abs(this.vsp) < 0.01))
        {
          this.mode = 0;
        }
        
        break;
        
        case 2: //hitshake
        
        this.hitshake = lerp(this.hitshake, 0, 0.1);
        this.hitshake = lerp(this.hitshake, 0, 0.1);
        
        if ((this.hitshake < 0.1) && (p2.hitshake < 0.1))
        {
          this.mode = 0;
        }
        
        break;
        
        case 3:
        
        this.death_timer--;
        
        if (this.death_timer <= 0)
        {
          
          this.mode = 0;
          
          this.x = 300 + random(-100, 100);
          this.y = 300 + random(-100, 100);
        }
        
        break;
    }
    
    this.hsp = lerp(this.hsp, this.hsp_target, 0.2);
    this.vsp = lerp(this.vsp, this.vsp_target, 0.2);
    
    if (this.mode != 2)
    {
      this.x += this.hsp;
      this.y += this.vsp;
    }
  }
}

class player2{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
    
    this.hsp = 0;
    this.vsp = 0;
    this.hsp_target = 0;
    this.vsp_target = 0;
    
    this.hitshake = 0;
    
    this.mode = 0;
    this.dash_cooldown = 0;
    
    this.white = true;
    
    this.death_timer = 0;
  }
  
  run()
  {
    if (this.mode != 3)
    {
    
    if (this.white)
    {
      fill(255 - max(blue_alpha * 255, red_alpha * 255));
      stroke(max(blue_alpha * 255, red_alpha * 255));
    }
    else
    {
     fill(0); 
      stroke(255);
    }
    
    rect(this.x - rect_width/2 + random(-this.hitshake, this.hitshake), this.y - rect_width/2 + random(-this.hitshake, this.hitshake), rect_width, rect_width);
    
    fill(255);
    stroke(1);
    
    fill(0, 0, 255);
    
    triangle(this.x - (rect_width/2), this.y - (rect_width), this.x + rect_width - (rect_width/2), this.y - (rect_width), this.x + rect_width/2 - (rect_width/2), this.y + rect_width/4 - (rect_width))
    
    fill(255);
    }
    
    switch (this.mode)
    {
        case 0: //moving normally
        
        this.white = true;
        
        this.hsp_target = 0;
        this.vsp_target = 0;
        
        if (keyIsDown(LEFT_ARROW))
        {
          this.hsp_target = -rect_speed;
        }
        if (keyIsDown(RIGHT_ARROW))
        {
          this.hsp_target=rect_speed;
        }

        if (keyIsDown(UP_ARROW))
        {
          this.vsp_target = -rect_speed;
        }
        if (keyIsDown(DOWN_ARROW))
        {
          this.vsp_target = rect_speed;
        }
        
        if ((keyIsDown(32)) && (this.dash_cooldown <= 0))
        {
          if (keyIsDown(LEFT_ARROW)) this.hsp = -dash_speed;
          if (keyIsDown(RIGHT_ARROW)) this.hsp = dash_speed;
          
          if (keyIsDown(UP_ARROW)) this.vsp = -dash_speed;
          if (keyIsDown(DOWN_ARROW)) this.vsp = dash_speed;
          
          this.mode = 1;
        }
        
        this.dash_cooldown = max(0, this.dash_cooldown - 1);
        
        if ((this.x < 0) || (this.x > 600) || (this.y < 0) || (this.y > 600))
        {
          this.mode = 3;
          
          p1_score++;
          
          p1_score_offset = 50;
          this.death_timer = 60;
        }
        
        break;
        
        case 1: //dashing
        
        this.white = false;
        
        this.hsp_target = 0;
        this.vsp_target = 0;
        
        if ((abs(this.hsp) < 0.01) && (abs(this.vsp) < 0.01))
        {
          this.mode = 0;
        }
        
        break;
        
        case 2: //hitshake
        
        this.hitshake = lerp(this.hitshake, 0, 0.2);
        this.hitshake = lerp(this.hitshake, 0, 0.2);
        
        if ((this.hitshake < 0.1) && (p1.hitshake < 0.1))
        {
          this.mode = 0;
        }
        
        break;
        
        case 3:
        
        this.death_timer--;
        
        if (this.death_timer <= 0)
        {
          
          this.mode = 0;
          
          this.x = 300 + random(-100, 100);
          this.y = 300 + random(-100, 100);
        }
        
        break;
    }
    
    this.hsp = lerp(this.hsp, this.hsp_target, 0.2);
    this.vsp = lerp(this.vsp, this.vsp_target, 0.2);
    
    if (this.mode != 2)
    {
      this.x += this.hsp;
      this.y += this.vsp;
    }
  }
}

class gamecontroller
{
  run()
  {
    if (((abs(p1.x - p2.x ) < rect_width) && (abs(p1.y - p2.y) < rect_width)) && (p1.mode != 2) && (p2.mode != 2))
    {
      let p1hsp = p1.hsp;
      let p1vsp = p1.vsp;
      
      let p2hsp = p2.hsp;
      let p2vsp = p2.vsp;
      
      p2.hsp = (p1hsp * knockback_factor); 
      p2.vsp = (p1vsp * knockback_factor); 
      p2.hsp_target = (p1hsp * knockback_factor); 
      p2.vsp_target = (p1vsp * knockback_factor); 
      
      p1.hsp = (p2hsp * knockback_factor); 
      p1.vsp = (p2vsp * knockback_factor); 
      p1.hsp_target = (p2hsp * knockback_factor); 
      p1.vsp_target = (p2vsp * knockback_factor); 
      
      p1.mode = 2;
      p1.hitshake = max(abs(p1.hsp /3), abs(p1.vsp /3))
      p2.mode = 2;
      p2.hitshake = max(abs(p2.hsp /3), abs(p2.vsp /3))
      
      let highest_speed2 = max(abs(p2.hsp), abs(p2.vsp))
      
      red_alpha = 20 * highest_speed2/dash_speed*knockback_factor;
      
      let highest_speed1 = max(abs(p1.hsp), abs(p1.vsp));
      
      blue_alpha = 20 * highest_speed1/dash_speed*knockback_factor;
      
      if (red_alpha > blue_alpha) p2.dash_cooldown = 30;
      if (blue_alpha > red_alpha) p1.dash_cooldown = 30;
    }
  }
}

class particle
{
  constructor(_x, _y, _size)
  {
    this.direction = random(0, 360);
    this.x = _x;
    this.y = _y;
    this.size = _size
  }
  
  run()
  {
    this.size = this.size - 0.1;
    
    
    
    circle(this.x, this.y, this.size)
  }
}