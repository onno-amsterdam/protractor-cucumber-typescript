import { BeforeAll, setDefaultTimeout } from 'cucumber';

BeforeAll(() => {
    console.log('Hook is run!');
    setDefaultTimeout(60000);
});