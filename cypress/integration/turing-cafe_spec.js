describe('Turing Cafe', () => {

  const baseUrl = 'http://localhost:2305'

  before(() => {
    cy.visit(baseUrl)
  });

  it ('Should have the correct url for the home page on load', () => {
    cy
      .url().should('eq', `${baseUrl}/`)
  });

  it ('Should display cards representing existing reservations', () => {
    cy
    .get('.resy-container')
    .find('.reservation-card').should('have.length', 9)
  });

});