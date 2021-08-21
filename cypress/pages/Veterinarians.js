import * as locators from "../configuration/locators";

export class Veterinarians {
    verify_veterinarians_table_is_not_empty() {
        /** applying regex to see if the all table rows have content,
         * avoiding to check specific data as it's a dummy one*/
        cy.xpath(locators.veterinarians_page.VETERINARIANS_LIST.locator)
            .invoke("text")
            .should('match', /[a-zA-Z]+/)
        cy.log("Verifying veterinarians table rows has values")
    }
}

export const veterinarians = new Veterinarians();
