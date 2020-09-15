import { Given } from "cucumber";
import { openHomePage } from "../../helpers/navigation.helpers";
import { HomePage } from "../../page-objects/homepage.po";
import { expect } from "chai";

const homePage = new HomePage();

Given('I open the home page', async function () {
    return await openHomePage()
  });

Given('I see the {string} object on the page', async function (objectName: keyof HomePage) {
    const isPresent = await homePage[objectName].headerTitle.isPresent();

    return expect(isPresent).to.equal(true);
  });

Given('the {string} object header shows text {string}', async function (objectName: keyof HomePage, headerText: string) {
    const text = await homePage[objectName].headerTitle.getText();
    
    return expect(text).to.equal(headerText);
  });
