const PRICINGTITLE = 'h1:contains("Pricing")';
const POLI = '[title="Payment Gateway POLi Post SecurePay"]:eq(0)';
const POLIIMG = ".site-title > a > img";

export class SecurePayPricing {
  static verifyPricingTitle() {
    cy.get(PRICINGTITLE).should("exist");
  }
  static clickPOLILearnMore() {
    cy.get(POLI).scrollIntoView().should("exist");
    cy.get(POLI)
      .parent()
      .parent()
      .next()
      .next()
      .should("exist")
      .invoke("removeAttr", "target")
      .click();
  }
  static verifyPOLIScreenisLoaded() {
    cy.url().should("include", "polipayments.");
    cy.get(POLIIMG).should("exist");
  }
}
