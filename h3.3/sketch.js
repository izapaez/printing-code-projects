var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 800
});

var x = 600;
var y = 400;

var x1 = 600;
var y1 = 400;

var x2 = 600;
var y2 = 400;

var myPath = r.path(x,y)
.fill(false)

var myPath2 = r.path(x1,y1)
.fill(false)



//vertical waves

for (var i =0; i<8; i++)
myPath2.moveTo(0,0)
.curveTo(-200, -400-(i*50), -200 , 200+ (i*50), -400, -50+(i*6))

.strokeWidth(1)

for (var i =0; i<8; i++)
myPath2.moveTo(0,0)
.curveTo(200, 400+(i*50), 200 , -200 - (i*50), 400, 50-(i*6));




//circles
var myPath3 = r.path(x,y)
.fill(false)

for (var i =0; i<10; i++)
myPath3.moveTo(0,0)
.curveTo(Math.random() * 200, Math.random() * 300, 6+(i), 0)
.curveTo(Math.random() * -200, Math.random() * -300, 6-(i), 0)
.strokeWidth(1)

//IZQ
var myPath4 = r.path(400,320)
.fill(false)

for (var i =0; i<10; i++)
myPath4.moveTo(0,0)
.curveTo(Math.random() * 40, Math.random() * 100, 6+(i), 0)
.curveTo(Math.random() * -40, Math.random() * -100, 6-(i), 0)
.strokeWidth(1)

//DER
var myPath5 = r.path(790,475)
.fill(false)

for (var i =0; i<10; i++)
myPath5.moveTo(0,0)
.curveTo(Math.random() * 40, Math.random() * 100, 6+(i), 0)
.curveTo(Math.random() * -40, Math.random() * -100, 6-(i), 0)
.strokeWidth(1)

//polygons

//izqf
var p = r.polygon(200, 380)
  .stroke(0)
  .fill(false);

for(var i = 0; i < 10; i++) {
  p.lineTo(Math.random() * 70, Math.random() * 70);
  p.lineTo(Math.random() *-70 , Math.random() * -70);
}

//derf
var p = r.polygon(1000, 430)
  .stroke(0)
  .fill(false);

for(var i = 0; i < 10; i++) {
  p.lineTo(Math.random() * 70, Math.random() * 70);
  p.lineTo(Math.random() *-70 , Math.random() * -70);
}



/*

//polygons

//mitad
var p = r.polygon(600, 400)
  .stroke(0)
  .fill(false);

for(var i = 0; i < 8; i++) {
  p.lineTo(Math.random() * 300, Math.random() * 70);
  p.lineTo(Math.random() *-300 , Math.random() * -70);
}

//derecha
var p = r.polygon(890, 480)
  .stroke(0)
  .fill(false);

for(var i = 0; i < 8; i++) {
  p.lineTo(Math.random() * 300, Math.random() * 70);
  p.lineTo(Math.random() *-300 , Math.random() * -70);
}

//izq
var p = r.polygon(310, 300)
  .stroke(0)
  .fill(false);

for(var i = 0; i < 8; i++) {
  p.lineTo(Math.random() * 300, Math.random() * 70);
  p.lineTo(Math.random() *-300 , Math.random() * -70);
}





//4 otras waves

for (var i =0; i<5; i++)
myPath.moveTo(0, 0)
.curveTo (300 + (i*30), -y +(i*30), 50 -(i) ,-50)

for (var i =0; i<5; i++)
myPath.moveTo(0, 0)
.curveTo (-300 - (i*30), y -(i*30), -50 +(i) ,50)

for (var i =0; i<5; i++)
myPath.moveTo(0, 0)
.curveTo (300 + (i*30), -y +(i*30), -100 -(i) ,-100)

for (var i =0; i<5; i++)
myPath.moveTo(0, 0)
.curveTo (-300 - (i*30), y -(i*30), 100 +(i) ,100)


*/






/*


for (var i =0; i<10; i++)
myPath2.moveTo(i, i)
.curveTo(350, 300, 500 - (i*100),0)

for (var i =0; i<10; i++)
myPath2.moveTo(i, i)
.curveTo(-350, -300, -500 + (i* 100),0)



for (var i =0; i<5; i++)
myPath3.moveTo(0, 0)
.curveTo(300, 300+(i*50), 300,-500+(i*50), 500,100)


//for (var i=0; i<10; i++) {


r.path(x,y)
.curveTo((x,y), (x, y), (800,800))
.fill(false) 
.moveTo(20,20)
.curveTo((x,y), (x, y), (700,700))
.moveTo(40,40)
.curveTo((x,y), (x, y), (600,600))
.moveTo(60,60)
.curveTo((x,y), (x, y), (500,500))
.moveTo(80,80)
.curveTo((x,y), (x, y), (400,400))
.moveTo(100,100)
.curveTo((x,y), (x, y), (300,300))
.moveTo(120,120)
.curveTo((x,y), (x, y), (200,200));


for (var i =0; i<8; i++)
myPath.moveTo(i*20, i*20)
.curveTo(x1,y1, 800 - (i*100),0)



r.path(x1,y1)
.curveTo((x1,y1), (x1, y1), (100,100))
.fill(false) 
.moveTo(20,20)
.curveTo((-x1,-y1), (-x1, -y1), (-x1,-y1))
.moveTo(40,40)
.curveTo((x1,y1), (x1, y1), (200,200))
.moveTo(60,60)
.curveTo((-x1,-y1), (-x1, -y1), (-x1,-y1))
.moveTo(80,80)
.curveTo((x1,y1), (x1, y1), (300,300))
.moveTo(100,100)
.curveTo((-x1,-y1), (-x1, -y1), (-x1,-y1))
.moveTo(120,120)
.curveTo((x1,y1), (x1, y1), (400,400))
.moveTo(140,140)
.curveTo((-x1,-y1), (-x1, -y1), (-x1, -y1))
.moveTo(160,160)
.curveTo((x1,y1), (x1, y1), (500,500));
*/


//}



r.draw();

console.log((x1,y1), (x1, y1))