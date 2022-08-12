// https://pokeapi.co/api/v2/pokemon/ditto
const URLAPI = 'https://pokeapi.co/api/v2/pokemon'
const $listaPokemones = document.querySelector('.lista-contenedor');
const $cartaPokemon = document.querySelector('#poke-tipo');
const $estadisticas =document.querySelector('#poke-estadisticas')
let offset = 0;
let limit = 18;


async function agregarPokemon(){
  await fetch (`${URLAPI}/?offset=${offset}&limit=${limit}`)
  .then(resultado => resultado.json())
  .then(datos => {

    Object.keys(datos.results).forEach(pokemon => {         
      let pokemones = datos.results[pokemon].name; 
    
      crearListadoPokemones(pokemones);    
  });
  
})
}
agregarPokemon()

function crearListadoPokemones(pokemones){
  
  const $cuadroPokemon = document.createElement('li');
  $cuadroPokemon.className= 'lista-pokemones';
  $cuadroPokemon.id = `${pokemones}`;
  const $imgPokebola = document.createElement('img');
  $imgPokebola.className = 'poke-bola-imagen';
  $imgPokebola.src = 'imagen/pokebola.png';
  $imgPokebola.alt = 'poke-bola';
  $cuadroPokemon.appendChild($imgPokebola);
  const $nombrePokemon = document.createElement('span');
  $nombrePokemon.className = 'nombre-listado';
  $nombrePokemon.textContent = ` ${pokemones.toUpperCase()[0]}${pokemones.slice(1)}`
  $cuadroPokemon.appendChild($nombrePokemon);
  $cuadroPokemon.addEventListener('click', () => {
    let pokemonSeleccionado= $cuadroPokemon.id
    mostrarDatosPokedex(pokemonSeleccionado)
  });
  $listaPokemones.appendChild($cuadroPokemon);
  }
  


 async function mostrarDatosPokedex(pokemonSeleccionado){
 await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSeleccionado}`)
  .then(resultado => resultado.json())
  .then((datos) => {
      
      verPokemones(datos);
      removeChildNodes($cartaPokemon)
      removeChildNodes($estadisticas)
      informacionTipoPokemones(datos);
      informacionEstadisticasPokemones(datos);
      
    })
}
 

function verPokemones(datos){
  const nombrePokemon = document.querySelector('#poke-nombre');
  nombrePokemon.textContent = datos.name.toUpperCase();

  const imagenPokemon = document.querySelector('#carta-inicial');
  const sprite =  datos.sprites.other.dream_world.front_default
  imagenPokemon.setAttribute('src', sprite);
  
  const idPokemon = document.querySelector('#poke-id');
  idPokemon.textContent = `N° ${datos.id}`
}
  
function informacionTipoPokemones(datos){
  const tiposPokemon = document.querySelector('#poke-tipo');
  const tipos = datos.types
  tipos.forEach(type => {
    const contenedorParaTipo = document.createElement('div');
    contenedorParaTipo.textContent = type.type.name.toUpperCase();
    contenedorParaTipo.style.backgroundColor = coloresParaTipos[type.type.name]
    tiposPokemon.appendChild(contenedorParaTipo); 
  
  })

}

function informacionEstadisticasPokemones(datos){
  const estadisticasPokemon = document.querySelector('#poke-estadisticas');
  const estadisticas =  datos.stats;
  estadisticas.forEach(stat => {
    const elementoEstadistica = document.createElement('div');
    const elementoCantidadEstadistica = document.createElement('div');
    const elementoNombreEstadistica = document.createElement('div');

    elementoNombreEstadistica.textContent = stat.stat.name.toUpperCase();
    elementoCantidadEstadistica.textContent = stat.base_stat;

    elementoEstadistica.appendChild(elementoNombreEstadistica);
    elementoEstadistica.appendChild(elementoCantidadEstadistica);
    estadisticasPokemon.appendChild(elementoEstadistica);

  })

}
 

const coloresParaTipos = {
  electric: '#FFEA70',
  normal: '#B09398',
  fire: '#FF675C',
  water: '#0596C7',
  ice: '#AFEAFD',
  rock: '#999799',
  flying: '#7AE7C7',
  grass: '#4A9681',
  psychic: '#FFC6D9',
  ghost: '#561D25',
  bug: '#A2FAA3',
  poison: '#795663',
  ground: '#D2B074',
  dragon: '#DA627D',
  steel: '#1D8A99',
  fighting: '#2F2F2F',
  default: '#2A1A1F',
};


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
 

function activarPaginador() {
  const $botonAnteriorPagina = document.querySelector(".anterior-pagina");
  const $botonSiguientePagina = document.querySelector(".siguiente-pagina");
  
  $botonSiguientePagina.addEventListener("click", (e) => {
    
    offset +=18;
    removeChildNodes($listaPokemones)
    agregarPokemon();
    manejarCambioPagina(e.target.innerText);
    
  
  });
  
  $botonAnteriorPagina.addEventListener("click", (e) => {
    if(offset != 0){  
      offset -=18;
      removeChildNodes($listaPokemones)
      agregarPokemon(); 
      manejarCambioPagina(e.target.innerText);    
    }
       
  });
}

activarPaginador();

function removeChildNodes(parent){
  while(parent.firstChild){
    parent.removeChild(parent.firstChild)
  }
}






