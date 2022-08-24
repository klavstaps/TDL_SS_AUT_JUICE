import Base from "./basePage";

class RegistrationPage extends Base {
    static url="http://localhost:3000/#";

    static get emailField() {
        return cy.get("#emailControl")
    }

    static get pswrField() {
        return cy.get("#passwordControl")
    }

    static get repeatPswrField() {
        return cy.get("#repeatPasswordControl")
    }

    static get securityQ() {
        return cy.get("[name='securityQuestion']")
    }

    static get petQuestion() {
        return cy.get("#mat-option-9")
    }

    static get ansField() {
        return cy.get("#securityAnswerControl")
    }

    static get registerButton() {
        return cy.get("#registerButton")
    }

    static get accButton() {
        return cy.get("[aria-label='Show/hide account menu']")
      }

      static get loginButton() {
        return cy.get("button[aria-label='Go to login page']")
      }

    
}


export default RegistrationPage;