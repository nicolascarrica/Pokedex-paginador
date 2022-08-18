/// <reference types="cypress" />
const pokemonesPorPagina = 18;

context('poke-test', () => {
  before('ingresa al sitio', () => {
    cy.visit('http://192.168.0.4:8080')
  });

  describe('corrobora la carga de los elementos de la pagina', () => {
    it('corrobora que cargue los pokemones iniciales', () => {
      cy.get('.nombre-listado').should('have.length', 18).should('be.visible')
    })

    it('corrobora que cargue los pokemones iniciales', () => {
      cy.get('.nombre-listado').should('have.length', 18).should('be.visible')
    });

    it('corrobora la carga de la tarjeta que muestra el pokemon seleccionado', () =>{
      cy.get('#poke-card').should('be.visible')
    });

    it('corrobora la carga de botones', () => {
      cy.get('.anterior-pagina').should('be.visible')
      cy.get('.siguiente-pagina').should('be.visible')
      cy.get('#numero-pagina').should('be.visible')

    })

  })

  describe('corrobora la interaccion con  la pagina', () => {
    it('comprueba la carga de la tarjeta cuando se hace click en un nombre', () => {
      
        cy.get('.lista-contenedor').find('#lista-pokemones-1').click();
        cy.get('#especificaciones').find("#poke-id").should('be.visible');
        cy.get('#especificaciones').find("#poke-tipo").should('be.visible');
        cy.get('#especificaciones').find("#poke-estadisticas").should('be.visible');
      })
  
  
    it('comprueba el funcionamiento del paginador', () => {
      cy.get('.siguiente-pagina').click();
      cy.get('.nombre-listado').should('have.length', 18).should('be.visible');
      cy.get('.anterior-pagina').click();
      cy.get('.nombre-listado').should('have.length', 18).should('be.visible');
      
      

    })
  })

})