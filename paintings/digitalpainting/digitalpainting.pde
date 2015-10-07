float circleX;
float circleY;

float squareX;
float squareY;

float square2X;
float square2Y;

float square3X;
float square3Y;


void setup(){
size(1400,800);
background(0);

}

void draw (){

 circleX = random(0, width/2);
 circleY = random (0, height/2);
 
 fill(random(50,100), random (150, 250), random (100,200));
 ellipse (circleX, circleY, random(0, 100), random (0, 100));
 
 squareX = random (700, width);
 squareY = random (0, height/2);

 fill(random(150,255), random (50, 100), random (0,100));
 ellipse (squareX, squareY, random(0, 100), random (0, 100));

 square2X = random (0, width/2);
 square2Y = random (400, height);

 fill(random(150,255), random (0, 100), random (50,200));
 ellipse (square2X, square2Y, random(0, 100), random (0, 100));
 
 
 square3X = random (700, width);
 square3Y = random (400, height);

 fill(random(0,150), random (0, 150), random (150,255));
 ellipse (square3X, square3Y, random(0, 100), random (0, 100));
  
}
