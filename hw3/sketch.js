var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 800
});

var x = 600;
var y = 300;

var x1 = 600;
var y1 = 300;

var x2 = 600;
var y2 = 300;

var myPath = r.path(x,y)
.fill(false)

var myPath2 = r.path(x1,y1)
.fill(false)

var myPath3 = r.path(x2,y2)
.fill(false)

for (var i =0; i<5; i++)
myPath.moveTo(i, i)
.curveTo (x + (i*30), -y +(i*30), 500 - (i*100),0)

for (var i =0; i<5; i++)
myPath2.moveTo(i, i)
.curveTo(350, 300, 500 - (i*100),0)

for (var i =0; i<5; i++)
myPath3.moveTo(i, i)
.curveTo(-100-(i*10), -100-(i*50), -300 -(i * 20) ,0)

//for (var i=0; i<10; i++) {

/*
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