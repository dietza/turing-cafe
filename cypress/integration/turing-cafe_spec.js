describe('Turing Cafe', () => {

  const baseUrl = 'http://localhost:2305'

  before(() => {
    cy.visit(baseUrl)
  });

  it ('Should have the correct url for the home page on load', () => {
    cy
      .url().should('eq', `${baseUrl}/`)
  });

  it ('Should display the site heading', () => {
    cy
    .get('.app-title').should('contain', 'Turing Cafe Reservations')
  });

  it ('Should display cards representing existing reservations', () => {
    cy
    .get('.resy-container')
    .find('.reservation-card').should('have.length', 9)
  });

  it ('Should display a form to add new reservations', () => {
    cy
      .get('form .reservation-name-input[type=text]').type('Allison')
      .get('form .reservation-date-input[type=text]').type('2/8')
      .get('form .reservation-time-input[type=text]').type('12:10')
      .get('form .reservation-number-input[type=text]').type('2')
      .get('form .reservation-number-input[type=text]').type('2')
      .get('form .add-resy-button').click()

      .get('.resy-container')
      .find('.reservation-card h2').contains('Allison')

      .get('.resy-container')
      .find('.reservation-card').should('have.length', 10)
  });

});