var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 800
});

var x = 200;
var y = 200;

var x1 = 600;
var y1 = 300;



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
.curveTo((x1,y1), (x1, y1), (400,400));

//}



r.draw();