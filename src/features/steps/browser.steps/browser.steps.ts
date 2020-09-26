import { Given } from 'cucumber';
import { closeAlert } from '../../../helpers/browser.helpers';

Given ('I close the alert', async function() {
    return await closeAlert();
});