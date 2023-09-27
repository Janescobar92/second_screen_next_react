describe("Settings tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.intercept("http://127.0.0.1:8080/socket.io/**", {
      fixture: "socket_io_connected.json",
    });
  });

  it("Go to settings page modify config and go back home", () => {
    // * Go to settings page
    cy.getDataTest("settings-button").click();

    cy.getDataTest("user-input").type("soporte");

    cy.getDataTest("password-input").type("soporte.it.12345");

    cy.getDataTest("submit-login-button").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/settings");
    });

    // * Check settings page title.
    cy.contains(/Configuración/i).should("exist");

    // * Set new mt config values.
    cy.getTextfieldLiItem("COMPANY-input", "motortown");

    cy.clearInputAndType("WS_ROOM-input", "second_screen_2");

    cy.clearInputAndType("WS_SERVER_PORT-input", "http://127.0.0.1:8080");

    cy.getDataTest("submit-settings-button").as("submit-form-button");

    cy.get("@submit-form-button").click();

    cy.shouldHaveAttrValue("logo-container", "src", "/img/logos/mt_logo.svg");

    // * Check empty value on ws room input.
    cy.getDataTest("WS_ROOM-input").as("ws-room-input");

    cy.get("@ws-room-input").find("p").as("ws-room-helpertext");

    cy.get("@ws-room-helpertext").should("not.have.text");

    cy.get("@ws-room-input").clear();

    cy.get("@ws-room-helpertext").should("have.text", "*Campo requerido.");

    // * Check empty value on ws room input.
    cy.getDataTest("WS_SERVER_PORT-input").as("ws-server-input");

    cy.get("@ws-server-input").find("p").as("ws-server-helpertext");

    cy.get("@ws-server-helpertext").should("not.have.text");

    cy.get("@ws-server-input").clear();

    cy.get("@ws-server-helpertext").should("have.text", "*Campo requerido.");

    // * Set new aurgi config values.
    cy.getTextfieldLiItem("COMPANY-input", "aurgi");

    cy.clearInputAndType("WS_ROOM-input", "second_screen");

    cy.clearInputAndType("WS_SERVER_PORT-input", "http://127.0.0.1:8080");

    cy.get("@submit-form-button").click();

    cy.shouldHaveAttrValue(
      "logo-container",
      "src",
      "/img/logos/aurgi_logo.svg"
    );

    // * Go back to home page.
    cy.getDataTest("go-back-button").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
  });
});
