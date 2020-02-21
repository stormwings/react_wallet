describe('Test authentication', () => {
  before(async () => {
    await cy.exec('npm run cypress:faker');
  });

  beforeEach(() => {
    cy.fixture('user.json').as('userData');
    cy.visit('/auth/login');
  });

  it('Must load login', () => {
    cy.get('@userData').then(userData => {
      cy.get('#auth_username').type(userData.username);
      cy.get('#auth_password').type(userData.wrong_password);
      cy.contains('.button', 'Confirm').click();

      cy.contains('Unable to log in with provided credentials.').should('be.visible');
      cy.get('#auth_password').clear();
      cy.get('#auth_password').type(userData.password);
      cy.contains('.button', 'Confirm').click();
      cy.contains('Unable to log in with provided credentials.').should('not.exist');
      cy.wait(2000);
    });
  });

  after(() => {
    cy.contains('Logout').click();
    cy.url('/auth/login');
    cy.log('Test finished');
  });
});
