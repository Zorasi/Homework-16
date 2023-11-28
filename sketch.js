// declaring an empty array called "buildings" & "boats"
var buildings = [];
var boats = [];

var trains = [];

let co1,co2;


function setup() {
 createCanvas(600, 300);
 
 // filling the array
 for(var i=0;i<30;i++) {
 buildings[i] = new Building();
 }
  for(var k=0;k<5;k++) {
 boats[k] = new Boat();
 }
    for(var c=0;c<1;c++) {
 trains[c] = new Train();
 }
}

function draw() {
 // sky
background(206, 13, 251);
 co1 = color(255,160, 30);
  co2 = color(206, 13, 251);
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newco = lerpColor(co1,co2,n);
    stroke(newco);
    line(0,y,width, y); // from jaemi online
  }
  
  noStroke();
  fill(255, 219, 99, 120);
  circle(450,210,150);
  stroke(255,219,99,120);
  strokeWeight(10);
  for (let i = 0; i < 360; i += 30) {//https://editor.p5js.org/cfl2004/sketches/qbB5xqlzd credit
    let x1 = 450 + cos(radians(i)) * 80;
    let y1 = 220 + sin(radians(i)) * 90;
    let x2 = 450 + cos(radians(i)) * 180;
    let y2 = 220 + sin(radians(i)) * 180;
    line(x1, y1, x2, y2); // x1, y1, x2, y2
  }

  for(var p=1;p<buildings.length;p++) {
  //back back buildings
 buildings[p].update();
   
 }
 // calling update function for each building
 for(var i=0;i<buildings.length;i++) {
 buildings[i].update();
   
 }
 
  for(var t=0;t<trains.length;t++) {
trains[t].update();
   
 }
  
   let v = 10;
  for( var o = 0; o < 20; o++){ //20 poles
    fill(158, 186, 250);
    rect(v,175, 3, 20);
     fill(60, 20,205);
     
    rect(v,175, 2, 20);
    
    v = v + 30;
  }
  fill(60, 20,205);
   rect(0,190, width, 10); //guideline between water and buildings
  
 co3 = color(150,180,240); // water gradient
  co4 = color(24, 130, 204); 
  
    
  for(let y=200; y<600; y++){
    l = map(y,0,200,5,1);
    let waco = lerpColor(co4,co3,l);
    stroke(waco);
    line(0,y,width, y); // from jaemi online
  }
 
 /* fill(24, 130, 204);
   rect(0,200, 600,300); */
 //noLoop();
  
  for(var k=2;k<boats.length;k++) { //only three boats will show because =2
   stroke(2);
 boats[k].update();
   
 }
  
}

// defining an object called Building
// constructor code will only execute when "new Buiding" is called
class Building {

 constructor() {
        this.xPos = random(0, width);
 this.yPos = random(90, 195);
 this.bWidth = random(20, 95);
 this.bHeight = 220;
 }
update() {
 noStroke();
 fill(158, 186, 250);
 rect(this.xPos, this.yPos+1, this.bWidth, this.bHeight);
  fill(60, 20,205);
  rect(this.xPos-10, this.yPos, this.bWidth, this.bHeight); //gives 3D effect
 
     this.xPos -= 1;
     if (this.xPos < -this.bWidth) {
 this.xPos = width;
 }
 }
}
class Boat{
 constructor() {
        this.xPos = random(0, width);
 this.yPos = random(210, 270);
 this.bWidth = random(30, 65);
 this.bHeight = 20;
 }

update() {
  strokeWeight(2);
   fill(0);
  triangle(this.xPos+50, this.yPos-20, this.xPos+25, this.yPos-40,this.xPos+20, this.yPos+10);
 noStroke();
 fill(0);
 
 rect(this.xPos, this.yPos, this.bWidth, this.bHeight, 190);
   rect(this.xPos+2, this.yPos+5, this.bWidth-4, this.bHeight-1, 190);
     this.xPos -= 3;
     if (this.xPos < -this.bWidth) {
 this.xPos = width;
 }
 } 
  
  
}

class Train{
 constructor() {
        this.xPos = random(0, width);
 this.yPos = 180;
 this.bWidth = random(200, 560);
    //this.bWidth = random(15, 50);
 this.bHeight = 20;
   this.bSpace = random(25,35);
 }

update() {
  strokeWeight(2);
   fill(0);
 
  fill(190,190,240);
  rect(this.xPos, this.yPos-25, 3, this.bHeight+50);//ant
  fill(255,0,0);
    rect(this.xPos, this.yPos-25, 3, 5);
 fill(190,190,240);
 
// rect(this.xPos, this.yPos+5, 100, 3);
  rect(this.xPos, this.yPos, this.bWidth, this.bHeight);
  rect(this.xPos-5, this.yPos-8, 50, this.bHeight,190);
  fill(100,100,250);
  rect(this.xPos-5, this.yPos-8, 35, 10,190);
 
     this.xPos -= 3;
     if (this.xPos < -this.bWidth) {
 this.xPos = width;
 }
 } 
  
  
}
