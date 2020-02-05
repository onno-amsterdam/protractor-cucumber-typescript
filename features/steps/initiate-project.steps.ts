import { Given } from 'cucumber';
import { browser } from 'protractor';

Given('I run a scenario step', async () => {
    console.log('[INFO] I am run!');
    
    return await browser.sleep(10000);
  });