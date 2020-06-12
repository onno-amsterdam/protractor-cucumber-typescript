import {Given, When, Then} from 'cucumber';
import { Logger } from '../support/logger';

Given('I start a test with {string}', function (message: string) { 
    return Logger.info(message);
});

Given('I start with the state {string}', function (state : string) {
    return Logger.result(state);
});

When('I click button {string}', function (button : string) {
    return Logger.result(button);
});

Then('I see the color {string}', function (color : string) {
    return Logger.result(color);
});
