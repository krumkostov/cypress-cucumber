import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../Pages/HomePage.cy.js";

const homePage = new HomePage();

Given("the Framer site is loaded on mobile", () => {
  homePage.changeToMobileView();
});

Then(
  "I see the 'get the app' and 'watch video' buttons are displayed one above the other on mobile",
  () => {
    homePage.verifyMobileButtons();
  }
);
