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
}


export default SearchPage;