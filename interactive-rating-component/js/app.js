const contenedorFrontal = document.querySelector(".contenido-frontal");
const contenedorPosterior = document.querySelector(".contenido-posterior");
const numeroEstrellas = document.querySelector("#rating");
const calificacion = document.querySelectorAll(".btn");

const btnSubmit = document.querySelector(".btn-submit");

// eventos

document.addEventListener("DOMContentLoaded", () => {
 

  btnSubmit.addEventListener("click", pasarContenedor);
});

function pasarContenedor(){

   if(numeroEstrellas.innerHTML == '0'){
        alert('Escoge una calificacion');
   }else {
    contenedorFrontal.classList.add("hidden");
    contenedorPosterior.classList.remove("hidden");
   }
  
}

calificacion.forEach((botones) => {
  botones.addEventListener("click", () => {
    numeroEstrellas.innerHTML = botones.innerHTML;
  });
});
