import HomePage from "../pageObjects/homePage"
import LoginPage from "../pageObjects/loginPage";
import RegistrationPage from "../pageObjects/registrationPage";


describe ("Juice shop",() =>{
    context("Login Page", () => {
      beforeEach( () => {
        HomePage.visit();
        HomePage.welcomeButton.click();
        HomePage.cookieButton.click();
     });
     it("Test login scenario", () =>{
      HomePage.accButton.click();
      HomePage.loginButton.click();
      LoginPage.emailField.type("demo");
      LoginPage.pswrField.type("demo");
      LoginPage.loginButton.click();
      HomePage.accButton.click();
      HomePage.userID.should("contain", "demo")
     });
     it.only("Test registration scenario", () =>{
      HomePage.accButton.click();
      HomePage.loginButton.click();
      LoginPage.newCustomer.click();
      const email = ("email_"+(Math.floor(Math.random() * 10001))+"@ebox.com")
      const password =("parole")
      RegistrationPage.emailField.type(email);
      RegistrationPage.pswrField.type(password);
      RegistrationPage.repeatPswrField.type(password);
      RegistrationPage.securityQ.click();
      RegistrationPage.petQuestion.click();
      RegistrationPage.ansField.type("Fleksis");
      RegistrationPage.registerButton.click();
      // validate registration by logging into the new acc
      RegistrationPage.accButton.click();
      RegistrationPage.loginButton.click();
      LoginPage.emailField.type(email);
      LoginPage.pswrField.type(password);
      LoginPage.loginButton.click();
      HomePage.userID.should("contain", email)
     })
  })
})

// Scenario - Login
// Click Account button
// Click Login button
// Set email value to "demo"
// Set password value to "demo"
// Click Log in
// Click Account button
// Validate that "demo" account name appears in the menu section