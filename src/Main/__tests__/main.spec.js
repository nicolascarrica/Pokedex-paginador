/** * @jest-environment jsdom */

import { inicioPokedex } from '../main.js';
import paginaUno from './fixtures/listado-pagina-1.json';
import indexFixture from './fixtures/pokedex.fixture';

const cantidadPokemones = 20;
const listaPokemones = ["bulbasaur","ivysaur","venusaur","charmander","charmeleon","charizard","squirtle","wartortle","blastoise","caterpie","metapod","butterfree","weedle","kakuna","beedrill","pidgey","pidgeotto","pidgeot","rattata","raticate"];

beforeEach(() => {
    document.body.innerHTML = indexFixture;
});

describe('inicia el pokedex', () =>{
    global.fetch = jest.fn()
      .mockImplementation(() => new Promise((resolve) => {
        const jsonPromise = new Promise((r) => {
          r(paginaUno);
        });
        resolve({ json: () => jsonPromise });
      }));



      it('carga botones', () =>{
        inicioPokedex();
        const $botonSiguientePagina = document.querySelector('.siguiente-pagina');
        expect($botonSiguientePagina.textContent).toContain('Pagina Siguiente');
        const $numeroPagina = document.querySelector('#numero-pagina');
        expect($numeroPagina.textContent).toContain('1');
      });
                                     
});

  
 
  
  
  
