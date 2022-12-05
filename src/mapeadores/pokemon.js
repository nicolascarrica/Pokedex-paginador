import Pokemon from '../entidades/pokemon.js';
import Estadisticas from '../entidades/estadisticas.js';
import ListadoPokemones from '../entidades/listadoPokemones.js'



/**
 * @param {Object} datosApi
 * @returns {Pokemon}
 */
 export function mapearPokemon(datosApi) {
    const {
      id,
      name: nombre,
      sprites: { front_default: fotoPrincipal },
      stats: estadisticas,
      types: tipos,
      
      
    } = datosApi;
  
    return new Pokemon(
      id,
      nombre,
      fotoPrincipal,
      estadisticas.map((item) => new Estadisticas(
        item.stat.name,
        item.base_stat,
      )),
      tipos.map((item) => item.type.name),
    
    );
  }
  

  /**
   * @param {Object} datosApi
   * @returns {ListadoPokemones}
   */
  export function mapearListadoPokemones(datosApi) {
    const {
      count: numeroPagina,
      next: siguienteUrl,
      previous: anteriorUrl,
      results: resultados,
    } = datosApi;
  
    return new ListadoPokemones(
    numeroPagina,
      siguienteUrl,
      anteriorUrl,
      resultados.map((pokemon) => pokemon.name),
    );
  };


  