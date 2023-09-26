/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add("getDataTest", (dataTestSelector) => {
  return cy.get(`[data-test=${dataTestSelector}]`);
});

Cypress.Commands.add("getTextfieldLiItem", (dataTestSelector, dataLiValue) => {
  return cy
    .getDataTest(dataTestSelector)
    .click()
    .get(`ul > li[data-value="${dataLiValue}"]`)
    .click();
});

Cypress.Commands.add("clearInputAndType", (dataTest, value) => {
  cy.getDataTest(dataTest).find("input").clear().type(value);
});

Cypress.Commands.add("shouldHaveAttrValue", (dataTest, attr, attrValue) => {
  cy.getDataTest(dataTest).should("have.attr", attr, attrValue);
});

// Declare global custom Cypress commands
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @param value - The value of the data-cy attribute to select.
       * @example cy.getDataTest('greeting')
       */
      getDataTest(value: string): Chainable<JQuery<HTMLElement>>;

      /**
       * Custom command to select an <li> element within a text field based on specific data attributes.
       * @param dataTestSelector - The data-cy attribute value of the text field.
       * @param dataLiValue - The value of the data-li-value attribute of the <li> to select.
       * @example cy.getTextfieldLiItem('myTextField', 'itemValue')
       */
      getTextfieldLiItem(
        dataTestSelector: string,
        dataLiValue: string
      ): Chainable<JQuery<HTMLElement>>;

      /**
       * Custom command to clear an input field and type a new value into it.
       * @param dataTest - The data-cy attribute value of the input field.
       * @param value - The new value to type into the input field.
       * @example cy.clearInputAndType('myInput', 'New Value')
       */
      clearInputAndType(
        dataTest: string,
        value: string
      ): Chainable<JQuery<HTMLElement>>;

      /**
       * Custom command to assert that an element has a specific attribute value based on its data-cy attribute.
       * @param dataTest - The data-cy attribute value of the element to check.
       * @param attr - The attribute to check.
       * @param attrValue - The expected value of the attribute.
       * @example cy.shouldHaveAttrValue('myElement', 'href', 'https://example.com')
       */
      shouldHaveAttrValue(
        dataTest: string,
        attr: string,
        attrValue: string
      ): Chainable<JQuery<HTMLElement>>;
    }
  }
}

// Export an empty object to satisfy module requirements
export {};
