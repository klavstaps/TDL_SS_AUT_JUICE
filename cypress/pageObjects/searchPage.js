import Base from "./basePage";

class SearchPage extends Base {
    static url="http://localhost:3000/#/search?q=Lemon";

    static get openItemButton() {
        return cy.get("img[alt='Lemon Juice (500ml)']")
    }

    static get itemDetails() {
        return cy.get("app-product-details.ng-star-inserted")
    }
}


export default SearchPage;