export default class Page {
    get dismissNotificationsButton() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.widget.Button');
    }

    async launchApp() {
        await driver.launchApp();
    }

    async dismissNotifications() {
        if (await this.dismissNotificationsButton.isExisting()) {
            await this.dismissNotificationsButton.click();
        }
    }

    isVisible(locator) {
        return locator.isDisplayed();
    }

    async click(locator) {
        await locator.click();
    }

    async waitForElement(locator, waitTimeInSeconds) {
        await locator.waitForDisplayed(waitTimeInSeconds * 1000);
    }

    async clearText(locator) {
        await locator.clearValue();
    }

    async sendText(locator, inputText) {
        await locator.addValue(inputText);
    }

    async getText(locator) {
        return await locator.getText();
    }
}
