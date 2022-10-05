  /**
 * @typedef {import('../entidades/pokemon').default} Pokemon
 * @typedef {import('../entidades/estadisticas').default} Estadisticas
 * @typedef {import('../entidades/listadoPokemones').default} ListadoPokemones
 */

import {crearListaPokemones} from '../UI/ui.js';
import { agregarPokemon } from '../Servicios/servicios.js';
import { activarPaginador }from '../Eventos/eventos.js'


export async function crearPaginaPokedex(offset = 0, limit = 20){
  const listaPokemones = await agregarPokemon(offset, limit);
  const cantidadPokemones = 20;
  crearListaPokemones(cantidadPokemones, listaPokemones);

}


export async function inicioPokedex() {
  await crearPaginaPokedex()
  activarPaginador()
}