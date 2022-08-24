import Base from "./basePage";

class LoginPage extends Base {
  static url="http://localhost:3000/#/login";

  static get emailField() {
    return cy.get("#email")
  }

  static get pswrField() {
    return cy.get("#password")
  }

  static get loginButton() {
    return cy.get("#loginButton")
  }

  static get newCustomer() {
    return cy.get("#newCustomerLink")
  }

}

export default LoginPage