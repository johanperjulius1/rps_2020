describe('Visitor can visit page and see content', () => {
  it('user can visit page ', () => {
    cy.visit('/')
  })

    it('visitor can see content on page ', () => {
      cy.visit('/')
      cy.get('h1').should('contain', 'RPS - A GAME THAT WILL DECIDE THE FATE OF MANKIND');
      cy.get('h1').should('contain', 'WELCOME HUMAN. YOUR CHOICE WILL DETERMINE THE FATE OF PLANET EARTH. WHAT CHOOSE YOU?');
    })

describe('User can play the game', () => {
it('user can visit page ', () => {
  cy.visit('/')
})



  it('User can play the game', () => {
    cy.get().click();
  });
})

