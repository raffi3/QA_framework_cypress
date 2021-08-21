import * as locators from "../configuration/locators";

export class BaseMethods{
    static get_element_position_in_html(xpath_) { //TODO call
        return cy.xpath(xpath_).invoke('index')
    }
    static concat_object_values(obj, values_list = []) {
        let combinated_value = ""
        for (let val of values_list) {
            combinated_value = combinated_value.concat(obj[val].value, " ")
        }
        return combinated_value.trim()
    }
    static return_text_of_element(locator){
        return cy.xpath(locator).invoke('text')
    }
}
