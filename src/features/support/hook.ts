import { AfterAll, BeforeAll, setDefaultTimeout, After, Status } from 'cucumber';
import { Logger } from './logger';
import { TestObject } from './test-object.world';
import { browser } from 'protractor';

// BeforeAll runs once before all the scenarios are run;
// It can be used to bring the test into a certain state;
BeforeAll(async () => {
    setDefaultTimeout(600000);

    /** If page is not Protractor set to false - Protractor will now not wait for $http and $timeouts to finish  */
    browser.waitForAngularEnabled(false);

    Logger.initiate('test execution started');
    const initialTestObjectName = TestObject.getName();
    Logger.initiate(`the initial name of the test object: ${initialTestObjectName}`);
});

After(async function (scenarioResult) {
    let self = this;

    // try and close an alert if it's open. This prevents a failure to block all following tests
    try {
        await browser.switchTo().alert().dismiss();
    } catch {}

    if (scenarioResult.result.status === Status.FAILED) {
    return browser.takeScreenshot()
        .then(function (screenshot) {
            // fix deprecated class
            const decodedImage = new Buffer(screenshot.replace(/^data:image\/png;base64,/, ''), 'base64');
            self.attach(decodedImage, 'image/png');
        });
    };
});

// AfterAll runs once after all the scenarios are run;
// It can be used to clean up the test environment for example;
AfterAll(async () => {
    const eventualTestObjectName = TestObject.getName();
    Logger.tearDown(`the eventual name of the test object: ${eventualTestObjectName}`);
    Logger.tearDown('test execution ended');
});
