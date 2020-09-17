import { expect } from "chai";
import { Given } from "cucumber";
import { DelayedActionsDropDown } from '../../page-objects/dropdown.po';
import { DelayedActions } from '../../page-objects/delayed-actions.po';
import { waitForAlert, waitForElementInDOM, waitForElementNotInDOM } from "../../helpers/ec.helpers";
import { getAlertText } from '../../helpers/browser.helpers'

const dropdown = new DelayedActionsDropDown();
const delayedActionsElements = new DelayedActions();

Given('I select {string} from the delayed actions dropdown', async function (option: keyof DelayedActionsDropDown): Promise<void> {
    await dropdown.dropdownButton.click();
    
    return await dropdown[option].click();
  });

Given('the element is removed from the DOM', async function () {
    const isNotPresent: boolean = await waitForElementNotInDOM(delayedActionsElements.removedElement);

    return expect(isNotPresent).to.equal(true);
  });

Given('the element is added to the DOM', async function () {
    const isPresent: boolean = await waitForElementInDOM(delayedActionsElements.addedElement);

    return expect(isPresent).to.equal(true);
  });

Given('the alert is shown in the browser', async function () {
    const isPresent: boolean = await waitForAlert();

    return expect(isPresent).to.equal(true);
  });

Given('the alert reads text {string}', async function (expectedAlertText) {
    const actualAlertText = await getAlertText();

    return expect(actualAlertText).to.equal(expectedAlertText);
  });