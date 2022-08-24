import Base from "./basePage";

class HomePage extends Base {
  static url="http://localhost:3000/#";

  static get welcomeButton() {
    return cy.get(".mat-focus-indicator.close-dialog.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted")
  }

  static get cookieButton() {
    return cy.get("[aria-label='dismiss cookie message']")
  }

  static get accButton() {
    return cy.get("[aria-label='Show/hide account menu']")
  }

  static get loginButton() {
    return cy.get("button[aria-label='Go to login page']")
  }

  static get userID() {
    return cy.get("[aria-label='Go to user profile']")
  }

  static get searchButton() {
    return cy.get("#searchQuery")
  }

  static get searchField() {
    return cy.get("#mat-input-0")
  }

  static get cards() {
    return cy.get(".img-container")
  }

  static get itemsPerPage() {
    return cy.get("[aria-label='Items per page:']")
  }

  static get changeItemsPerPage() {
    return cy.get("span.mat-option-text")
  }
  
  // static get changeItemsPerPage() {
  //   return cy.get("#mat-option-4")
  // }



}

export default HomePage;