import { crearPaginaPokedex } from "../Main/main.js";

let offset = 0;
let limit = 18;

function manejarCambioPagina(texto) {
    let numeroPagina = averiguarPagina();
    cambiarPagina(texto, numeroPagina);
    numeroPagina = averiguarPagina();
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
   
  
  export function activarPaginador() {
    const $botonAnteriorPagina = document.querySelector(".anterior-pagina");
    const $botonSiguientePagina = document.querySelector(".siguiente-pagina");
    
    $botonSiguientePagina.addEventListener("click", (e) => {
      
      offset +=18;
    //   removeChildNodes($listaPokemones)
      crearPaginaPokedex(offset, limit);
      manejarCambioPagina(e.target.innerText);
      
    
    });
    
    $botonAnteriorPagina.addEventListener("click", (e) => {
      if(offset != 0){  
        offset -=18;
        // removeChildNodes($listaPokemones)
        crearPaginaPokedex(offset, limit); 
        manejarCambioPagina(e.target.innerText);    
      }
         
    });
  }