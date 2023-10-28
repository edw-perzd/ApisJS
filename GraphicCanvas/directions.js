const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');

let direction = 1; //1 - Right, 2 - Down, 3 - Left, 4 - Up

let posX = 0;
let posY = 1;

function chiken(x,y){
    ctx.font = '30px Serif';
    ctx.fillText('🐣', x * 30, y * 30);
}
/*
function maiz(x,y){
    ctx.font = '50px Serif';
    ctx.fillText('🌽',x,y);
}
*/
const maizz = [];
for(let i=0; i<15;i++){
    const maiz = {
        x: Math.floor(Math.random() * 20),
        y: Math.floor(Math.random() * 13),
        pinta : function(){
            if(!this.comido){
                ctx.font = '30px Serif';
                ctx.fillText('🌽', this.x * 30, this.y * 30);
            }
        }, 
        comido: false
    }
    maizz.push(maiz);
}

setInterval(() => {
    ctx.clearRect(0,0,650,400);
    chiken(posX, posY);
    maizz.forEach(maiz => {
        if(maiz.x === posX && maiz.y === posY){
        maiz.comido = true
        }
    });

    maizz.forEach(maiz => maiz.pinta());
    switch(direction){
        case 1:
            posX++;
            break;
        case 2:
            posY++;
            break;
        case 3:
            posX--;
            break;
        case 4:
            posY--;
            break;
    }

    if(posX > 20) posX = 0;
    if(posX < 0) posX = 20;
    if(posY > 13) posY = 0;
    if(posY < 0) posY = 13;
},100);

document.querySelector('body')
.addEventListener('keydown', (e) => {
    e.preventDefault();
    switch(e.key){
        case 'ArrowRight':
            direction = 1;
            break;
        case 'ArrowDown':
            direction = 2;
            break;
        case 'ArrowLeft':
            direction = 3;
            break;
        case 'ArrowUp':
            direction = 4;
            break;
    }
});