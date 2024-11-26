import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../Pages/HomePage.cy.js";
import UpdatesPage from "../../Pages/UpdatesPage.cy.js";

const homePage = new HomePage();
const updatesPage = new UpdatesPage();
And("I see the 'Updates' button", () => {
  homePage.srollToUpdatesButton;
});

When("I click on the 'Updates' button", () => {
  homePage.clickUpdatesButton();
});

Then("I see the Updates page is displayed", () => {
  updatesPage.verifyUpdatesPage();
});
