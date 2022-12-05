/**
 * @jest-environment jsdom
 */
/// <reference types="Jest"/>

import {crearListado} from '../ui.js'
import pokedexFixture from "./fixtures/pokedex.fixture"
const cantidadPokemones = 20;
const listaPokemones = ["bulbasaur","ivysaur","venusaur","charmander","charmeleon","charizard","squirtle","wartortle","blastoise","caterpie","metapod","butterfree","weedle","kakuna","beedrill","pidgey","pidgeotto","pidgeot","rattata","raticate"];


beforeEach(() => {
    document.body.innerHTML = pokedexFixture;
});

const mockCallBack = jest.fn();

test('prueba la carga del listado de pokemones', () => {
    
        crearListado (listaPokemones);
        expect(document.querySelectorAll('.lista-pokemones')).toHaveLength(cantidadPokemones);
    
});




    

    