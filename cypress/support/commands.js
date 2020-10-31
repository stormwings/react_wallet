Cypress.Commands.add("completeLoginInput", (username, password) => {
  cy.get('#auth_input_username').type(username);
  cy.get('#auth_input_password').type(password);
  cy.contains('.button', 'Confirm').click();
})