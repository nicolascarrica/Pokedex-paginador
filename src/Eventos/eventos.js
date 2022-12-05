import { crearPaginaPokedex } from "../Main/main.js";

let offset = 0;
let limit = 20;

export function manejarCambioPagina(texto) {
    let numeroPagina = averiguarPagina();
    cambiarPagina(texto, numeroPagina);
    numeroPagina = averiguarPagina();
    mostrarOcultarBotones(numeroPagina)
  }
  
  function averiguarPagina() {
    const $numeroPagina = document.querySelector("#numero-pagina");
    return ($numeroPagina.innerText);

  }
  
  function cambiarPagina(texto) {
    if (texto === "Pagina Siguiente") {
        modificarNumeroPagina("mas");  
    } else if (texto === "Pagina Anterior") {
        modificarNumeroPagina("menos");  
      } 
  }
  
  function modificarNumeroPagina(accion) {
    const $numeroPagina = document.querySelector('#numero-pagina');
      if (accion === 'mas') {
        $numeroPagina.innerText = Number($numeroPagina.innerText) + 1;
      } else if (accion === 'menos') {
        $numeroPagina.innerText = Number($numeroPagina.innerText) - 1;
      }
  }
   
  export function mostrarOcultarBotones(numeroPagina) {
    const $botonAnteriorPagina = document.querySelector('.anterior-pagina');
    const $botonSiguientePagina = document.querySelector('.siguiente-pagina');
    
    switch (numeroPagina) {
      case "1":
        $botonAnteriorPagina.className = 'btn btn-warning anterior-pagina boton-pagina oculto';
        break;
      case "56":
        $botonAnteriorPagina.className = 'btn btn-warning anterior-pagina boton-pagina';
        $botonSiguientePagina.className = 'btn btn-warning siguiente-pagina boton-pagina oculto';
        break;
      default:
        $botonAnteriorPagina.className = 'btn btn-warning anterior-pagina boton-pagina';
        $botonSiguientePagina.className = 'btn btn-warning siguiente-pagina boton-pagina';
        break;
    }
  }
  


  export function activarPaginador() {
    const $botonAnteriorPagina = document.querySelector(".anterior-pagina");
    const $botonSiguientePagina = document.querySelector(".siguiente-pagina");
   
   
    
    $botonSiguientePagina.addEventListener("click", (e) => {
      
      offset +=20;
      crearPaginaPokedex(offset, limit);
      manejarCambioPagina(e.target.innerText);
      
    });
    
    $botonAnteriorPagina.addEventListener("click", (e) => {
      if(offset != 0){  
        offset -=20;
        crearPaginaPokedex(offset, limit); 
        manejarCambioPagina(e.target.innerText);    
      }
         
    });
  }
