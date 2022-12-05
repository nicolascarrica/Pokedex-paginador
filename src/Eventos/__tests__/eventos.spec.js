/** * @jest-environment jsdom */

import { mostrarOcultarBotones, activarPaginador, manejarCambioPagina } from '../eventos.js';
import paginaDos from './fixtures/listado-pagina-2.json';
import indexFixture from './fixtures/pokedex.fixture';

const LIMITE_POKEMONES = 20;
const URLAPI = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=40'


const mockCallBack = jest.fn();
 
document.body.innerHTML = indexFixture;

describe('prueba si se ven o no los botones del paginador', () => {

    it('prueba boton anterior oculto en la primera pagina', () => {
        mostrarOcultarBotones('1');
    
        const $botonAnteriorPagina = document.querySelector('.anterior-pagina');
        expect($botonAnteriorPagina.className).toBe('btn btn-warning anterior-pagina boton-pagina oculto');
    
    });
    
    it('prueba boton siguiente oculto en la ultima pagina', () => {
        mostrarOcultarBotones('56');
    
        const $botonSiguientePagina = document.querySelector('.siguiente-pagina');
        expect($botonSiguientePagina.className).toBe('btn btn-warning siguiente-pagina boton-pagina oculto');
    
    });
    
    it('prueba boton siguiente y anterior sean visibles en una pagina cualquiera', () => {
        mostrarOcultarBotones('3');
    
        const $botonSiguientePagina = document.querySelector('.siguiente-pagina');
        const $botonAnteriorPagina = document.querySelector('.anterior-pagina');
        expect($botonSiguientePagina.className).toBe('btn btn-warning siguiente-pagina boton-pagina');
        expect($botonAnteriorPagina.className).toBe('btn btn-warning anterior-pagina boton-pagina');
    
    });

});

describe('prueba paginador', ()=>{

    it("verifica manejar cambio de pagina", () =>{
        manejarCambioPagina("Pagina Siguiente");
        document.querySelector('.siguiente-pagina').addEventListener("click", (e) => {
            expect(document.querySelector('#numero-pagina').innerHTML).toBe("2");
        })
    })

    it('Muestra la página seleccionada', () => {
        global.fetch=jest.fn();
        global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
            const jsonPromise = new Promise((r) => {
            r(paginaDos);
            });
            resolve({ json: () => jsonPromise });
        }));

        activarPaginador();
        expect(paginaDos).toBeCalled;

  });
})

