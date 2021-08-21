import {data_generator} from "../support/utils";

export class CommonMethods {
    static go_to_page(page_name) {
        /** This method is useful for Navigation Bar(on the top)
         * which is common for all pages*/
        cy.contains(page_name).click()
    }

    static enter_details(object_) {
    /** This method is used for entering details for
     * Owners, Pets, and Visit
     * For each field,
     * 1. finds a field in HTML DOM,
     * 2. enters random generated test data,
     * 3. saves it in object for later comparison **/
        for (let [field_name, field_obj] of Object.entries(object_)) {
            const text_to_enter = field_obj.value = data_generator[field_name]()
            cy.xpath(field_obj.locator)
                .clear()
                .type(text_to_enter)
        }
    }
}

