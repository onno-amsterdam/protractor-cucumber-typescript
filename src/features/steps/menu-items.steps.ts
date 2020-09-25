import { expect } from "chai";
import { Given } from "cucumber";
import { ElementFinder } from "protractor";
import { HomePage } from "../../page-objects/homepage/homepage.po";

const menuLeft = new HomePage().menuLeft;

Given('each menu item has a {string} attribute {string}', async function (attributeName: string, expectedAttributeValue: string) {
    const menuItems: ElementFinder[] = await menuLeft.getAllMenuItems();

    for (const item of menuItems) {
        const actualAttributeValue = await item.getAttribute(attributeName);

        expect(expectedAttributeValue,
            `Expect the value of the ${attributeName} attribute to be ${expectedAttributeValue}`)
            .to.equal(actualAttributeValue);
    }
});

Given('I see the menu-items in the left menu with text:', async function (dataTable) {
    const dataHash = dataTable.hashes();
    const menuItems: ElementFinder[] = await menuLeft.getAllMenuItems();

    for (const index of Object.keys(dataHash)) {
        const menuItem = menuItems[Number(index)];

        const expectedHeaderText = dataHash[index]['header'];
        const expectedItemText = dataHash[index]['text'];

        const actualHeaderText = await menuItem.$('h5').getText();
        const actualItemText = await menuItem.$('td > div').getText();

        expect(expectedHeaderText,
            `Expect the text of the menu-item header to equal ${expectedHeaderText}`)
            .to.equal(actualHeaderText);
        expect(expectedItemText,
            `Expect the body text of the menu-item to equal ${expectedItemText}`)
            .to.equal(actualItemText);
    };
});

Given('each menu item contains a icon element', async function () {
    const menuItems: ElementFinder[] = await menuLeft.getAllMenuItems();

    for (const item of menuItems) {
        const iconIsPresent: boolean = await item.$('i').isPresent();

        expect(iconIsPresent,
            `Expect the <i> element to be present in the menu item`)
            .to.equal(true);
    };
})

Given('the menu items of in the left menu have the following attributes:', async function (dataTable) {
    const dataRows = dataTable.rows();
    const menuItems: ElementFinder[] = await menuLeft.getAllMenuItems();

    for (let i = 0; i < menuItems.length; i++) {
        const attribute = dataRows[i][0];
        const expectedAttributeValue = dataRows[i][1];
        const actualAttributeValue: string = await menuItems[i].$('div').getAttribute(attribute);
        
        expect(expectedAttributeValue,
            `Expect the value of the ${attribute} attribute to equal: ${expectedAttributeValue}`)
            .to.equal(actualAttributeValue);
    };
}); 