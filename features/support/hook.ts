import { AfterAll, BeforeAll, setDefaultTimeout } from 'cucumber';
import { World } from '../support/world';

// BeforeAll runs once before all the scenarios are run;
BeforeAll(async () => {
    console.log('[INFO] this is the BeforeAll');
    console.log(await World.getExperienceName());
    setDefaultTimeout(60000);
});

AfterAll(async () => {
    console.log('[INFO] this is the AfterAll');
    console.log(World.getExperienceName());
});
