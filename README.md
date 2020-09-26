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
3. Run protractor command ```protractor protractor.cucumber.conf.js```;

## What is Protractor?
Protractor is build upon Selenium Webdriver with some addopations specifically for the testing of Angular applications. Consider for example the following:

***The ElementFinder can be treated as a WebElement for most purposes, in particular, you may perform actions (i.e. click, getText) on them as you would a WebElement. Once an action is performed on an ElementFinder, the latest result from the chain can be accessed using the then method. Unlike a WebElement, an ElementFinder will wait for angular to settle before performing finds or actions.***

### Project has the following: 
- Support for for BDD with Cucumber;
- FE test runner with Protractor;
- html reporting with images of failed scenarios;
- (to do) code quality with formatter and linting;

#### Support for for BDD with cucumber
This project describes in basic functionalities of Cucumber, with examples of use in feature files. Explained are:
* the use of data-tables;
* the use of scenario-outlines; 

