import {findOwnersPage, ownerInformationPage, ownersListPage} from "../pages/Owners";
import {petsAndVisits, petsSubmissionPage, visitsSubmissionPage} from "../pages/Pets";
import {CommonMethods} from "../pages/Common";


describe("Pet Flow - Add Pet & Visit/Validate details", () => {
    it("Open existing owner from the list", function () {
        CommonMethods.go_to_page("Find owners")
        findOwnersPage.click_find_owner_btn()
        ownersListPage.get_owners_list_select_random()
    })

    it("Add a new pet for the existing owner.", function () {
        ownerInformationPage.click_add_new_pet_btn()
        petsSubmissionPage.enter_pet_details()
        petsSubmissionPage.submit_pet()
    })

    it("Add a visit to the veterinarian for my pet.", function () {
        petsAndVisits.click_add_visit_btn()
        visitsSubmissionPage.enter_visit_details()
        visitsSubmissionPage.submit_visit()
    })

    it("Check/view my pets & visits details are present and correct", function () {
        petsAndVisits.assert_pet_details()
        petsAndVisits.assert_visit_details("DATE")
        petsAndVisits.assert_visit_details("DESCRIPTION")
    })
})
