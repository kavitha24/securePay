
const PRICING = 'li:contains("Pricing")';
const STANDARDPRICING = 'a:contains("Standard pricing")';

export class SecurePay{
    static verifySecurePayLaunch(url) {
      cy.verifyURL(url)
    }
    static clickPricing() {
        cy.get(PRICING).should('exist').first().click();
    }
    static clickStandardPricing() {
        cy.get(STANDARDPRICING).should('exist').first().click()
    }
    static verfiyRedirectToPricing(pricingUrl) {
        cy.location().should((loc) => {
            expect(loc.href).to.eq(pricingUrl)
            
        })
    }
}