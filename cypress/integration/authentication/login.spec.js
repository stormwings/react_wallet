describe('Test authentication', () => {
  before(async () => {
    await cy.exec('npm run cypress:faker');
  });

  beforeEach(() => {
    cy.fixture('user.json').as('userData');
    cy.visit('/auth/login');
  });

  it('User must login', () => {
    cy.get('@userData').then(userData => {
      cy.get('#auth_input_username').type(userData.username);
      cy.get('#auth_input_password').type(userData.password);
      cy.contains('.button', 'Confirm').click();
      cy.get('#auth_error_message').should('not.exist');
      cy.wait(2000);
      cy.contains('Logout').click();
      cy.url().should('include', '/auth/login')
    });
  });

  it('Must fail login', () => {
    cy.get('@userData').then(userData => {
      cy.get('#auth_input_username').type(userData.username);
      cy.get('#auth_input_password').type(userData.wrong_password);
      cy.contains('.button', 'Confirm').click();

      cy.get('#auth_error_message').should('be.visible');
    });
  });
});
