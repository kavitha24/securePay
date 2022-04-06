import { GoogleScreen} from "../support/pageObjectModule/GoogleScreen"
import {SecurePay} from "../support/pageObjectModule/SecurePay_Home_Screen"
import { SecurePayPricing } from "../support/pageObjectModule/SecurePay_Pricing_Screen";
import { POLI } from '../support/pageObjectModule/POLI_Screen';
describe("Launch secure Pay, select standard pricing and fill the Merchant enquiry", () => {
    before(() => {
        cy.generateFixture();
    })
    it("Lauch Google and search for securePay", ()=>{
        cy.visit('/');
        GoogleScreen.searchSecurePay("securePay","SecurePay Pty Ltd");
    })
    it("Verify click through to securePay website opens up secure pay website", ()=>{
    SecurePay.verifySecurePayLaunch("https://www.securepay.com.au/")

    })
    it('Verify navigation of pricing->standardpricing', () => {
        SecurePay.clickPricing();
        SecurePay.clickStandardPricing()
    })
    it("Verify Standard Pricing Page is loaded", () => {
        SecurePay.verfiyRedirectToPricing("https://www.securepay.com.au/pricing")
    })
    it("Verify Scroll to the bottom of page and verify Learn more under POLI and click", () => {
        SecurePayPricing.verifyPricingTitle();
        SecurePayPricing.clickPOLILearnMore();
    })
    it("Verify POLI site is loaded", () => {
        SecurePayPricing.verifyPOLIScreenisLoaded()
    })
    it("Navigate to sell and make sales enquiry", () => {
        POLI.clickSellWithPOLI();
        POLI.scrollToSalesEnquiry();
    })
    it('Enter generated random data in Sales enquiry details', () => {
        cy.fixture("salesEnquiryData.json").then(($randomData) => {
            POLI.enterCompany($randomData.hits[0].company)
            POLI.enterEmail($randomData.hits[0].email)
            POLI.enterFirstName($randomData.hits[0].firstName)
            POLI.enterLastName($randomData.hits[0].lastName)
            POLI.enterWebsite($randomData.hits[0].website)
            POLI.enterEnquiry($randomData.hits[0].enquiry)
            POLI.enterPhone($randomData.hits[0].phone)
            POLI.recapcha()
            POLI.verifySubmitButton()


        })
    })
})