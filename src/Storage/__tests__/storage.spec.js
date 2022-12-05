/** * @jest-environment jsdom */

import { cargarDatosPokedexLocalStorage, 
    cargarPokemonLocalStorage, 
    guardarDatosPokedexLocalStorage, 
    guardarPokemonLocalStorage } from '../storage.js';

import bulbasaur from './fixtures/bulbasaur.json';
import datosPagina from './fixtures/listado-pagina-1.json';


const localStorageMock = (function() {
    let store = {};
    return {
      getItem: function(key) {
        return store[key];
      },
      setItem: function(key, value) {
        store[key] = value.toString();
      },
      clear: function() {
        store = {};
      },
      removeItem: function(key) {
        delete store[key];
      }
    };
  })();

describe('prueba el funcionamiento del localStorage', () => {
    beforeAll(() => {
      Object.defineProperty(window, 'localStorage', {
        value: localStorageMock,
      });
    });
  
    it('Busca un pokemon en el localStorage', () => {
        guardarDatosPokedexLocalStorage('bulbasaur', bulbasaur);
  
        expect(cargarDatosPokedexLocalStorage('bulbasaur')).toMatchObject(bulbasaur);
    });

    it('Busca la lista de pokemones en el localStorage', () =>{
        guardarPokemonLocalStorage(0,20, datosPagina)

        expect(cargarPokemonLocalStorage(0, 20)).toMatchObject(datosPagina);
    });

})
