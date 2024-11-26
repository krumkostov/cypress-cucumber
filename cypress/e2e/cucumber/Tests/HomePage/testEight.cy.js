import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../Pages/HomePage.cy.js";

const homePage = new HomePage();

Given("the Framer site is loaded", () => {
  homePage.visit();
});

When("I hover the 'Mix 3D and 2D design with Framer's' image", () => {
  homePage.hover3dImage();
});

And("I see the 'Click to view in 3D' button", () => {
  homePage.verifyClickToViewIn3DButton();
});

// And("I click on 'Click to view in 3D'", () => {
//   homePage.clickViewIn3DButton();
// });

// Then("I see the 3D animation is displayed", () => {
//   homePage.verify3DAnimation();
// });
