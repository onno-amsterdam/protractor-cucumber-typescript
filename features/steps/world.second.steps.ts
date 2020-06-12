import { Given } from 'cucumber';
import { TestObject } from '../support/test-object.world';
import { Logger } from '../support/logger';

Given('I read the global name', async () => {
   const testObjectName = TestObject.getName();
   return Logger.info(`this is the name: ${testObjectName}`);
});