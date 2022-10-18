  /**
 * @typedef {import('../entidades/pokemon').default} Pokemon
 * @typedef {import('../entidades/estadisticas').default} Estadisticas
 * @typedef {import('../entidades/listadoPokemones').default} ListadoPokemones
 */

import {
    cargarPokemonLocalStorage, guardarPokemonLocalStorage, guardarDatosPokedexLocalStorage,
    cargarDatosPokedexLocalStorage,
} from '../Storage/storage.js';

import { agregarPokemonAPI, mostrarDatosPokedexAPI } from '../API/api.js';

import { mapearListadoPokemones, mapearPokemon } from '../mapeadores/pokemon.js';

export const LIMITE_POKEMONES = 20;

/**
 * @param {String} id
 * @returns {Pokemon}
 */


export async function mostrarDatosPokedex(id) {

  if(id === undefined){
    throw new Error('Se necesita un seleccionar un pokemon para cargarlo');
  }

  let pokemon;
  try {
    pokemon = cargarDatosPokedexLocalStorage(id);
  } catch (e) {
    const pokemonData = await mostrarDatosPokedexAPI(id);
    pokemon = mapearPokemon(pokemonData)
    guardarDatosPokedexLocalStorage(id, pokemon);
  }
  return pokemon;
}
  
/**
 * @param {String} offset
 * @param {String} limit
 * @return {ListadoPokemones}
 */

export async function agregarPokemon(offset=0, limit = LIMITE_POKEMONES) {
  try {
    return cargarPokemonLocalStorage(offset, limit);
  } catch (e) {
    const listadoPokemonesData = await agregarPokemonAPI(offset, limit);
    const listaPokemones = mapearListadoPokemones (listadoPokemonesData)
    guardarPokemonLocalStorage(offset, limit, listaPokemones);
    return listaPokemones;
  }
}
