window.onload = function() {
  //write your code here
  let quien = [
    "Mi perro",
    "Mi gato",
    "Un cocodrilo",
    "Un fantasma",
    "Un ladrón",
    "Un dragón"
  ];
  let accion = [
    "robó",
    "se comió",
    "destruyó",
    "quemó",
    "se fue con",
    "se llevó"
  ];
  let que = [
    "mis deberes",
    "mi proyecto",
    "mi ordenador",
    "mi coche",
    "mi móvil",
    "mi mochila"
  ];
  let cuando = [
    "mientras estaba en clase",
    "mientras estaba en el trabajo",
    "mientras daba un paseo",
    "cuando estaba en la ducha",
    "mientras estaba comprando",
    "cuando estaba limpiando"
  ];
  function generadorDeExcusas(quien, accion, que, cuando) {
    let elegirQuien = Math.floor(Math.random() * quien.length);
    let elegirAccion = Math.floor(Math.random() * accion.length);
    let elegirQue = Math.floor(Math.random() * que.length);
    let elegirCuando = Math.floor(Math.random() * cuando.length);

    return `${quien[elegirQuien]} ${accion[elegirAccion]} ${que[elegirQue]} ${cuando[elegirCuando]}`;
  }
  let excusa = generadorDeExcusas(quien, accion, que, cuando);
  document.querySelector("#excuse").textContent = excusa;
};
