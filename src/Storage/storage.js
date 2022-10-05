  /**
 * @typedef {import('../entidades/pokemon').default} Pokemon
 * @typedef {import('../entidades/estadisticas').default} Estadisticas
 * @typedef {import('../entidades/listadoPokemones').default} ListadoPokemones
 */

   export const LIMITE_POKEMONES = 20;

   function obtenerKeyPokemon(id) {
     return `pokemon_${id}`;
   }

   function obtenerKeyPokemones(offset, limit) {
    return `pokemones_${offset}_${limit}`;
  }

  /**
 * @param {String} id
 * @returns {Pokemon}
 */

   export function cargarDatosPokedexLocalStorage(id) {
    if (id === undefined) {
      throw new Error('Se necesita un seleccionar un pokemon para cargarlo');
    }

    const pokemon = JSON.parse(localStorage.getItem(obtenerKeyPokemon(id)))
    if (pokemon === null) {
      throw new Error(`No hay ${id} en local Storage`);
    }
    return pokemon;
  }

  /**
 * @param {Number} offset
 * @param {Number} limit
 * @return {ListadoPokemones}
 */

   export function cargarPokemonLocalStorage(offset = 0, limit = LIMITE_POKEMONES) {
    
    // const pokemonSeleccionado = `${offset}_${limit}`;
    const pokemones = JSON.parse(localStorage.getItem(obtenerKeyPokemones(offset, limit)))
    if (pokemones === null) {
      throw new Error('No se encuentran los pokemones en el local Storage');
    }
    return pokemones;
  }

  /**
 * @param {String} id
 * @param {Pokemon} pokemon
 */

   export function guardarDatosPokedexLocalStorage(id, pokemon) {

    if (id === undefined || typeof pokemon !== 'object') {
      throw new Error('Se necesita un identificador y un pokemon para guardar en localStorage');
    }

    localStorage.setItem(obtenerKeyPokemon(id), JSON.stringify(pokemon));
  }

  /**
 * @param {Number} offset
 * @param {Number} limit
 * @param {ListadoPokemones} pokemones
 */

   export function guardarPokemonLocalStorage(offset, limit, pokemones) {

    if (offset === undefined || limit === undefined || typeof pokemones !== 'object') {
      throw new Error('Se necesita offset, limite y pokemones');
    }
    // const id = `${offset}_${limit}`;
    localStorage.setItem(obtenerKeyPokemones(offset, limit), JSON.stringify(pokemones));
  }


