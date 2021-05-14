'use script'

/*
 Proceso 1
  1-cuando arranque la pag debo pintar el listado detareas
  2-escuchar un evento sobre las tareas pintadas
Poceso 2
  1-Un vez que la usuaria a clickado:
    *Recoger en cual elemento ha hecho click
    *Modificar los datos(estado de la tarea)
    *Volver a pintar mis tareas
    *Escuchar el evento
*/

constulElement = document.querySelector('.js-list')

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
  ];
 
  function