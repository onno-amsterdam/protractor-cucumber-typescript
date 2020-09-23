# Starter project for FE E2E testing
With this repository a test framework can be set up to test front end applications and websites. It uses the following technologies:

* nodejs;
* typescript; 
* protractor;
* cucumberjs;

## What is Protractor?
Protractor is build upon Selenium Webdriver with some addopations specifically for the testing of Angular applications. Consider for example the following:
````
The ElementFinder can be treated as a WebElement for most purposes, in particular, you may perform actions (i.e. click, getText) on them as you would a WebElement. Once an action is performed on an ElementFinder, the latest result from the chain can be accessed using the then method. Unlike a WebElement, an ElementFinder will wait for angular to settle before performing finds or actions.
````

## Goals of this project
Exaustively study the possibilities of the tools in used in this project by implementing them in executable tests.

### Project has the following: 
- Support for for BDD with cucumber;
- FE test runner with protractor;
- (to do) html reporting with Allure;
- (to do) code quality with formatter and linting;

#### Support for for BDD with cucumber
This project describes in basic functionalities of Cucumber, with examples of use in feature files. Explained are:
* the use of data-tables;
* the use of scenario-outlines; 

### To do: 
1. use ts-node so the typescript files don't have to be compiled to javascript (DONE);
