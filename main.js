function Preload() {
}
function setup() {
   canvas= createCanvas(640,480);
   
     video= createCapture(VIDEO);
   video.hide();
   canvas.center();
 
}
function draw() {
image(video, 170, 100, 350, 300);

fill(255, 0, 0);
stroke(255, 0, 0);
circle(50, 50, 80);

circle(50, 430, 80);

circle(590, 50, 80);

circle(590, 430, 80);

fill(63, 83, 152);
stroke(63, 83, 152);
rect(90, 40, 460, 20);

rect(90, 420, 460, 20);

rect(40, 90, 20, 300);

rect(580, 90, 20, 300);
}


