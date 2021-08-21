import {homePage} from "../pages/HomePage";
import {CommonMethods} from "../pages/Common";
import {veterinarians} from "../pages/Veterinarians";

describe("Clinic logo and veterinarians list test", () => {
    it("Check Clinic logo is present is below of the welcome text.", function () {
        CommonMethods.go_to_page("Home")
        homePage.verify_logo_image_position()
    })

    it("View the list of veterinarians", function () {
        CommonMethods.go_to_page("Veterinarians")
        veterinarians.verify_veterinarians_table_is_not_empty()
    })

})
