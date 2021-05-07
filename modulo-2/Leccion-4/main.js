'use strict';

// Ejercicio1

function mult(a,b){
    return a * b;
}
const multresult = mult(2,4);

console.log(multresult);

//Ejercicio2

function media(a,b,c,d){
    return ((a +b +c +d)/4);
}
const resultmedia= media(2,5,6,4)

console.log(resultmedia);

// Ejercicio 3

function price(a){
    return 'Precio sin IVA'+ a +'IVA:'+ ((a * 21) / 100) + 'y Total:'+(a+(a * 21) / 100 ) 
}
const pricefactura= price(100)
console.log(pricefactura);

// Ejercicio 4

function number (a){
    if(a % 2 == 0) {
        return "par";
      }
      else {
        return "impar";
      }   
}
const num = number(5)
console.log(num);

// Ejercicio 5

function getEl(a){
    return document.querySelector(a);
}
const  clase = getEl('.tittle')
console.log(clase);

//Ejercio 6



// Ejercicio 7

function getEl(a){
    return document.querySelector(a);
}
const  clase = getEl('.tittle')
console.log(clase);

function number (a){
    if(a % 2 == 0) {
        return "par";
      }
      else {
        return "impar";
      }   
}
const num = number(5)
console.log(num);