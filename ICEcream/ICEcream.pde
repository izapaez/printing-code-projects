
void setup() {
size (800,800);
background (0);

}


void draw() {

stroke (255);
strokeWeight(1);
noFill();

ellipse( 400,300, 50,50);
ellipse( 400,300, 70,70);


ellipse( 500,300, 50,50);
ellipse( 500,300, 70,70);


ellipse( 300,300, 50,50);
ellipse( 300,300, 70,70);


ellipse( 450,210, 50,50);
ellipse( 450,210, 70,70);


ellipse( 350,210, 50,50);
ellipse( 350,210, 70,70);

ellipse( 400,120, 50,50);
ellipse( 400,120, 70,70);





triangle(250,350, 550, 350, 400, 750);

noFill();
strokeWeight(5);
triangle(250,350, 300, 350, 285, 400);
triangle(300,350, 350, 350, 325, 400);
triangle(350,350, 400, 350, 375, 400);
triangle(400,350, 450, 350, 425, 400);
triangle(450,350, 500, 350, 475, 400);
triangle(500,350, 550, 350, 510, 400);

strokeWeight(3);
triangle(250,350, 300, 350, 350, 550);
triangle(300,350, 350, 350, 350, 550);
triangle(350,350, 400, 350, 375, 550);
triangle(400,350, 450, 350, 425, 550);
triangle(450,350, 500, 350, 450, 550);
triangle(500,350, 550, 350, 450, 550);


strokeWeight(1);
//triangle(250,350, 300, 350, 325, 750);
triangle(300,350, 350, 350, 400, 750);
triangle(350,350, 400, 350, 400, 750);
triangle(400,350, 450, 350, 400, 750);
triangle(450,350, 500, 350, 400, 750);
//triangle(500,350, 550, 350, 475, 750);

fill(255);
ellipse( 400,300, 30,30);
ellipse( 500,300, 30,30);
ellipse( 300,300, 30,30);
ellipse( 450,210, 30,30);
ellipse( 350,210, 30,30);
ellipse( 400,120, 30,30);


noFill();
strokeWeight(4);
ellipse( 400,300, 90,90);
ellipse( 500,300, 90,90);
ellipse( 300,300, 90,90);
ellipse( 450,210, 90,90);
ellipse( 350,210, 90,90);
ellipse( 400,120, 90,90);



}
