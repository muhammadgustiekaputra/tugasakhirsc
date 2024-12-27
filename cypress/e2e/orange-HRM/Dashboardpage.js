class DashboardPage {
    verifyDashboardElements() {
      // Verifikasi elemen-elemen penting di dashboard
      cy.contains('h1', 'Dashboard').should('be.visible');
      cy.get('.quick-launch-panel').should('be.visible');
      cy.get('.head').should('contain', 'OrangeHRM');
    }
  
    verifyEmployeeCount() {
      // Verifikasi jumlah karyawan
      cy.get('.head').contains('Employees').parent().find('span').invoke('text').then((count) => {
        expect(count).to.be.a('string');
      });
    }
  }
  
  export default DashboardPage;