const path = require('path');

exports.config = {
    // framework settings
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    
    // selenium address when using local running webdriver
    seleniumAddress: "http://localhost:4444/wd/hub",
    // tells protractor how long to wait for a page to load
    getPageTimeout: 60000,
    // the timeout in milliseconds for each script run on the browser
    allScriptsTimeout: 500000,

    // set the browser use name of browser - the driver should be installed by protractor
    capabilities: {
        'browserName': 'chrome',
        // set the options for the browser
        'chromeOptions': {}
    },

    // base url if application under test is running locally
    baseUrl: 'http://localhost:8081/',
    
    // Spec patterns are relative to this directory.
    cucumberOpts: {
        require: [
            'src/features/steps/**/*.steps.ts',
            'src/features/support/**/*.ts',            
        ],
        tags: "~DISABLED",
        format: [
            require.resolve('cucumber-pretty'),
            `json:${process.cwd()}/cucumber_reports/report.json`,  
        ],
    },
    
    // specify the path to the feature files;
    specs: ['src/features/**/*.feature'],
    onPrepare,
    onCleanUp,
};

async function onPrepare() {
    // with the line of code below the typescript code doesn't have to be compiled to Javascript;
    require('ts-node').register({
        project: path.join(__dirname, './tsconfig.json'),
      });
    // this timeout is used to specify the amount of time the driver should wait while searching for an element if it is not immediately present. 
    await browser.manage().timeouts().implicitlyWait(3000);
};

/**
 * The onCleanUp function creates an html report of the test execution.
 */
async function onCleanUp() {
    const reporter = require('cucumber-html-reporter');
    const options = {
              theme: 'bootstrap',
              jsonFile: './cucumber_reports/report.json',
              output: `./cucumber_reports/test_results.html`,
              reportSuiteAsScenarios: true,
              launchReport: true,
            };
    reporter.generate(options);
  };


