describe('Test user registration', () => {
  before(async () => {
    await cy.exec('npm run cypress:faker');
    cy.viewport(1440, 714);
  });

  beforeEach(() => {
    cy.fixture('user.json').as('userData');
    cy.visit('/login');
  });

  it('User must register', () => {
    cy.get('@userData').then(userData => {
      cy.get('.container > #responsive--screen > #container--screen > .option > .blue').click();
      cy.get('#container--screen > form > .form--container > .wrapper > #auth_input_username').click();
      cy.get('#container--screen > form > .form--container > .wrapper > #auth_input_username').type('newuser');
      cy.get('#container--screen > form > .form--container > .wrapper > #auth_input_password').type('newuserpassword');
      cy.get('#container--screen > form > .form--container > .wrapper > #auth_input_rpassword').type('newuserpassword');
      cy.get('#responsive--screen > #container--screen > form > #button--container > .button').click();
      cy.get('.auth_error_message').should('not.exist');

      cy.wait(2000);
      cy.contains('Logout').click();
      cy.url().should('include', '/login');
    });
  });

  it('Must fail register', () => {
    cy.get('@userData').then(userData => {
      cy.get('.container > #responsive--screen > #container--screen > .option > .blue').click()
      cy.get('#auth_input_username').type(userData.username);
      cy.get('#auth_input_password').type(userData.wrong_password);
      cy.get('#auth_input_rpassword').type(userData.wrong_password);
      cy.contains('.button', 'Confirm').click();

      cy.get('.option > i').should($list => {
        expect($list).to.have.length(1);
        expect($list.eq(0)).to.contain('A user with that username already exists.');
      });
    });
  });
});
