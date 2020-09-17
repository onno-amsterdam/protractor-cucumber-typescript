import { browser } from "protractor";

export async function getAlertText() {
    const alertDialog = await browser.switchTo().alert();

    return alertDialog.getText();
}