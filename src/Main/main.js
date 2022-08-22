import {crearListaPokemones} from '../UI/ui.js';
import { agregarPokemon } from '../Servicios/servicios.js';
import { activarPaginador }from '../Eventos/eventos.js'

export async function crearPaginaPokedex(offset = 0, limit = 20){

  const listaPokemones = await agregarPokemon(offset, limit);
  const cantidadPokemones = listaPokemones.results.length;
  crearListaPokemones(cantidadPokemones, listaPokemones);
}


export async function inicioPokedex() {
  await crearPaginaPokedex()
  activarPaginador()
}