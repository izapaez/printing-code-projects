var r = new Rune({
  container: "#canvas",
  width: 1400,
  height: 800
});

var x = 200;
var y = 300;

var x1 =600;
var y1 =700;

var x2 = -500;
var y2 = -400;


var myPath = r.path(x,y).fill(false)

for(var i = 0; i < 8; i++) {
	
	myPath.moveTo(i * 2, i * 2)	
	 .curveTo(x, y, 800 - (i * 100), 0) 

}

for(var i = 0; i < 8; i++) {
	
	myPath.moveTo(i * 2, i * 2)	
	 .curveTo(x1, y1, 800 - (i * 100), 0) 

}

for(var i = 0; i < 8; i++) {
	
	myPath.moveTo(i * 4, i * 4)	
	 .curveTo(x2, y2, 100 + (i * 100), 0) 

}





r.path(1000,200)
.curveTo((x,y), (x, y), (-800,-800))
.fill(false) 
.moveTo(20,20)
.curveTo((x,y), (x, y), (-700,-700))
.moveTo(40,40)
.curveTo((x,y), (x, y), (-600,-600))
.moveTo(60,60)
.curveTo((x,y), (x, y), (-500,-500))
.moveTo(80,80)
.curveTo((x,y), (x, y), (-400,-400))
.moveTo(100,100)
.curveTo((x,y), (x, y), (-300,-300))
.moveTo(120,120)
.curveTo((x,y), (x, y), (-200,-200))
.moveTo(140,140)
.curveTo((x,y), (x, y), (-100,-100));


r.path(1000,200)
.curveTo((x1,y1), (x1, y1), (-800,-800))
.fill(false) 
.moveTo(20,20)
.curveTo((x1,y1), (x1, y1), (-700,-700))
.moveTo(40,40)
.curveTo((x1,y1), (x1, y1), (-600,-600))
.moveTo(60,60)
.curveTo((x1,y1), (x1, y1), (-500,-500))
.moveTo(80,80)
.curveTo((x1,y1), (x1, y1), (-400,-400))
.moveTo(100,100)
.curveTo((x1,y1), (x1, y1), (-300,-300))
.moveTo(120,120)
.curveTo((x1,y1), (x1, y1), (-200,-200))
.moveTo(140,140)
.curveTo((x1,y1), (x1, y1), (-100,-100));

r.path(x,y)
.curveTo((x1,y1), (x1, y1), (800,800))
.fill(false) 
.moveTo(20,20)
.curveTo((x1,y1), (x1, y1), (700,700))
.moveTo(40,40)
.curveTo((x1,y1), (x1, y1), (600,600))
.moveTo(60,60)
.curveTo((x1,y1), (x1, y1), (500,500))
.moveTo(80,80)
.curveTo((x1,y1), (x1, y1), (400,400))
.moveTo(100,100)
.curveTo((x1,y1), (x1, y1), (300,300))
.moveTo(120,120)
.curveTo((x1,y1), (x1, y1), (200,200))
.moveTo(120,120)
.curveTo((x1,y1), (x1, y1), (100,100));

r.path(x,y)
.curveTo((x2,y2), (x2, y2), (800,800))
.fill(false) 
.moveTo(20,20)
.curveTo((x2,y2), (x2, y2), (700,700))
.moveTo(40,40)
.curveTo((x2,y2), (x2, y2), (600,600))
.moveTo(60,60)
.curveTo((x2,y2), (x2, y2), (500,500))
.moveTo(80,80)
.curveTo((x2,y2), (x2, y2), (400,400))
.moveTo(100,100)
.curveTo((x2,y2), (x2, y2), (300,300))
.moveTo(120,120)
.curveTo((x2,y2), (x2, y2), (200,200))
.moveTo(120,120)
.curveTo((x2,y2), (x2, y2), (100,100));

r.path(1000,200)
.curveTo((x2,y2), (-x2, y2), (-800,-800))
.fill(false) 
.moveTo(20,20)
.curveTo((x2,y2), (-x2, y2), (-700,-700))
.moveTo(40,40)
.curveTo((x2,y2), (-x2, y2), (-600,-600))
.moveTo(60,60)
.curveTo((x2,y2), (-x2, y2), (-500,-500))
.moveTo(80,80)
.curveTo((x2,y2), (-x2, y2), (-400,-400))
.moveTo(100,100)
.curveTo((x2,y2), (-x2, y2), (-300,-300))
.moveTo(120,120)
.curveTo((x2,y2), (-x2, y2), (-200,-200))
.moveTo(140,140)
.curveTo((x2,y2), (-x2, y2), (-100,-100));








r.draw();