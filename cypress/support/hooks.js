import HomePage from "../e2e/cucumber/Pages/HomePage.cy.js";

const homePage = new HomePage();

beforeEach(() => {
  homePage.visit();
});
