class UpdatesPage {
  verifyUpdatesPage() {
    cy.url().should("include", "/updates");
    cy.contains("h1", "Updates").should("be.visible");
  }
}

export default UpdatesPage;
