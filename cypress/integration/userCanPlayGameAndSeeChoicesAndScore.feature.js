describe('Visitor can visit page and see content', () => {
  it('user can visit page ', () => {
    cy.visit('/')
  });

  it('visitor can see content on page ', () => {
    cy.visit('/')
    cy.get('h1').should('contain', 'RPS - A GAME THAT WILL DECIDE THE FATE OF MANKIND');
    cy.get('h1').should('contain', 'WELCOME HUMAN. YOUR CHOICE WILL DETERMINE THE FATE OF PLANET EARTH. WHAT CHOOSE YOU?');
  });
});

describe('User can play the game', () => {
it('chose their throw', () => {
cy.visit('/')
cy.get('div#rock').click();
cy.get('h2#playerchoice').should('contain','You chose Rock')
cy.get('div#paper').click();
cy.get('h2#playerchoice').should('contain','You chose Paper')
cy.get('div#scissors').click();
cy.get('h2#playerchoice').should('contain','You chose Scissors')
  });
});

  
