# Starter project for FE E2E testing
With this repository a test framework can be set up to test front end applications and websites. It uses the following technologies:

* Nodejs;
* Typescript; 
* Protractor;
* Cucumberjs;

## About the project
This project can be used as a starter kit / example of how to implement a protractor-cucumber framework written in typescript. It shows the use of basic but much used protractor and cucumber functionality. The project can be used as a template on how to use page-object oriented design.

The project exists of example features that explain usage of different cucumber features and of features that test the functionality of a demo/test webpage. To run the test webpage you need to have it up and running. The webpage and instructions on how to use it can be found in this repository [awesome-test-webpage](https://github.com/onno-amsterdam/awesome-test-webpage).

## How to run the tests
To run the test follow these steps: 
1. Clone the project;
2. Run command ```npm install```;
3. Make sure you have the [awesome-test-webpage](https://github.com/onno-amsterdam/awesome-test-webpage) running at ```http://localhost:8081```;
4. Run protractor command ```protractor protractor.cucumber.conf.js```;

By default the project will only run the features testing the test webpage. The example features explaining the use of different cucumber functionality are run by appending ```--cucumberOpts.tags=@EXAMPLE``` to the command in step 4.

## What is Protractor?
Protractor is build upon Selenium Webdriver with some addopations specifically for the testing of Angular applications. Consider for example the following:

_The ElementFinder can be treated as a WebElement for most purposes, in particular, you may perform actions (i.e. click, getText) on them as you would a WebElement. Once an action is performed on an ElementFinder, the latest result from the chain can be accessed using the then method. Unlike a WebElement, an ElementFinder will wait for angular to settle before performing finds or actions._

## Project has the following features: 
- Support for for BDD with Cucumber;
- html reporting with images of failed scenarios;

### Support for for BDD with cucumber
This project describes in basic functionalities of Cucumber, with examples of use in feature files. Explained are:
* the use of data-tables;
* the use of scenario-outlines; 

#### VSCode Cucumber Plugin
To help development of Cucumber feature files and the code underneath the IDE VSCode has a great plugin available: [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete). This plugin allows for (among other things): 
* autocomplete of steps when writing features;
* navigation to step definitions;
* highlighting of missing step definitions;

### Html reporting
The project uses a cucumber plugin to generate an html report of all the test features and scenarios run and their result. For each failed scenario a screenshot of the browser is added to the report. More on the plugin used see the [cucumber-html-reporter](https://www.npmjs.com/package/cucumber-html-reporter) npm package page.

## Contributing
Feel free to do anything with a fork of this project. If you have anything interessting to add to this project please feel free to open a pull request. That would be much appretiated.

To contribute do the following:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/new_feature`)
3. Commit your Changes (`git commit -m 'added some new stuff'`)
4. Push to the Branch (`git push origin feature/new_feature`)
5. Open a Pull Request

## License
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)
**[MIT license](http://opensource.org/licenses/mit-license.php)**