const path = require('path');

exports.config = {
    // framework settings
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    
    // selenium address when using local running webdriver
    seleniumAddress: "http://localhost:4444/wd/hub",
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,

    // set the browser use name of browser - the driver should be installed by protractor
    capabilities: {
        'browserName': 'chrome',
        // set the options for the browser
        'chromeOptions': {}
    },

    // base url if application under test is running locally
    baseURL: 'http://localhost:8764/',
    
    // Spec patterns are relative to this directory.
    cucumberOpts: {
        require: [
            'features/steps/**/*.steps.ts',
            'features/support/**/*.ts',            
        ],
        tags: "@data-tables",
        format: [
            require.resolve('cucumber-pretty'),
            //'features/support/reporter.ts',
        ],
    },
    
    // specify the path to the feature files
    specs: ['features/**/*.feature'],
    
    onPrepare,
};

async function onPrepare() {
    require('ts-node').register({
        project: path.join(__dirname, './tsconfig.json'),
      });
    await browser.manage().timeouts().implicitlyWait(3000);
}
