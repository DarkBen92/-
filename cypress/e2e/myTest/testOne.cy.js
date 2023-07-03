describe('My First Test', () => {
    it('Visiting Google displays the correct title', () => {
      cy.visit('https://google.co.uk')
      cy.title().should('contain', 'Google');
    })
  })