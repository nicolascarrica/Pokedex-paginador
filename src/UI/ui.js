import { mostrarDatosPokedex } from '../Servicios/servicios.js';
const pokeBolaImg = new URL ("../../imagen/pokebola.png", import.meta.url);

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


const $cartaPokemon = document.querySelector('#poke-tipo');
const $estadisticas =document.querySelector('#poke-estadisticas')



function crearListado(cantidad){

  if (document.querySelector('ul')) {
    document.querySelector('ul').remove();
  }
  const $cuadroLista = document.querySelector('#lista');
  const $lista = document.createElement('ul');
  $lista.className = 'lista-contenedor'

    for(let i = 1; i<=cantidad; i++){
        const $cuadroPokemon = document.createElement('li');
        $cuadroPokemon.className= 'lista-pokemones';
        $cuadroPokemon.id = `lista-pokemones-${i}`
        const $imgPokebola = document.createElement('img');
        $imgPokebola.className = 'poke-bola-imagen';
        $imgPokebola.src = pokeBolaImg;
        $imgPokebola.alt = 'poke-bola';
        $cuadroPokemon.appendChild($imgPokebola);
        const $nombrePokemon = document.createElement('span');
        $nombrePokemon.className = 'nombre-listado';
        $cuadroPokemon.appendChild($nombrePokemon);
        $cuadroPokemon.addEventListener('click', async () => {
          document.querySelector('.seleccionado').className = 'lista-pokemones';
          $cuadroPokemon.className = 'lista-pokemones seleccionado';
          const resultado = await mostrarDatosPokedex($nombrePokemon.innerText.toLowerCase());
          asignarDatosPokemon(resultado);          
            });
         $lista.appendChild($cuadroPokemon);
    }

    $cuadroLista.appendChild($lista);
    document.querySelector('#lista-pokemones-1').className = 'lista-pokemones seleccionado';
   
}

function asignarNombresListado(listaPokemones) {
    const containerNombresPokemon = document.querySelectorAll('.nombre-listado');
    containerNombresPokemon.forEach((elemento, index) => {
      elemento.textContent = listaPokemones.results[index].name.toUpperCase();
    });
  }

  export function crearListaPokemones(cantidadPokemones, listaPokemones) {
    crearListado(cantidadPokemones);
    asignarNombresListado(listaPokemones);
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

function removeChildNodes(parent){
  while(parent.firstChild){
    parent.removeChild(parent.firstChild)
  }
}


export function asignarDatosPokemon(datos){
  verPokemones(datos)
  removeChildNodes($cartaPokemon)
  removeChildNodes($estadisticas)
  informacionTipoPokemones(datos)
  informacionEstadisticasPokemones(datos)
    
}



