'use strict';

// Ejercicio01

let adalaber1 = {
    name: 'Susana',
    age: 34,
    job :'periodista',

};

const adalaber2 = {
    name: 'Rocío,',
    age: '25 años,',
    job :'actriz',
   
};
console.log(adalaber2.name + adalaber2.age + adalaber2.job);

// Ejercicio02

const adalaber3= {};
adalaber3.name= 'susana'
adalaber3.run = phrase => `Estoy corriendo ${phrase}`;

console.log(adalaber3.run('todos los dias'));

//Ejercio03

let adalaber4={};
adalaber4.name = 'Susana';
adalaber4.age = '34 años';
adalaber4.job = 'periodista';
adalaber4.sayPhrase = function() {
    //  return `Mi nombre es ${this.name} , tengo ${this.age} años y soy ${this.job}`;
     return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ', y soy ' + this.job;
};
console.log(adalaber4.sayPhrase());

//Ejercio04

//Ejercicio05

const inputBtn = document.querySelector('.js-text')

console.log(inputBtn);

//Ejercicio 06

const cestaPeras = {
    numberMax: 10,
    numberMin: 2,
    numberNow: 5,
    numberFirst: 1,
    nombre: "texto",
    add: function() {this.numberNow++;},
    
};

console.log(cestaPeras);
console.log( cestaPeras.add() );
console.log(cestaPeras);