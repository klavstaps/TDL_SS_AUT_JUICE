import Base from "./basePage";

class SearchPage extends Base {
    static url="http://localhost:3000/#/search?q=Lemon";

    static get openLemon() {
        return cy.get("img[alt='Lemon Juice (500ml)']")
    }

    static get itemDetails() {
        return cy.get("app-product-details.ng-star-inserted")
    }

    static get openEggfruit() {
        return cy.get("img[alt='Eggfruit Juice (500ml)']")
    }

    static get closeButton() {
        return cy.get("[aria-label='Close Dialog']")
    }

    static get openStrawberry() {
        return cy.get("img[alt='Strawberry Juice (500ml)']")
    }

    static get openRaspberry() {
        return cy.get("img[alt='Raspberry Juice (1000ml)']")
    }

    static get reviewField() {
        return cy.get("[data-placeholder='What did you like or dislike?']")
    }

    static get submitButton() {
        return cy.get("#submitButton")
    }

    static get reviewsButton() {
        return cy.get("[aria-label='Expand for Reviews']")
    }

    // static get allReviews() {
    //     return cy.get(".mat-expansion-panel-content.ng-tns-c149-60.ng-trigger.ng-trigger-bodyExpansion")
    // }

}


export default SearchPage;