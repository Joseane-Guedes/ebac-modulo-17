import Page from './page.js';

class LoginPage extends Page {
    get siteAddressInput() { return $('//android.widget.EditText[@resource-id="com.woocommerce.android:id/input"]'); }
    get continueButton() { return $('//android.widget.Button[@text="Continue"]'); }
    get emailInput() { return $('//android.widget.EditText[@text="Email address"]'); }
    get passwordInput() { return $('//android.widget.EditText[@text="Password"]'); }
    get myStoreTitle() { return $('(//android.widget.FrameLayout[@content-desc="My store"])[1]'); }

    async login(url, email, password) {
        if (await this.myStoreTitle.isExisting()) {
            return;
        } else {
            await this.siteAddressInput.setValue(url);
            await this.continueButton.click();
            await this.emailInput.setValue(email);
            await this.continueButton.click();
            await this.passwordInput.setValue(password);
            await this.continueButton.click();
        }
    }
}

const loginPageInstance = new LoginPage();
export default loginPageInstance;
