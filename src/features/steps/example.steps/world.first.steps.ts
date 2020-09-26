import { Given } from 'cucumber';
import { browser } from 'protractor';
import { TestObject } from '../../support/test-object.world';

Given('I run a scenario step', async () => {
    return await browser.sleep(1000);
});

Given('I set the global name to {string}', async (name: string) => {
    return TestObject.setName(name);
});