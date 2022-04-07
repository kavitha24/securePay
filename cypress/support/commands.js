// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is to verify the url --
//import { faker } from 'https://cdn.skypack.dev/@faker-js/faker'

Cypress.Commands.add("verifyURL", (url) => {
  cy.location().should((loc) => {
    expect(loc.href).to.eq(url);
  });
});
// To generate random data
Cypress.Commands.add("generateFixture", () => {
  const { faker } = require("@faker-js/faker");
  cy.writeFile("cypress/fixtures/salesEnquiryData.json", {
    hits: Cypress._.times(1, () => {
      return {
        company: `${faker.lorem.words(3)}`,
        website: `${faker.internet.url()}`,
        firstName: `${faker.name.firstName()}`,
        lastName: `${faker.name.lastName()}`,
        enquiry: `Test${faker.lorem.words(3)}`,
        phone: `${faker.phone.phoneNumber()}`,
        email: `${faker.internet.email()}`,
      };
    }),
  });
});
