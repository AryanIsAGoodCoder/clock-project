var hr,mins,sec;
var scAngle,minAngle,hrAngle;
var th1,th2,th3,th4;

function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);

  push();
  rotate(10);

 /* th1 = createSprite(5,-335,40,40);
  th1.shapeColor = "white";
th1.visible = true;
  
  th2 = createSprite(330,-10,40,40);
  th2.visible = true;
  th2.shapeColor = "white";

  th3 = createSprite(0,350,40,45);
  th3.shapeColor = "black";
  th3.visible = true;

  th4 = createSprite(-350,0,40,45);
  th4.visible = true;
  th4.shapeColor = "black";*/

  pop();
}

function draw() {
  background(0);  
  
  hr = hour();
  mins = minute();
  sec = second();

  translate(400,400);

  push();
  textSize(30);
  fill(255);
  text("12",-10,-330);
  text("3",330,0);
  text("6",0,350);
  text("9",-350,0);
  pop();

 /* if(mins<15) {
    th1.visible = false;
  }

  if(mins >15 && mins<30) {
    th1.visible = false;
    th2.visible = false;
  }

  if(mins >30 && mins<45) {
    th1.visible = false;
    th2.visible = false;
    th3.visible = false;
  }

  if(mins >45 && mins<59) {
    th1.visible = false;
    th2.visible = false;
    th3.visible = false;
    th4.visible = false;
  }
  if(mins>0 && mins<5) {
    
  }*/

  

  //secs
  strokeWeight(8);
  noFill();
  stroke(255,0,255);
  rotate(-90);

  scAngle = map(sec,0,60,0,360);
  arc(0,0,600,600,0,scAngle);
  
  //mins
  strokeWeight(8);
  noFill();
  stroke(0,255,255);

  minAngle = map(mins,0,60,0,360);
  arc(0,0,580,580,0,minAngle); 
  
  //hrs
  strokeWeight(6);
  noFill();
  stroke(255);

  hrAngle = map(hr%12,0,12,0,360);
  //arc(0,0,560,560,0,100); 

  /*push();
  rotate(90);
  fill (255);
  noStroke();
  textSize(64);
  text(hr,150,370);
  fill (255);
  text(":"+mins,180,370);
  fill (255);
  text(":"+sec,270,370);
  pop();
*/
  push();
  rotate(minAngle);
  stroke(0,255,255);
  line(0,0,150,0);
  pop();

  push();
  rotate(scAngle);
  stroke(2550,0,255);
  line(0,0,200,0);
  pop();

  hourHand ();
 console.log(hrAngle.angle);
  drawSprites();
}

function hourHand () {
  rotate(hrAngle);
  stroke(255);
  line(0,0,100,0);
}
