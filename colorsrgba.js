const body = document.querySelector('body');
const btnColor = document.querySelector('#btnColor');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const trans = document.querySelector('#trans');

/*****/
const textR = document.querySelector('#textR');
const textG = document.querySelector('#textG');
const textB = document.querySelector('#textB');
const textT = document.querySelector('#textT');
/*****/

function setColor(){
    // rbg(0, 255, 14);
    // rgba(0, 255, 35, 0.5);
    const redVal = red.value;
    const greenVal = green.value;
    const blueVal = blue.value;
    const transVal = trans.value/100;
    //const rgbaColor = `rgb(${ redVal }, ${ greenVal }, ${ blueVal })`;
    const rgbaColor = `rgba(${ redVal }, ${ greenVal }, ${ blueVal }, ${ transVal })`;
    body.style.background = rgbaColor;

    /****/
    textR.innerHTML = redVal;
    textG.innerHTML = greenVal;
    textB.innerHTML = blueVal;
    textT.innerHTML = transVal;
    /****/
}

setColor();
//btnColor.addEventListener('click', setColor);
red.addEventListener('input', setColor)
green.addEventListener('input', setColor)
blue.addEventListener('input', setColor)
trans.addEventListener('input', setColor)