Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://orangehrm.com/orangehrm-30/web/index.php/auth/login');
    cy.get('#txtUsername').type(username);
    cy.get('#txtPassword').type(password);
    cy.get('#btnLogin').click();
  });
  
  Cypress.Commands.add('verifyDashboard', () => {
    cy.url().should('include', '/dashboard');
    cy.contains('h1', 'Dashboard').should('be.visible');
  });