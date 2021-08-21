import * as locators from "../configuration/locators"


export class HomePage {
    verify_logo_image_position() {
        cy.log("Check if logo is present and appears after Welcome message")
        // Position is handled within xpath
        cy.xpath(locators.home_page.LOGO.locator)
            .should('exist')
    }
    // Future method
    // verify_image_through_pixels() {}
}

export const homePage = new HomePage()
