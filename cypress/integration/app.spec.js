/* eslint-disable no-undef */
// new.spec.ts created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('App tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('should find texts in page', () => {
    cy.contains('Store Parts');
    cy.contains('Price Order');
    cy.contains('Type');
  });

  it('should change icon button after click - order by price', () => {
    cy.get('#arrow-down').should('not.exist');
    cy.get('#arrow-up').should('not.exist');
    cy.get('#button-reOrder').click();
    cy.get('#arrow-down').should('exist');
    cy.get('#arrow-up').should('not.exist');
    cy.get('#button-reOrder').click();
    cy.get('#arrow-down').should('not.exist');
    cy.get('#arrow-up').should('exist');
  });
  it('should render data', () => {
    cy.wait(13000);
    cy.get('#skeleton').should('not.exist');
    cy.get('[data-testid=part]').should('have.length', 11);
  });
  it('should have Mouse 1 has first element', () => {
    cy.wait(13000);
    cy.get('#skeleton').should('not.exist');
    cy.get('[data-testid=part]').first().contains('Mouse 1');
  });
  it('should have Monitor 1 has first element', () => {
    cy.wait(13000);
    cy.get('#skeleton').should('not.exist');
    cy.get('#button-reOrder').click();
    cy.get('[data-testid=part]').first().contains('Monitor 1');
  });
  it('should show types list', () => {
    cy.get('[data-testid=select]').click();
    cy.contains('None');
    cy.contains('Mouse');
    cy.contains('Mousepad');
    cy.contains('Keyboard');
    cy.contains('Monitor');
  });

  it('should filter data after select click - Mouse', () => {
    cy.get('[data-testid=select]').click();
    cy.contains('None');
    cy.contains('Mouse');
    cy.contains('Mousepad');
    cy.contains('Keyboard');
    cy.contains('Monitor');
    cy.get('[data-testid=Mouse').click();
    cy.wait(6000);
    cy.get('#skeleton').should('not.exist');
    cy.get('[data-testid=part]').contains('Mouse 1');
    cy.get('[data-testid=part]').contains('Mouse 2');
    cy.get('[data-testid=part]').should('have.length', 2);
  });

  it('should filter data after select click - Mousepad', () => {
    cy.get('[data-testid=select]').click();
    cy.contains('None');
    cy.contains('Mouse');
    cy.contains('Mousepad');
    cy.contains('Keyboard');
    cy.contains('Monitor');
    cy.get('[data-testid=Mousepad').click();
    cy.wait(6000);
    cy.get('#skeleton').should('not.exist');
    cy.get('[data-testid=part]').contains('Mousepad 1');
    cy.get('[data-testid=part]').contains('Mousepad 2');
    cy.get('[data-testid=part]').should('have.length', 2);
  });

  it('should filter data after select click - Keyboard', () => {
    cy.get('[data-testid=select]').click();
    cy.contains('None');
    cy.contains('Mouse');
    cy.contains('Mousepad');
    cy.contains('Keyboard');
    cy.contains('Monitor');
    cy.get('[data-testid=Keyboard').click();
    cy.wait(6000);
    cy.get('#skeleton').should('not.exist');
    cy.get('[data-testid=part]').contains('Keyboard 1');
    cy.get('[data-testid=part]').contains('Keyboard 2');
    cy.get('[data-testid=part]').contains('Keyboard 3');
    cy.get('[data-testid=part]').should('have.length', 3);
  });

  it('should filter data after select click - Monitor', () => {
    cy.get('[data-testid=select]').click();
    cy.contains('None');
    cy.contains('Mouse');
    cy.contains('Mousepad');
    cy.contains('Keyboard');
    cy.contains('Monitor');
    cy.get('[data-testid=Monitor').click();
    cy.wait(6000);
    cy.get('#skeleton').should('not.exist');
    cy.get('[data-testid=part]').contains('Monitor 1');
    cy.get('[data-testid=part]').contains('Monitor 2');
    cy.get('[data-testid=part]').contains('Monitor 3');
    cy.get('[data-testid=part]').contains('Monitor 4');
    cy.get('[data-testid=part]').should('have.length', 4);
  });

  it('should filter data after select click - None', () => {
    cy.get('[data-testid=select]').click();
    cy.contains('None');
    cy.contains('Mouse');
    cy.contains('Mousepad');
    cy.contains('Keyboard');
    cy.contains('Monitor');
    cy.get('[data-testid=Monitor').click();
    cy.wait(6000);
    cy.get('#skeleton').should('not.exist');
    cy.get('[data-testid=part]').should('have.length', 4);
    cy.get('[data-testid=select]').click();
    cy.get('[data-testid=None').click();
    cy.wait(13000);
    cy.get('#skeleton').should('not.exist');
    cy.get('[data-testid=part]').should('have.length', 11);
  });

  it('should change data after search', () => {
    cy.wait(13000);
    cy.get('#skeleton').should('not.exist');
    cy.get('[data-testid=part]').should('have.length', 11);
    cy.get('[data-testid=search]').type('Mo');
    cy.get('[data-testid=part]').should('have.length', 8);
    cy.get('[data-testid=search]').clear('Mo');
    cy.get('[data-testid=search]').type('k');
    cy.get('[data-testid=part]').should('have.length', 3);
    cy.get('[data-testid=search]').clear('k');

    cy.get('[data-testid=search]').type('ka');
    cy.get('[data-testid=part]').should('have.length', 0);
  });

  it('should change location after click in part', () => {
    cy.wait(13000);
    cy.get('#skeleton').should('not.exist');
    cy.get('[data-testid=part]').first().click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/Mouse1');
    });
    cy.contains('Mouse 1');
  });
});
