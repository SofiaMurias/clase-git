'use strict';

// const button = document.querySelector('.boton')
// function showtext(){
//     console.log('Mi primer click, ¡ole yo y la mujer que me parió!')
// }

// button.addEventListener('click', showtext);
   


// Ejercicio03

const text = document.querySelector('.text')


function addtext(){
    const text2 = document.querySelector('.text2');
    text2.innerHTML= 'Lorem ipsum';
}

text.addEventListener('mouseover',addtext);


//Ejercicio04

const box = document.querySelector('.box')


function colorscroll(){
    if(window.scrollY >= window.scroll250){
       console.log(box.classList.add('red'));
    }
}

box.addEventListener('scroll',colorscroll);

