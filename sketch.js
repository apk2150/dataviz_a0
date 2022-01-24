var xPos = 400; // starting x position to draw
var yPos = 200;  // starting y position to draw


let img;
function preload() {
  img = loadImage('m_bee.png');
}

//this gets called only once in the very beginning
function setup() {
	createCanvas(800,600);
}

//this gets called every frame (about 60 frames per second)
function draw() {
  var h = map(hour(), 0, 24, 0, TWO_PI)- HALF_PI; 
  var m = map(minute(), 0, 60, 0, TWO_PI)- HALF_PI;
  var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI; 
  strokeWeight(5);
  if (hour()<8){
    background(218, 246, 255);
  }
else if (h>18){
	background(218, 246, 255);
}
	
  else{
    background(0, 83, 172);
  }
  
  background(218, 246, 255);
  fill(255, 0, 0);
  
  stroke(147, 235, 84);
  line(400,200,400,600);
  stroke(254, 154, 187);
  strokeWeight(2);

   
   translate(xPos, yPos);
  fill(255, 196, 223);
  for (let i = 0; i < 12; i ++) {
    
    ellipse(0, 65, 25, 90);
    
    rotate((-PI/6));
  }
  //hour
  push();
  fill(254, 154, 187);
  rotate(PI+((PI/6)*floor(hour())));
  ellipse(0, 65, 25, 90);
  pop();
  
  
  
//   minutes
  translate(-xPos, -yPos);

  stroke(245, 188, 0);
  fill(255, 236, 153);
  circle(xPos,yPos,60);
  
  fill(255, 201, 20)
  arc(xPos, yPos,60, 60, HALF_PI+PI, m ,PIE);
  
  //bee for seconds
  push();
  translate(xPos, yPos);
  imageMode(CENTER);

//   circle((cos(s) * 130), (sin(s) * 130), 25);
     image(img,(cos(s) * 130), (sin(s) * 130), 25, 25);
 
  pop();
  
  if (second()==0){
    print(minute());
  }
  
  
}
