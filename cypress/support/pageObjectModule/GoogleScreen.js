
const SEARCH = 'input[title="Search"]';
const LOGO = '[id="logo"]';
const WEBSITE = 'a:contains("Website")'
export class GoogleScreen{
    static verifyGoogleLogo() {
        cy.get(LOGO).should('exist');
    }
    static verifyURL(url) {
        cy.location().should((loc) => {
            expect(loc.href).to.eq(url)
        })
    }
    static searchSecurePay(text,textSearched) {
        cy.get(SEARCH).should('exist').type(text).should('have.value',text).type('{enter}')
        cy.contains(textSearched).should('exist');
        cy.get(WEBSITE).should('exist').click();
    }
}