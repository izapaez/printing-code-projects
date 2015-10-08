var r = new Rune({
  container: "#canvas",
  width: 1400,
  height: 800
});


var myPath = r.path(200,200)
.fill(false)


for(var i = 0; i < 18; i++) {
	
	myPath.moveTo(i * 2, i * 2)
	.curveTo(800,800, 300 + ( i *50),300)


}



for(var i = 0; i < 18; i++) {
	
	myPath.moveTo(i * 2, i * 2)
	.curveTo(800,800, -300 + ( i *50),300)


}







r.draw();