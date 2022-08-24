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


}

export default HomePage;