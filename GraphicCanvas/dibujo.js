const lienzo = document.getElementById('canva');

const ctx = lienzo.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "#e9eaec";
ctx.strokeStyle = "black";
ctx.lineWidth = 10;
ctx.moveTo(150, 25);
ctx.quadraticCurveTo(15, 30, 20, 150);
ctx.quadraticCurveTo(20, 500, 90, 300);
ctx.quadraticCurveTo(100, 450, 150, 300);
ctx.quadraticCurveTo(180, 450, 210, 300);
ctx.quadraticCurveTo(270, 500, 270, 150);
ctx.quadraticCurveTo(275, 30, 150, 25);
ctx.stroke();
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.ellipse(92, 140, 20, 35, 0, 0, 2 * Math.PI, true);
ctx.ellipse(200, 140, 20, 35, 0, 0, 2 * Math.PI, true);
ctx.fill();
