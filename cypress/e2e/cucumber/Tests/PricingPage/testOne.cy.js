import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../Pages/HomePage.cy.js";
import PricingPage from "../../Pages/PricingPage.cy.js";

const homePage = new HomePage();
const pricingPage = new PricingPage();

When("I click on the 'Pricing' button", () => {
  homePage.clickPricingButton();
});

And("I see The Pricing Page", () => {
  pricingPage.verifyPricingPage();
});

Then(
  "I see the products' currency symbol is displayed as '$' on the 'Pricing' page",
  () => {
    pricingPage.verifyCurrencySymbol();
  }
);
