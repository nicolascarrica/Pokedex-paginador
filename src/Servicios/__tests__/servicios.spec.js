/** * @jest-environment jsdom */

import { mostrarDatosPokedex, agregarPokemon, LIMITE_POKEMONES } from '../servicios.js';
import bulbasaur from './fixtures/bulbasaur.json';
import datosPagina from './fixtures/listado-pagina-1.json';
import indexFixture from './fixtures/pokedex.fixture';

const URLAPI = 'https://pokeapi.co/api/v2/pokemon' 

document.body.innerHTML = indexFixture;


global.fetch = jest.fn();
 
  
  test('cargar 1 pokemon sin identificador da error', () => {
    expect(mostrarDatosPokedex())
      .rejects
      .toEqual(new Error('Se necesita un seleccionar un pokemon para cargarlo'));
  
    expect(global.fetch)
      .toHaveBeenCalledTimes(0);
  });


    test('carga 1 pokemon', () => {
    global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r(bulbasaur);
      });
      resolve({ json: () => jsonPromise });
    }));
  
    mostrarDatosPokedex('bulbasaur');
    expect(global.fetch)
      .toHaveBeenCalledTimes(1);
  
    expect(global.fetch)
      .toHaveBeenCalledWith(`${URLAPI}/bulbasaur`);
  });

  test('carga listado de pokemones con parametros por default', () => {
    global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r(datosPagina);
      });
      resolve({ json: () => jsonPromise });
    }));
  
    agregarPokemon();
  
   
    expect(global.fetch)
      .toHaveBeenCalledWith(`${URLAPI}/?offset=0&limit=${LIMITE_POKEMONES}`);
  });
  

  test('carga listado de pokemones con parametros definidos por el usuario', () => {
    global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r(datosPagina);
      });
      resolve({ json: () => jsonPromise });
    }));
  
    agregarPokemon(1, 15);
  

    expect(global.fetch)
      .toHaveBeenCalledWith(`${URLAPI}/?offset=1&limit=${15}`);
  });

