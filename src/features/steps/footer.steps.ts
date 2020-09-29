import { Given } from "cucumber";
import { Footer } from "../../page-objects/footer/footer.po"

const footer = new Footer();

Given('I click the blue-button in the the footer', async () => {
    await footer.blueButton.click();
});