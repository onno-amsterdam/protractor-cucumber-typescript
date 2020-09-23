import { expect } from "chai";
import { Given } from "cucumber";
import { ElementFinder } from "protractor";
import { HomePage } from "../../page-objects/homepage/homepage.po";

const menuRight = new HomePage().menuLeft;



Given ('each menu item has a {string} attribute {string}', async function (attributeName: string, expectedAttributeValue: string) {
    const menuItems: ElementFinder[] = await menuRight.menuItems;
    
    for (const item of menuItems) {
        const actualAttributeValue = await item.getAttribute(attributeName);
        
        return expect(actualAttributeValue).to.equal(expectedAttributeValue);
      }
  });

Given('I see the menu-items in the left menu with text:', async function (dataTable) {
    const dataHash = dataTable.hashes();
    const menuItems: ElementFinder[] = await menuRight.menuItems;

    async function checkIfTextIsCorrect (element: ElementFinder, expectedHeaderText: string) {
        const actualHeaderText = await element.$('h5').getText();
        console.log(actualHeaderText);

        return expect(expectedHeaderText).to.equal(actualHeaderText);
    }

    // finishes after the first loop!
    for (const index of Object.keys(dataHash)) {
        const expectedHeaderText = dataHash[index]['header'];
        console.log(expectedHeaderText);
        
        return await checkIfTextIsCorrect(menuItems[Number(index)], expectedHeaderText);
    };
  });