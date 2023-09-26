describe("Settings tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Go to settings page modify config and go back home", () => {
    cy.getDataTest("settings-button").click();

    cy.getDataTest("user-input").type("soporte");

    cy.getDataTest("password-input").type("soporte.it.12345");

    cy.getDataTest("submit-login-button").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/settings");
    });

    cy.contains(/Configuración/i);

    cy.getTextfieldLiItem("COMPANY-input", "motortown");

    cy.clearInputAndType("WS_ROOM-input", "second_screen_2");

    cy.clearInputAndType("WS_SERVER_PORT-input", "http://127.0.0.1:8082");

    cy.getDataTest("submit-settings-button").as("submit-form-button");

    cy.get("@submit-form-button").click();

    cy.shouldHaveAttrValue("logo-container", "src", "/img/logos/mt_logo.svg");

    cy.getTextfieldLiItem("COMPANY-input", "aurgi");

    cy.clearInputAndType("WS_ROOM-input", "second_screen");

    cy.clearInputAndType("WS_SERVER_PORT-input", "http://127.0.0.1:8080");

    cy.get("@submit-form-button").click();

    cy.getDataTest("go-back-button").click();

    cy.shouldHaveAttrValue(
      "logo-container",
      "src",
      "/img/logos/aurgi_logo.svg"
    );

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
  });
});
