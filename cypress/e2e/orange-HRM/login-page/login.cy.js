describe('Login Feature', () => {
    it('should login with valid credentials', () => {
        cy.visit('https://orangehrm.com/orangehrm-30/web/index.php/auth/login')
        cy.get('#txtUsername').type('your_username')
        cy.get('#txtPassword').type('your_password')
        cy.get('#btnLogin').click()
        cy.url().should('include', '/dashboard')
        cy.contains('h1', 'Dashboard').should('be.visible')
    })
    describe('Login Test', () => {
        it('should display error message when using incorrect password', () => {
            cy.visit('/login')

            // Isi form login
            cy.get('#username').type('user123')
            cy.get('#password').type('salah123')

            // Klik tombol login
            cy.get('button[type="submit"]').click()

            // Verifikasi pesan error
            cy.contains('Password salah').should('be.visible')
        })
    })

})