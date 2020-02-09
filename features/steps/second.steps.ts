import { Given } from 'cucumber';
import { World } from '../support/world';

Given('I read the global name', async (name: string) => {
    console.log(World.getExperienceName());
    
    return console.log('Done!');
});