import { Given } from "cucumber";
import { openPage } from "../../../helpers/navigation.helpers"

Given('I open the page {string}', async function (pageName: string) {
  return await openPage(pageName);
});