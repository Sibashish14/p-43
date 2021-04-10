var hr,mn,sec,hrAngle,mnAngle,scAngle;
function setup() {
  createCanvas(800,400);
 angleMode(DEGREES);
}

function draw() {
  background(0);  
  hr=hour();
  mn=minute();
  sec=second();
  scAngle=map(sec,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr/24,0,12,0,360);
  translate(200,200);

  push();
  fill("green");
  stroke(0,128,0);
  strokeWeight(7);
  rotate(scAngle);
  line(0,0,80,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(250,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

   push();
   rotate(hrAngle);
   stroke(255,128,150);
   strokeWeight(7);
   line(0,0,60,0);
   pop();
   strokeWeight(2);
   point(0,0);
   stroke(0,128,0)
   noFill();
   strokeWeight(4);
   arc(0,0,300,300,0,scAngle);
   stroke(250,255,0);
   arc(0,0,320,320,0,mnAngle);
   stroke(255,128,150);
   arc(0,0,280,280,0,hrAngle);
  drawSprites();
}