describe("Home tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Home Initial State Proper content and behavior", () => {
    cy.getDataTest("welcome-title").should(
      "contain.text",
      "Tenemos las MEJORES OPCIONES para ti"
    );
  });
});
