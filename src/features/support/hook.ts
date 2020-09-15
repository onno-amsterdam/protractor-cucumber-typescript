import { AfterAll, BeforeAll, setDefaultTimeout, After } from 'cucumber';
import { Logger } from './logger';
import { TestObject } from './test-object.world';
import { browser } from 'protractor';

// BeforeAll runs once before all the scenarios are run;
// It can be used to bring the test into a certain state;
BeforeAll(async () => {
    setDefaultTimeout(60000);

    /** If page is not Protractor set to false - Protractor will now not wait for $http and $timeouts to finish  */
    browser.waitForAngularEnabled(false);

    Logger.initiate('test execution started');
    const initialTestObjectName = TestObject.getName();
    Logger.initiate(`the initial name of the test object: ${initialTestObjectName}`);
});

After(async () => {
    // only sleep for development and debugging
    await browser.sleep(5000);
})

// AfterAll runs once after all the scenarios are run;
// It can be used to clean up the test environment for example;
AfterAll(async () => {
    const eventualTestObjectName = TestObject.getName();
    Logger.tearDown(`the eventual name of the test object: ${eventualTestObjectName}`);
    Logger.tearDown('test execution ended');
});