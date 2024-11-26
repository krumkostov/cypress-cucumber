class PricingPage {
  verifyPricingPage() {
    cy.url().should("include", "/pricing");
  }

  verifyCurrencySymbol() {
    cy.get("span")
      .contains("/mo")
      .each(($el) => {
        cy.wrap($el).should("contain.text", "$");
      });
  }

  checkFAQQuestionsCount() {
    cy.get(".faq-question").should("have.length", 4);
  }
}
export default PricingPage;
