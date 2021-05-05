'use strict';

const tittle = document.querySelector('.js-tittle');
const text = document.querySelector('.js-text');
const box = document.querySelector('.js-box');

if (box.classList.contains('warning')) {
    box.classList.remove('warning');
  } else {
    box.classList.add('warning') + (tittle.innerHTML = 'Aviso') + (text.innerHTML = 'Tenga cuidado')
}

if (box.classList.contains('warning')) {
    box.classList.remove('warning') + (box.classList.add('error')) + (tittle.innerHTML = 'Error') + (text.innerHTML = 'Ha surgido un error')
}
  

if (box.classList.contains('error'||'warning')) {
    box.classList.remove('error' || 'warning') + (box.classList.add('success')) + (tittle.innerHTML = 'Correcto') + (text.innerHTML = 'Los datos son correctos')
}