canvas =
document.getElementById("mycanvas")
ctx= canvas.getcontext("2d")
ctx.beginpath();
ctx.strokeStyle = "red";
ctx.linewidth   = 1;
ctx.rect(250,150,420,200);
ctx.stroke()