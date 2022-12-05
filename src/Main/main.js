  /**
 * @typedef {import('../entidades/pokemon').default} Pokemon
 * @typedef {import('../entidades/estadisticas').default} Estadisticas
 * @typedef {import('../entidades/listadoPokemones').default} ListadoPokemones
 */

import { crearListado} from '../UI/ui.js';
import { asignarDatosPokemon} from '../UI/ui.js';
import { agregarPokemon } from '../Servicios/servicios.js';
import { activarPaginador }from '../Eventos/eventos.js';
import { mostrarDatosPokedex } from '../Servicios/servicios.js';


export async function crearPaginaPokedex(offset = 0, limit = 20){
  const listaPokemones = await agregarPokemon(offset, limit);
  
  crearListado(listaPokemones.nombresPokemones, async (nombre) => {
    asignarDatosPokemon(await mostrarDatosPokedex(nombre));
  });
  
};

export function inicioPokedex() {
  crearPaginaPokedex()
  activarPaginador()
};