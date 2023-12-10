import welcomePage from "../pages/welcome.page.js";
import loginPage from "../pages/login.page.js";

const url = 'http://lojaebac.ebaconline.art.br/';
const username = 'lojaebacqe@gmail.com';
const password = 'GD*peToHNJ1#c$sgk08EaYJQ';

describe('Autenticação', () => {
    it('Deve logar', async () => {
        await welcomePage.launchApp();
        await welcomePage.goToLoginPage();
        await loginPage.login(url, username, password);
        await loginPage.dismissNotifications();
    });
});
