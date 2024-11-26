import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../Pages/HomePage.cy";

const homePage = new HomePage();

When(
  "I scroll to 'Many types of components to customize' in the components page",
  () => {
    homePage.scrollToComponentsSection();
  }
);

Then(
  "I see the 'Visit' button is displayed on each card in that section",
  () => {
    homePage.verifyVisitButtons();
  }
);
