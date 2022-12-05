/** * @jest-environment jsdom */
/// <reference types="Jest"/>

import {URLAPI, agregarPokemonAPI, mostrarDatosPokedexAPI, LIMITE_POKEMONES}  from '../api.js';

beforeEach(() => {
    global.fetch = jest.fn();
  });

test('carga listado de pokemones con parametros por default', () => {
    global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r([]);
      });
      resolve({ json: () => jsonPromise });
    }));
  
    agregarPokemonAPI();
  
    expect(global.fetch)
      .toHaveBeenCalledTimes(1);
    expect(global.fetch)
      .toHaveBeenCalledWith(`${URLAPI}/?offset=0&limit=${LIMITE_POKEMONES}`);
});

test('carga listado de pokemones con parametros definidos por el usuario', () => {
    global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r([]);
      });
      resolve({ json: () => jsonPromise });
    }));
  
    agregarPokemonAPI(1, 10);
  
    expect(global.fetch)
      .toHaveBeenCalledTimes(1);
    expect(global.fetch)
      .toHaveBeenCalledWith(`${URLAPI}/?offset=1&limit=${10}`);
});



test('carga 1 pokemon', () => {
    global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r({});
      });
      resolve({ json: () => jsonPromise });
    }));
  
    mostrarDatosPokedexAPI('bulbasaur');
    expect(global.fetch)
      .toHaveBeenCalledTimes(1);
  
    expect(global.fetch)
      .toHaveBeenCalledWith(`${URLAPI}/bulbasaur`);
});

test('cargar 1 pokemon sin identificador da error', () => {
    expect(mostrarDatosPokedexAPI())
      .rejects
      .toEqual(new Error('Se necesita un seleccionar un pokemon para cargarlo'));
  
    expect(global.fetch)
      .toHaveBeenCalledTimes(0);
});
  

 