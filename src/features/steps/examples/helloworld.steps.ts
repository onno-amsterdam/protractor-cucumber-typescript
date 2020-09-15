import { Then } from "cucumber";
import { expect } from "chai";
import { HelloWorld } from "../../../page-objects/examples/helloworld.po"

const helloWorld = new HelloWorld();

Then('the page shows header with text {string}', async (text: string) => {
  const headerText = await helloWorld.header.getText();
  
  return expect(headerText).to.equal('Hello World!');
});