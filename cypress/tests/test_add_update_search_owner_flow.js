import {CommonMethods} from "../pages/Common";
import {findOwnersPage, ownersSubmissionPage, ownerInformationPage} from "../pages/Owners";

describe("Owner Flow - Add/Find/Update", () => {
    it("Add a new owner, verify it's added with proper data", function () {
        CommonMethods.go_to_page("Find owners")
        findOwnersPage.click_add_owner_btn()
        ownersSubmissionPage.enter_owner_details()
        ownersSubmissionPage.submit_owner()

        /** NOTE: calling/organizing assertions in test file in a purpose, as it's a common practice,
        * otherwise to be wrapped into a method and be called from page object model*/
        ownerInformationPage.assert_owner_info("ADDRESS")
        ownerInformationPage.assert_owner_info("CITY")
        ownerInformationPage.assert_owner_info("TELEPHONE")
        ownerInformationPage.assert_owner_info("NAME", ["FIRST_NAME", "LAST_NAME"])
    })

    it("Update an existing owner.", function () {
        ownerInformationPage.click_edit_owner_btn()
        ownersSubmissionPage.enter_owner_details()
        ownersSubmissionPage.submit_owner("Update Owner")

        // Asserting updates
        ownerInformationPage.assert_owner_info("ADDRESS")
        ownerInformationPage.assert_owner_info("CITY")
        ownerInformationPage.assert_owner_info("TELEPHONE")
        ownerInformationPage.assert_owner_info("NAME", ["FIRST_NAME", "LAST_NAME"])
    })

    it("Search for an existing owner ", function () {
        CommonMethods.go_to_page("Find owners")
        findOwnersPage.enter_owner_lastname()
        findOwnersPage.click_find_owner_btn()
    })

    it("Check owner appears with correct data in the search result", function () {
        ownerInformationPage.assert_owner_info("NAME", ["FIRST_NAME", "LAST_NAME"])
        ownerInformationPage.assert_owner_info("CITY")
        ownerInformationPage.assert_owner_info("TELEPHONE")
    })
})
