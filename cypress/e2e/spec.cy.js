import HomePage from "../pageObjects/homePage"
import LoginPage from "../pageObjects/loginPage";
import RegistrationPage from "../pageObjects/registrationPage";
import SearchPage from "../pageObjects/searchPage";



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
     it("Test registration scenario", () =>{
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
  context("Search Page", () => {
    beforeEach( () =>{
      HomePage.visit();
      HomePage.welcomeButton.click();
      HomePage.cookieButton.click();
      HomePage.accButton.click();
      HomePage.loginButton.click();
      LoginPage.emailField.type("demo");
      LoginPage.pswrField.type("demo");
      LoginPage.loginButton.click();
    })
    it("Test search Lemon scenario", () => {
      HomePage.searchButton.click();
      HomePage.searchField.type("Lemon{enter}");
      SearchPage.openLemon.click();
      SearchPage.itemDetails.should("contain", "Sour but full of vitamins.")
     })
     it("Test search 500ml -> Lemon scenario", () => {
      HomePage.searchButton.click();
      HomePage.searchField.type("500ml{enter}");
      SearchPage.openLemon.click();
      SearchPage.itemDetails.should("contain", "Sour but full of vitamins.")
     })
     it("Test search 500ml scenario", () => {
      HomePage.searchButton.click();
      HomePage.searchField.type("500ml{enter}");
      SearchPage.openEggfruit.click();
      SearchPage.itemDetails.should("contain", "Now with even more exotic flavour.");
      SearchPage.closeButton.click();
      SearchPage.openLemon.click();
      SearchPage.itemDetails.should("contain", "Sour but full of vitamins.")
      SearchPage.closeButton.click();
      SearchPage.openStrawberry.click();
      SearchPage.itemDetails.should("contain", "Sweet & tasty!")
     })
     it("Add a review", () => {
      HomePage.searchButton.click();
      HomePage.searchField.type("Raspberry{enter}");
      SearchPage.openRaspberry.click();
      SearchPage.reviewField.type("Tastes like metal");
      SearchPage.submitButton.click({force: true});
      SearchPage.reviewsButton.click();
      SearchPage.reviewsButton.should("contain", "Tastes like metal")
     })
     it.only("Validate product card amount", () => {
      HomePage.cards.should("have.length", 12)
      HomePage.itemsPerPage.click();
      // HomePage.changeItemsPerPage.contains("24").click();
      // HomePage.cards.should("have.length", 24);
      // HomePage.itemsPerPage.click();
      HomePage.changeItemsPerPage.contains("36").click();
      HomePage.cards.should("have.length", 36);
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