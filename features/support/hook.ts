import { AfterAll, BeforeAll, setDefaultTimeout } from 'cucumber';
import { Logger } from './logger';
import { TestObject } from './test-object.world';

// BeforeAll runs once before all the scenarios are run;
// It can be used to bring the test into a certain state;
BeforeAll(async () => {
    setDefaultTimeout(60000);
    Logger.initiate('test execution started');
    const initialTestObjectName = TestObject.getName();
    Logger.initiate(`the initial name of the test object: ${initialTestObjectName}`);
});

// AfterAll runs once after all the scenarios are run;
// It can be used to clean up the test environment for example;
AfterAll(async () => {
    const eventualTestObjectName = TestObject.getName();
    Logger.tearDown(`the eventual name of the test object: ${eventualTestObjectName}`);
    Logger.tearDown('test execution ended');
});
