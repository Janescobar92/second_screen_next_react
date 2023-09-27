describe("Home tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.intercept("http://127.0.0.1:8080/socket.io/**", {
      fixture: "socket_io_connected.json"
    });
  });

  it("Home Initial State Proper content and behavior", () => {
    cy.getDataTest("welcome-title").should(
      "contain.text",
      "Tenemos las MEJORES OPCIONES para ti"
    );
  });
});
