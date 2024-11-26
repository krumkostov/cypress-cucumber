import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../Pages/HomePage.cy";

const homePage = new HomePage();

When("I scroll to the bottom of the components page", () => {
  homePage.scrollToBottom();
  cy.wait(2000);
});

Then(`I see the "Sign Up" button's color`, () => {
  homePage.verifySignUpButtonColor();
});
