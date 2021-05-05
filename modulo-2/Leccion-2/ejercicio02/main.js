'use strict'

const superWave = document.querySelector('.super-wave');
superWave.classList.add ('destacado');
console.log (superWave);

// Ejercicio 03

const kiwis = 5;
const peras = 4;
const uvas = 4;
console.log(kiwis * 2+ peras * 3+ uvas* 0.5);

// Ejercio 04

const dinner= 128;
const people = 9;
console.log((dinner-2) /9);

// Ejercicio 05

const yearsOld= 33
const hoursOneDay= 24
console.log(yearsOld * hoursOneDay);


// Ejercicio 06

const saludo = "hola ";
const name= "Rocio; ";
const nice = "encantada ";
const de = "de ";
const meet = "conocerte ";
console.log(saludo + name + nice + de + meet);

//Ejercio 08
const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const list = document.querySelector('.js-list');
list.innerHTML = `<li>${firstDogImage} ${firstDogName}</li> <li> ${secondDogImage} ${secondDogName}</li> <li> ${thirdDogImage} ${thirdDogName}</li>`;

//Ejercicio 09



