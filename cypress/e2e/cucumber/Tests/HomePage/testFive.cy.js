import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../Pages/HomePage.cy.js";

const homePage = new HomePage();

And("I see the 'Get the app' button", () => {
  homePage.clickGetTheAppButton;
});

When("I click on the 'Get the app' button", () => {
  homePage.clickGetTheAppButton();
});

Then("I see the background is blurred", () => {
  homePage.verifyBackgroundBlur();
});
