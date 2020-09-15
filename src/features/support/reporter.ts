import { CucumberJSAllureFormatter } from 'allure-cucumberjs';
import { AllureRuntime } from 'allure-js-commons';

export default class Reporter extends CucumberJSAllureFormatter {
  constructor(options: any) {
    super(
      options,
      new AllureRuntime({ resultsDir: "./out/allure-results" }), {
        labels: {
					issue: [/@bug_(.*)/],
          epic: [/@feature:(.*)/],
        }
      }
    );
  }
}