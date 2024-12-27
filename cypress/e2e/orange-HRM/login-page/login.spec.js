describe('Login Feature', () => {
    it('should login successfully', () => {
      cy.intercept('POST', '/auth/login', (req) => {
        req.reply({ statusCode: 200 });
      }).as('login');
  
      cy.login('admin', 'admin123');
      cy.wait('@login');
      cy.verifyDashboard();
    });
  
    it('should display error message with invalid credentials', () => {
      cy.intercept('POST', '/auth/login', (req) => {
        req.reply({ statusCode: 401, body: { message: 'Invalid credentials' } });
      }).as('login');
  
      cy.login('invalid', 'invalid');
      cy.wait('@login');
      cy.contains('Invalid credentials').should('be.visible');
    });
  });