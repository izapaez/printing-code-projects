var r = new Rune({

  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});


  r.rect(250, 246, 300, 300)
  .fill(255)
  .strokeWidth(100)
  .stroke(0)


r.triangle(400, 650, 295, 200, 505, 200)
  .fill(0)
  .stroke(255)
  .strokeWidth(8)

   r.ellipse(400, 170, 200, 200)
  .fill(0)
  .strokeWidth(8)
  .stroke(255)





r.draw();

  

