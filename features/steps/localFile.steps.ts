import { Given } from "cucumber";
import { browser } from "protractor";

Given('I open a local file', function () {
    console.log(browser.baseUrl);
    return browser.get(browser.baseUrl);
  });