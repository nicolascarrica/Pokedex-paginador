import {
    cargarPokemonLocalStorage, guardarPokemonLocalStorage,guardarDatosPokedexLocalStorage,
    cargarDatosPokedexLocalStorage,
  } from '../Storage/storage.js';
  import { agregarPokemonAPI, mostrarDatosPokedexAPI } from '../API/api.js';


  export async function agregarPokemon(offset, limit) {
    try {
      return cargarPokemonLocalStorage(offset, limit);
    } catch (e) {
      const listaPokemones = await agregarPokemonAPI(offset, limit);
      guardarPokemonLocalStorage(offset, limit, listaPokemones);
      return listaPokemones;
    }
  }

  export async function mostrarDatosPokedex(pokemonSeleccionado) {
    let resultado;
    try {
      resultado = cargarDatosPokedexLocalStorage(pokemonSeleccionado);
    } catch (e) {
      resultado = await mostrarDatosPokedexAPI(pokemonSeleccionado);
      guardarPokemonLocalStorage(pokemonSeleccionado, resultado);
    }
    return resultado;
  }