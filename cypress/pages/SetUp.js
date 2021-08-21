class SetUp {

    constructor() {
        this.url = "/" // reads the baseUrl from cypress.json -  can be changed based on env e.g. Stage, Pre-Prod etc.
        // TODO In feature
        // 1. to read stage env use Cypress.env('local');
        // 2. specify env as command line argument
        // NOTE: Sensitive data like username and password to be set in .env or ideally 3rd part app to be connected to git repo to read trough secure API call - beneficial for pipelines running
    }

    visit_app() {
        cy.visit(this.url)
        cy.log("Navigate to the app")
        // login method to be here for advanced apps, in future.
    }
}

export const setUp = new SetUp()
