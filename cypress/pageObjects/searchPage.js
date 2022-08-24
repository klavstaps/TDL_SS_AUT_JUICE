import Base from "./basePage";

class SearchPage extends Base {
    static url="http://localhost:3000/#/search?q=Lemon";

    static get openItemButton() {
        return cy.get("[aria-label='Click for more information about the product']")
    }

    static get itemDetails() {
        return cy.get("app-product-details.ng-star-inserted")
    }
}


export default SearchPage;