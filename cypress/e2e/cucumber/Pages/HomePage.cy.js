class HomePage {
  visit() {
    cy.visit("https://mind-wend-913065.framer.app/");
  }

  clickPricingButton() {
    cy.contains("span", "Pricing").should("be.visible").click();
  }

  scrollToComponentsSection() {
    cy.contains("h2", "Many types of components to customize").scrollIntoView();
  }
  verifyVisitButtons() {
    cy.get('[name="Card"], [name="Card Small"]').each(($card) => {
      cy.wrap($card).find('[name="Button"]').should("contain.text", "Visit");
    });
  }

  scrollToBottom() {
    cy.scrollTo("bottom");
  }
  verifySignUpButtonColor() {
    cy.get('input[type="submit"][value="Sign Up"]').should(
      "have.css",
      "background-color",
      "rgb(255, 82, 79)"
    );
  }

  clickGetTheAppButton() {
    cy.contains("span", "Get the App").click();
  }
  verifyBackgroundBlur() {
    cy.get("body").should("have.css", "filter", "blur(5px)");
  }

  srollToUpdatesButton() {
    cy.contains("span", "Updates").should("be.visible");
  }

  clickUpdatesButton() {
    cy.contains("span", "Updates").click();
  }

  changeToMobileView() {
    cy.viewport("iphone-8");
  }
  verifyMobileButtons() {
    cy.contains("span", "Get the App").then(($getTheApp) => {
      cy.contains("span", "Watch video").then(($watchVideo) => {
        const getTheAppRect = $getTheApp[0].getBoundingClientRect();
        const watchVideoRect = $watchVideo[0].getBoundingClientRect();
        expect(getTheAppRect.bottom).to.be.lessThan(watchVideoRect.top);
      });
    });
  }
  hover3dImage() {
    cy.get('[data-framer-name="Hero"]').trigger("mouseover").wait(1000);
  }

  verifyClickToViewIn3DButton() {
    cy.contains("span", "Click to view in 3D").should("be.visible");
  }
  clickViewIn3DButton() {
    cy.contains("span", "Click to view in 3D").click();
  }
  verify3DAnimation() {
    cy.get(".3d-animation").should("be.visible");
  }
}

export default HomePage;
