const lienzo = document.querySelector('#canva');

const ctx = lienzo.getContext('2d');

let idX = 0;
let idY = 0;
let ini = 0;

let relleno = 380;

function rgbRandom(){
    const letras = '0123456789abcdef';
    let colorRgb = '#';
    for(let i =0; i < 6; i++){
        colorRgb += letras.charAt(Math.floor(Math.random() * 16));
    }
    return colorRgb;
}

function hslColor(h){
    return `hsl(${ h }, 50%, 50%)`;
}

function cuadro(x, y){
    ini += 10;
    ctx.fillStyle = hslColor(ini);
    ctx.fillRect(x, y, 20 ,20);
    ctx.strokeRect(x, y, 20 ,20);
}

setInterval(() => {
    cuadro(idX, idY);
    if(idX < relleno){
        idX += 20;
    } else {
        idY += 20;
        idX += 40;
    }
}, 200);