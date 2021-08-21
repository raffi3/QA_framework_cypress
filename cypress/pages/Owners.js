import {BaseMethods} from './BaseMethods.js'
import * as locators from "../configuration/locators"
import {data_generator, getRandomInt, getRandomIntInRange} from "../support/utils"
import {CommonMethods} from "./Common";


class FindOwnersPage {
    click_add_owner_btn() {
        cy.contains(locators.find_owners_page.ADD_OWNER_BUTTON.text).click()
    }
    enter_owner_lastname(lastname=locators.owner_submission_page.LAST_NAME.value) {
        cy.get(locators.find_owners_page.LAST_NAME_INPUT_FIELD.locator)
            .clear()
            .type(lastname)
    }
    click_find_owner_btn() {
        const find_owner_btn_obj =  locators.find_owners_page.FIND_OWNER_BUTTON
        cy.get(find_owner_btn_obj.locator)
            .contains(find_owner_btn_obj.text)
            .click()
    }
}


class OwnersSubmissionPage {
    enter_owner_details() {
        CommonMethods.enter_details(locators.owner_submission_page)
    }
    submit_owner(button_text = 'Add Owner') {
        cy.contains(button_text).click()
    }
}


class OwnerInformationPage {
    assert_owner_info(field_name, combination_list=[]){
        /** METHOD DESCRIPTION: The method validates whether the entered data (expected result) matches with UI data (actual result)
         * In some cases the actual UI result is a combination of two entered values.*/
        let entered_value
        if (combination_list.length === 0){
            entered_value = locators.owner_submission_page[field_name].value
        } else {
            entered_value = BaseMethods.concat_object_values(locators.owner_submission_page, combination_list)
        }
        const ui_field = cy.xpath(locators.owner_information_page[field_name].locator)
        ui_field
            .invoke('text')
            .should('eq', entered_value)
    }
    click_edit_owner_btn() {
        cy.contains('Edit').click()  //TODO move text to locators
    }
    click_add_new_pet_btn() {
        cy.xpath(locators.owner_information_page.ADD_PET_BUTTON.locator).click()
    }
}


class OwnersListPage{
    get_owners_list_select_random() {
        const owners_list_locator = locators.owners_list_page.OWNERS_LIST.locator
        let owner_name_locator = locators.owners_list_page.OWNER_ROW.locator
        cy.get(owners_list_locator).then( (elm) => {
            const random_index = getRandomIntInRange(1, elm.length-1)
            owner_name_locator = owner_name_locator
                .replace("index", random_index)

            cy.xpath(owner_name_locator).click()
        })
    }
    assert_last_crated_owner_details(){
        const FIRST_NAME = locators.owner_submission_page.FIRST_NAME.value
        const LAST_NAME = locators.owner_submission_page.LAST_NAME.value
        const CITY = locators.owner_submission_page.CITY.value
        const TELEPHONE = locators.owner_submission_page.TELEPHONE.value
        return cy.get(locators.owners_list_page.OWNER_ROW.locator)
            .should('contain', FIRST_NAME)
            .and('contain', LAST_NAME)
            .and('contain', CITY)
            .and('contain', TELEPHONE)
    }
}


export const findOwnersPage = new FindOwnersPage()
export const ownersSubmissionPage = new OwnersSubmissionPage()
export const ownerInformationPage = new OwnerInformationPage()
export const ownersListPage = new OwnersListPage()
