import data from './contenido/contenido.json' assert { type: 'json' };

const boton = document.getElementById("b" + 1);
const botonIndex = document.querySelectorAll('.boton').length;

let bot = [];
let art = [];
let info = [];
let group = [];
let close = [];
let img = [];

let switch_info = [];
    
for (let index = 0; index < botonIndex; index++) {
    let w = window.innerWidth;
    let h = window.innerHeight;
    bot[index] = document.getElementById("b" + index);
    art[index] = document.getElementById("art" + index);
    info[index] = document.getElementById("info" + index);
    group[index] = document.getElementById("gr" + index);
    close[index] = document.getElementById("c" + index);
    img[index] = document.getElementById("img" + index);

    art[index].innerHTML = data[index].titulo;
    close[index].innerHTML = '+ info';

    switch_info[index] = false;
    let art_getStyle = window.getComputedStyle(art[index]);
    let div_w = parseInt(art_getStyle.width);
    bot[index].style.left = `${Math.random() * 1000}px`;
    bot[index].style.top = `${Math.random() * 800}px`;
    // group[index].style.left = `${0}px`;
    // group[index].style.top = `${40}px`;


    function onDrag({movementX,movementY}) {
        let getStyle = window.getComputedStyle(bot[index]);
        let left = parseInt(getStyle.left);
        let top = parseInt(getStyle.top);
        let div_h = parseInt(getStyle.height);
        

        if (left < 0) {
            bot[index].style.left = `${1}px`;
        } else if (left > w-div_w-30){
            bot[index].style.left = `${w-div_w-30}px`;
        } else {
            bot[index].style.left = `${left + movementX*1.5}px`;
        }
 
        if (top < 0) {
            bot[index].style.top = `${1}px`;
        } else if(top > h-div_h-70){
            bot[index].style.top = `${h-div_h-71}px`;
        }else{
            bot[index].style.top = `${top + movementY*1.5}px`;
        }
    }


    bot[index].addEventListener('mousedown', ()=>{
        bot[index].classList.add('active');
        bot[index].addEventListener('mousemove', onDrag);
        });
        document.addEventListener('mouseup', ()=>{
            bot[index].classList.remove('active');
            bot[index].removeEventListener('mousemove', onDrag);
        });

    // info[index].addEventListener('mouseover', ()=>{
        close[index].addEventListener('click', ()=>{
            if (switch_info[index] === true) {
                info[index].classList.remove('active');
                group[index].classList.remove('active');
                close[index].classList.remove('active');
                img[index].classList.remove('active');
                info[index].innerHTML = ' ';
                group[index].innerHTML = ' ';
                close[index].innerHTML = '+ info';
                switch_info[index] = false;

            } else {
                info[index].innerHTML = data[index].description;
                group[index].innerHTML = data[index].artistas;
                info[index].classList.add('active');
                group[index].classList.add('active');
                close[index].classList.add('active');
                img[index].classList.add('active');

                switch_info[index] = true;
                close[index].innerHTML = 'x';
            }
        });
}





