import { Given } from 'cucumber';
import { browser } from 'protractor';
import { World } from '../support/world';

Given('I run a scenario step', async () => {
    console.log('[INFO] this is the first step!');
    console.log(World.getExperienceName());

    return await browser.sleep(1000);
});

Given('I set the global name to {string}', async (name: string) => {
    console.log('[INFO] the name is set in the second step!');
    return World.setExperienceName(name);
});