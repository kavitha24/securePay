const SELLWITHPOLI = 'a:contains("sell")';
const MERCHANTENQUIRY = 'span:contains("Merchant Enquiry"):eq(1)';
const COMPANY = "#Company";
const PHONE = "#Phone";
const FIRSTNAME = "#FirstName";
const WEBSITE = "#Website";
const LASTNAME = "#LastName";
const EMAIL = "#Email";
const ENQUIRY = "#Description";
const IMNOTROBOT = 'iframe[title="reCAPTCHA"]';
const SUBMIT = 'a:contains("SUBMIT")';
export class POLI {
  static clickSellWithPOLI() {
    cy.get(SELLWITHPOLI).should("exist").click({ force: true });
    cy.url().should("include", "Sell");
  }

  static scrollToSalesEnquiry() {
    cy.get(MERCHANTENQUIRY).scrollIntoView();
    cy.get(MERCHANTENQUIRY).should("exist");
  }
  static getIframeBody() {
    return cy
      .get(IMNOTROBOT)
      .its("0.contentDocument")
      .should("exist")
      .its("body")
      .then(cy.wrap);
  }
  static recapcha() {
    POLI.getIframeBody().find("#recaptcha-anchor").click();
  }
  static enterCompany(company) {
    cy.get(COMPANY).should("exist").clear().type(company);
  }
  static enterPhone(phone) {
    cy.get(PHONE).should("exist").clear().type(phone);
  }
  static enterFirstName(firstName) {
    cy.get(FIRSTNAME).should("exist").clear().type(firstName);
  }
  static enterWebsite(website) {
    cy.get(WEBSITE).should("exist").clear().type(website);
  }
  static enterLastName(lastName) {
    cy.get(LASTNAME).should("exist").clear().type(lastName);
  }
  static enterEmail(email) {
    cy.get(EMAIL).should("exist").clear().type(email);
  }
  static enterEnquiry(enquiry) {
    cy.get(ENQUIRY).should("exist").clear().type(enquiry);
  }

  static verifySubmitButton() {
    cy.get(SUBMIT).should("exist");
  }
}
