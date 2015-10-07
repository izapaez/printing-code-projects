var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 800,
  debug: true
});

r.rect(0,0,1200,800)
.fill(0);

//ESTRELLAS

for (i=0; i<333; i++){
  r.ellipse (Rune.random(550,650), Rune.random(0,500), 3, 3)
    .fill(false)
    .stroke(255)
    .strokeWidth(1)
}

for (i=0; i<333; i++){
  r.ellipse (Rune.random(450,750), Rune.random(0,400), 3, 3)
    .fill(false)
    .stroke(255)
    .strokeWidth(1)
}

for (i=0; i<333; i++){
  r.ellipse (Rune.random(350,850), Rune.random(0,300), 3, 3)
    .fill(false)
    .stroke(255)
    .strokeWidth(1)
}

for (i=0; i<333; i++){
  r.ellipse (Rune.random(250,950), Rune.random(0,200), 3, 3)
    .fill(false)
    .stroke(255)
    .strokeWidth(1)
}

//MARTE


for (i=0; i<4; i++){
  r.ellipse (600, 850, (i*220), (i*220))
    .fill(false)
    .stroke(255)
    .strokeWidth(30+(i*30));
}


r.draw();
