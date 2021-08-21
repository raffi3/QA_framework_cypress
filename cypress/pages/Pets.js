import {CommonMethods} from './Common.js'
import * as locators from "../configuration/locators"

// Global scoped, Mutable variable objects
let pet_name_obj = locators.pet_submission_page.NAME
let pet_birthdate_obj = locators.pet_submission_page.DATE
let add_visit_btn_obj = locators.pets_and_visits_section.ADD_VISIT_BUTTON

class PetsSubmissionPage {
    enter_pet_details() {
        CommonMethods.enter_details(locators.pet_submission_page)
    }
    submit_pet() {
        cy.contains("Add Pet").click()
    }
}


class PetsAndVisits {
    click_add_visit_btn() {
        /**Selecting "Add Visit" button which belongs to specific pet,
         * since there can be multiple pets for an owner */
        const locator = add_visit_btn_obj.locator
            .replace("pet_name", pet_name_obj.value)
        cy.xpath(locator).click()
    }
    assert_pet_details() {
        cy.xpath(locators.pets_and_visits_section.PET_ROW.locator)
            .should('contain', pet_name_obj.value)
            .and('contain', pet_birthdate_obj.value)
    }
    assert_visit_details(filed_name){
        /** Method is used to validate Visit details like DATE, DESCRIPTION
         * Note: each targeted element has specific xpath */
        const entered_value = locators.visits_submission_page[filed_name].value
        const locator = locators.pets_and_visits_section[filed_name].locator
            .replace("pet_name", pet_name_obj.value)

        const ui_field = cy.xpath(locator)
        ui_field.should('contain', entered_value)
    }
}


class VisitsSubmissionPage{
    enter_visit_details() {
        CommonMethods.enter_details(locators.visits_submission_page)
    }
    submit_visit() {
        cy.contains("Add")
            .contains("Visit")
            .click()
    }
}


export const petsSubmissionPage = new PetsSubmissionPage()
export const petsAndVisits = new PetsAndVisits()
export const visitsSubmissionPage = new VisitsSubmissionPage()

