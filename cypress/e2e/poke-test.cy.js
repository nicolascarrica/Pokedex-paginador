/// <reference types="cypress" />
const pokemonesPorPagina = 20;

context('Pokedex', () => {
 
  before(() => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0', {fixture:'listado-pagina-1'})
      .as('obtenerPrimeraPagina');

      cy.visit('http://127.0.0.1:8080')
   
  })

  describe('corrobora la carga de los elementos de la pagina', () => {
    it('corrobora que cargue los pokemones iniciales', () => {
      cy.get('.nombre-listado').should('have.length', pokemonesPorPagina).should('be.visible')
    })
    it('corrobora la carga de la tarjeta que muestra el pokemon seleccionado', () =>{
      cy.get('#poke-card').should('be.visible')
    });

    it('corrobora la carga de botones', () => {
      cy.get('.anterior-pagina').should('not.be.visible')
      cy.get('.siguiente-pagina').should('be.visible')
      cy.get('#numero-pagina').should('be.visible')
      
    })

  })

  describe('corrobora que cargue el pokemon elegido', () => {
    it('selecciona un pokemon', () =>{

      cy.intercept('https://pokeapi.co/api/v2/pokemon/bulbasaur', {fixture:'bulbasaur'})
      .as('mostrarBulbasaur')
    
      cy.get('.lista-contenedor')
      .find('#lista-pokemones-1')
      .click();
      cy.get('#especificaciones').find("#poke-id").should('be.visible');
      cy.get('#especificaciones').find("#poke-tipo").should('be.visible');
      cy.get('#especificaciones').find("#poke-estadisticas").should('be.visible')

    })
  });
      
 describe('corrobora el funcionamiento el paginador', () => {

  it('usa el paginador', () =>{
    cy.intercept('GET','https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0', {fixture:'listado-pagina-1'})
    .as('obtenerPrimeraPagina');
    cy.intercept('GET','https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20', {fixture:'listado-pagina-2'})
    .as('obtenerSegundaPagina');
    

    cy.get('.siguiente-pagina')
    .as('paginaSiguiente')
    .click();

    cy.get('@paginaSiguiente')
    .should('not.have.class', 'disabled');

    cy.get('.anterior-pagina')
    .as('paginaAnterior')
    .should('not.have.class', 'disabled');

    cy.get('@paginaAnterior')
    .click();

    cy.get('@paginaAnterior')
    .should('have.class', 'oculto')
  })


  })
})


