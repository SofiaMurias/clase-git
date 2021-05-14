'use strict';

//Ejercicio 01

const movies = ['El Diario de Noa', 'Rosa Rojas', 'A Perfect Ending']
console.log(movies);
console.log(movies.length)

Array.isArray(movies)


//Ejercicio 02

for (let i = 0; i < 11; i++) {
    console.log('Voy por la vuelta ' + i);
  }

///Ejercicio 3//
let acc = 0
// numero de vecs * 2 es i//
for (let i = 0; i < 20 ; i+=2 ){
    console.log('El resultado es:' + acc + i);
 }
 // numero de vecs * 3 es i//
 //Ejercicio 4//
  const yearmoon = 2017
  for (let i= 0; i < 45; i+=3 )
  {
 console.log (yearmoon + i);
  }



//Ejercicio 05
const numbers = [1 , 2 , 3 , 4 , 5] 


//Ejercicio 08

const btnElement = document.querySelectorAll ('button')
console.log(btnElement);
const body = document.querySelector('body')

function handleclickbtn(ev){
    ev.target.classList.toggle('red');
}


for( let i = 0; i < btnElement.length; i++){ 

    btnElement[i].addEventListener('click', handleclickbtn);

}


// //Ejercicio práctico en casa
// const sectionElement = document.querySelector('.js-adalabers')

// const adalabers=[
//     {
//         name:'Julia',
//         city: 'Madrid'
//     },
//     {
//         name:'JMarina',
//         city: 'Murcia'
//     },
//     {
//         name:'Marcela',
//         city: 'Barcelona'
//     },
// ]

// for ( let index = 0; index < adalabers.length; index++ ) {
    
//     sectionElement.innerHTML += `<p> El nombre es ${adalabers [index].name} y la ciudad es  ${adalabers [index].city} </p>`
   
// }
// for (const adalaberElement of adalabers){
//     sectionElement.innerHTML += `<p> El nombre es ${adalabersElemnts [index]}
// }