const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');

let dirX = 1;
let dirY = 1;

let idX = 0;
let idY = 0;

let ini = 0;

function hslColor(h){
    return `hsl(${ h }, 50%, 50%)`;
}

function bolita(x, y){
    ctx.fillStyle = hslColor(ini);
    ini += 1;
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
}

setInterval(() => {
    //ctx.clearRect(0, 0, 600, 400);
    bolita(idX, idY);
    if(dirX === 1 && dirY === 1){
        idX += 1;
        idY += 1;
    } else if(dirX === 1 && dirY === 2){
        idX += 1;
        idY -= 1;
    } else if(dirX === 2 && dirY === 1){
        idX -= 1;
        idY += 1;
    }
    else{
        idY -= 1;
        idX -= 1;
    }
    // Cambiar direcciones
    if(idX > 590) {
        dirX = 2;
       
    }
    if(idX < 10) {
        dirX = 1;
    }
    if(idY > 390) {
        dirY = 2;
    }
    if(idY < 10) {
        dirY = 1;
    }
}, 5);