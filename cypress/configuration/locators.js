/** File Description: Locators are separated with modules (Owners, Pets, Veterinarians) for easy management,
* With the code increase they can be separated into multiple files,
* "value" parameters are being generated during test run in relevant Page Object Models,
* This structure can be easily extended to support localization in apps if needed in future.*/
export const owner_submission_page = {
    "FIRST_NAME": {
        "locator": '//input[@id="firstName"]',
        "value": ''
    },
    "LAST_NAME": {
        "locator": '//input[@id="lastName"]',
        "value": ''
    },
    "ADDRESS": {
        "locator": '//input[@id="address"]',
        "value": ''
    },
    "CITY": {
        "locator": '//input[@id="city"]',
        "value": ''
    },
    "TELEPHONE": {
        "locator": '//input[@id="telephone"]',
        "value": ''
    }
}
export const owner_information_page = {
    "NAME": {
        "locator": '//*[text() = "Name"]//following-sibling::td',
        "value": 'readonly'
    },
    "ADDRESS": {
        "locator": '//*[text() = "Address"]//following-sibling::td',
        "value": 'readonly'
    },
    "CITY": {
        "locator": '//*[text() = "City"]//following-sibling::td',
        "value": 'readonly'
    },
    "TELEPHONE": {
        "locator": '//*[text() = "Telephone"]//following-sibling::td',
        "value": 'readonly'
    },
    "ADD_PET_BUTTON": {
        "locator": '//*[contains(text(), "New Pet")]',
        "value": 'readonly'
    }
}
export const find_owners_page = {
    "LAST_NAME_INPUT_FIELD": {
        "locator": '#lastName',
        "value": ''
    },
    "FIND_OWNER_BUTTON": {
        "locator": 'button[class*="btn-default"]',
        "text": "Find",
        "value": 'readonly'
    },
    "ADD_OWNER_BUTTON": {
        "locator": '//a[text() = "Add Owner"]',
        "text": "Add Owner",
        "value": 'readonly'
    }
}
export const owners_list_page = {
    "OWNERS_LIST": {
        "locator": 'tr',
        "value": 'readonly'
    },
    "OWNER_ROW": {
        "locator": '//tr[index]/td[1]/a',
        "value": 'readonly'
    }
}

export const pet_submission_page = {
    "NAME": {
        "locator": '//input[@id="name"]',
        "value": ''
    },
    "DATE": {
        "locator": '//input[@id="birthDate"]',
        "value": ''
    }
}

export const pets_and_visits_section = {
    "ADD_VISIT_BUTTON": {
        /**Locator selects "Add Visit" button which belongs to specific pet, since there can be multiple */
        "locator": '//td[.//*[contains(text(),"pet_name")]]/following-sibling::td//a[contains(text(),"Visit")]',
        "value": 'readonly'
    },
    "PET_ROW": {
        "locator": '//dl[@class="dl-horizontal"]/dd',
        "value": 'readonly'
    },
    "DATE": {
        "locator": '//td[.//*[contains(text(),"pet_name")]]/following-sibling::*//td[1]',
        "value": 'readonly'
    },
    "DESCRIPTION": {
        "locator": '//td[.//*[contains(text(),"pet_name")]]/following-sibling::*//td[2]',
        "value": 'readonly'
    }
}
export const visits_submission_page = {
    "DATE": {
        "locator": '//*[@id="date"]',
        "value": ''
    },
    "DESCRIPTION": {
        "locator": '//*[@id="description"]',
        "value": ''
    }
}

export const home_page = {
    "LOGO": {
        "locator": '//*[text()="Welcome"]/following-sibling::div[1][.//img[contains(@src, "pets.png")]]',
        "value": 'readonly'
    }
}

export const veterinarians_page = {
    "VETERINARIANS_LIST": {
        "locator": '//tbody/tr',
        "value": 'readonly'
    }
}

