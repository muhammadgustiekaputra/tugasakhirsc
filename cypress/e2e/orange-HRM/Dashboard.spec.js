import LoginPage from '../support/pageObjects/loginPage';
import DashboardPage from '../support/pageObjects/dashboardPage';

describe('Dashboard Feature', () => {
  beforeEach(() => {
    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.typeUsername('admin');
    loginPage.typePassword('admin123');
    loginPage.clickLoginButton();
  });

  it('should verify dashboard elements', () => {
    const dashboardPage = new DashboardPage();
    dashboardPage.verifyDashboardElements();
    dashboardPage.verifyEmployeeCount();
  });

  it('should navigate to a specific module', () => {
    const dashboardPage = new DashboardPage();
    dashboardPage.navigateToPIM(); // Contoh navigasi ke modul PIM
    // Tambahkan assertion untuk memverifikasi bahwa kita berada di halaman PIM
  });
});