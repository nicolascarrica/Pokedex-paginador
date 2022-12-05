  /**
 * @typedef {import('../entidades/pokemon').default} Pokemon
 * @typedef {import('../entidades/estadisticas').default} Estadisticas
 * @typedef {import('../entidades/listadoPokemones').default} ListadoPokemones
 */


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
 

/**
 * @callback pokemonSeleccionadoCallback
 * @param {String} nombre
 */

/**
 * @param {Array<string>} nombresPokemones
 * @param {pokemonSeleccionadoCallback} pokemonSeleccionadoCallback
 */
export function crearListado(nombresPokemones, pokemonSeleccionadoCallback = () => {}){

  if (document.querySelector('ul')) {
    document.querySelector('ul').remove();
  }

  const $cuadroLista = document.querySelector('#lista');
  const $lista = document.createElement('ul');
  $lista.className = 'lista-contenedor'

  nombresPokemones.forEach((nombre) => {
    const $cuadroPokemon = document.createElement('li');
    $cuadroPokemon.className= 'lista-pokemones';
    $cuadroPokemon.id = `lista-pokemones`
    const $imgPokebola = document.createElement('img');
    $imgPokebola.className = 'poke-bola-imagen';
    $imgPokebola.src = "../../imagen/pokebola.png";
    $imgPokebola.alt = 'poke-bola';
    $cuadroPokemon.appendChild($imgPokebola);
    const $nombrePokemon = document.createElement('span');
    $nombrePokemon.className = 'nombre-listado';
    $nombrePokemon.textContent = nombre;
    $cuadroPokemon.appendChild($nombrePokemon);
    $cuadroPokemon.addEventListener('click', () => {
      $cuadroPokemon.className = 'lista-pokemones seleccionado';
      pokemonSeleccionadoCallback(nombre)                       
      });       

    $lista.appendChild($cuadroPokemon);    

    })

    $cuadroLista.appendChild($lista);

  }


/**
 * @param {Pokemon} pokemon
*/

export async function asignarDatosPokemon(pokemon){

  const {
    id,
    nombre,
    foto,
    tipos,
    estadisticas,
  } = pokemon;

   verNombre(nombre)
   verImagen(foto)
   verId(id)
   informacionTipoPokemones(tipos)
   informacionEstadisticasPokemones(estadisticas)
   
   

}


function verNombre(nombre){
    const nombrePokemon = document.querySelector('#poke-nombre');
    nombrePokemon.textContent = nombre;

}

function verImagen(foto) {
  const imagenPokemon = document.querySelector('#carta-inicial');
    const sprite = foto
    imagenPokemon.setAttribute('src', sprite);
}

function verId(id){
  const idPokemon = document.querySelector('#poke-id');
    idPokemon.textContent = `N° ${id}`

}   

function informacionTipoPokemones(tipos){
   if (document.querySelector('.lista-tipos')) {
    document.querySelector('.lista-tipos').remove();
  }
    
    const tiposPokemon = document.createElement('ul');
    tiposPokemon.className = 'lista-tipos'
    const cuadroTipos = document.querySelector('#poke-tipo');

    tipos.forEach((tipo) => {
      const contenedorParaTipo = document.createElement('div');
      contenedorParaTipo.textContent = tipo;
      contenedorParaTipo.style.backgroundColor = coloresParaTipos[tipo]
      tiposPokemon.appendChild(contenedorParaTipo); 
    
    });
  
    cuadroTipos.appendChild(tiposPokemon)
  
}
  
function informacionEstadisticasPokemones(estadisticas){

  if (document.querySelector('.lista-estadisticas')) {
    document.querySelector('.lista-estadisticas').remove();
  }

  const estadisticasPokemon = document.createElement('ul');
  estadisticasPokemon.className = 'lista-estadisticas'
  const cuadroEstadisticas = document.querySelector('#poke-estadisticas');

  estadisticas.forEach(estadistica => {
    const $estadistica = document.createElement('div');
    const $cantidadEstadistica = document.createElement('div');
    $cantidadEstadistica.className = 'cantidad-estadistica'
    const $nombreEstadistica = document.createElement('div');
    $nombreEstadistica.className = 'nombre-estadistica'
  
    $nombreEstadistica.textContent = estadistica.nombre;
    $cantidadEstadistica.textContent = estadistica.base;
  
    $estadistica.appendChild($nombreEstadistica);
    $estadistica.appendChild($cantidadEstadistica);
    estadisticasPokemon.appendChild($estadistica);
  
  });
  
  cuadroEstadisticas.appendChild(estadisticasPokemon);
}
