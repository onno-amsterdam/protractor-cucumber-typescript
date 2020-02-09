const Reporter = require("./features/support/reporter.js");

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
            'features/tsc-out/steps/**/*.steps.js',
            'features/tsc-out/support/**/*.js',
        ],
        tags: false,
    },
    
    // specify the path to the feature files
    specs: ['features/**/*.feature'],
    
    onPrepare,
};

async function onPrepare() {
    await browser.manage().timeouts().implicitlyWait(3000);
}
