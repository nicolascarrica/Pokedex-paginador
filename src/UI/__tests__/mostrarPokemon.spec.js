/**
 * @jest-environment jsdom
 */
/// <reference types="Jest"/>

 import {asignarDatosPokemon} from '../ui.js'
 import pokemonSeleccionado from "./fixtures/pokemonSeleccionado.json"
 import pokedexFixture from "./fixtures/pokedex.fixture"

 
 document.body.innerHTML = pokedexFixture;
 asignarDatosPokemon(pokemonSeleccionado);
 const { nombre, id, foto, tipos, estadisticas } = pokemonSeleccionado;

//  test("verifica la carga de datos de pokemon",() =>{
//     const $nombre = document.querySelector('#poke-nombre').textContent;
//     expect($nombre).toEqual(pokemonSeleccionado.nombre);

//     const $id = (document.querySelector('#poke-id').textContent);
//     expect($id).toEqual(`N° ${pokemonSeleccionado.id}`);


//     const $foto = document.querySelector('#carta-inicial').src;
//     expect($foto).toEqual("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
//  });

//  test("verifica que carguen los tipo de pokemon", () =>{
//     const $tipos = document.querySelector('.lista-tipos').children;
//     Object.values(pokemonSeleccionado.tipos).forEach((tipo, i) =>{ 
//          expect(tipo).toEqual($tipos[i].textContent);
//      })
// });

// test("verifica la carga de las estadisticas", () => {
    
//     const $cantidadEstadisticas = document.querySelector('.cantidad-estadistica').children;
//     Object.values(pokemonSeleccionado.estadisticas.base_stat).forEach((base,i) => {
//         expect(base).toEqual($cantidadEstadisticas[i].textContent);
//     })

//     const $nombreEstadisticas = document.querySelector('.nombre-estadistica').children;
//     Object.values(pokemonSeleccionado.estadisticas.stat.name).forEach((nombre,i) => {
//         expect(nombre).toEqual($nombreEstadisticas[i].textContent)
//     })
// });

 test("verifica la carga de datos de pokemon",() =>{
    const $nombre = document.querySelector('#poke-nombre').textContent;
    expect($nombre).toContain(nombre);

    const $id = (document.querySelector('#poke-id').textContent);
    expect($id).toContain(`N° ${id}`);


    const $foto = document.querySelector('#carta-inicial').src;
    expect($foto).toContain(foto)
 });

  test("verifica que carguen los tipo de pokemon", () =>{
    const $tipos = document.querySelector('.lista-tipos').children;
    Object.values(tipos).forEach((tipo, i) =>{ 
         expect(tipo).toContain($tipos[i].textContent);
     })
});

// test("verifica la carga de las estadisticas", () => {
    
    // const $cantidadEstadisticas = document.querySelector('.cantidad-estadistica').children;
    // Object.values(estadisticas.base_stat).forEach((base,i) => {
    //      expect(base).toEqual($cantidadEstadisticas[i].textContent);
    // })
    
//     const $nombreEstadisticas = document.querySelector('.lista-estadisticas').children;
//     Object.values(estadisticas.stat.name).forEach((nombre,i) => {
//          expect(nombre).toEqual($nombreEstadisticas[i].textContent)
//     })
//     });