var can;
var angle = 0;
var img;
function setup() {
can = createCanvas(windowWidth,windowHeight,WEBGL);
}
function preload(){
	img = loadImage('1webgl.png');

}

function draw() {
background(200);
fill(random(0,10),random(0,255),random(0,200));

// rotateX(angle);
rotateY(angle);
// rotateZ(angle);
texture(img);
box();
angle+= 0.2;
}