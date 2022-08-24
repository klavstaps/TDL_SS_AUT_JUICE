# TDL_SS_AUT_JUICE

Set-up steps. Likely the final task won't have the exact same steps, but regardless these are the steps that were taken to setup THIS project in particular. There will likely be much overlap anyway.

Stage 1: Creating the repository

    Log into your GitHub account
    Open this link: https://github.com/new
    Fill in the repository name field with something, maybe the teacher will give us a name himself
    Check the "Add a README file" option (may not be necessary tomorrow)
    Under the "Add .gitignore" section press on the select element that says ".gitignore template: None", write "Node" and select the only option offered to you
    Press "Create Repository"

Stage 2: Setting up the workspace

    Open the terminal (Command + Space, type in "Terminal"; or you can use the internal terminal in VS Code as well if you prefer)
    Navigate to the Desktop folder (likely just one "cd Desktop" command will be all you need) (I suspect the teacher will want the folder to be on the Desktop tomorrow as well)
    Create your work folder, this is the place you'll be working in - mkdir XXX (replace XXX with whatever name you choose or we are told to use)
    Navigate to the folder you just created - cd XXX

Stage 3: Cloning the repository

    Go to the repository you created in Stage 1 and press "Code"

image

    Copy the link to your repository

image

    Return to the terminal and write "git clone ???" (replace ??? with the link to your repository)
    Navigate to the folder that contains the repository we just cloned - cd ??? (replace ??? with the name of the folder, you can just use the TAB key after writing "cd ".

Stage 4: Setting up a Cypress project

    Write "npm init" and then keep pressing ENTER repeatedly until you've gone through everything (a good 15 ENTER presses will be enough probably).
    Write "npm i cypress --save-dev" and wait for the installation to finish.
    Write "npx cypress open" and wait for Cypress to open.
    This part should be familiar to you all - press E2E Testing, scroll down, press "Continue", select a browser, press "Start E2E testing in ...", select "Create new empty spec", click "Create Spec", click "Okay, run the spec".

Stage 5: Preparing configuration and stuff to start working

    Find the "cypress.config.js" file in your project and add a baseUrl thing like in here (https://github.com/Aetheress/TDL_SS_AUT_JUICE/blob/main/cypress.config.js). You can also just copy-paste and then replace the URL in the quotation marks with the actual site we are testing (e.g., "http://demoqa.com", etc.).
    Create a "pageObjects" folder under "cypress".
    Create a new file in the "pageObjects" folder called "basePage.js" or "base.js" or "base.page.js" just whatever you like really. This is the folder where you will be putting all the pages with the static get functions in.
    Just copy-paste this into the basePage.js file (base pages in our level don't really change):

class BasePage {
    static get url() {
        return "/";
    }
    static visit(options) {
        options = {
          timeout: Cypress.config("defaultCommandTimeout"),
          uniqueText: this.uniqueText,
          expectedUrl: this.url,
          ...options,
        };
        return cy
          .visit(this.url)
          .then(() => this.assertIsCurrentPage(options))
      }
    
    static assertIsCurrentPage(
        options = {
          timeout: Cypress.config("defaultCommandTimeout"),
          expectedUrl: this.url,
        }
      ) {
        return this.validatePath(options);
    }
    
    static validatePath(
        options = {
          timeout: Cypress.config("defaultCommandTimeout"),
          expectedUrl: this.url,
        }
      ) {
        return cy
          .location(options)
          .should((loc) =>
            expect(`${loc.pathname}${loc.search}`).to.eq(options.expectedUrl)
          );
     }
}
export default BasePage;

    Open the "spec.cy.js" file in cypress/e2e. This is your test scenario/cases file. You can consult (https://github.com/Aetheress/TDL_SS_AUT_JUICE/blob/main/cypress/e2e/spec.cy.js) for how it looks like. But this should be your starting point, you can copy-paste:

describe('name', () => {
  context("name", () => {
    beforeEach(()=> {
      
    });
    it("name", () => {
    
    });
  });
});

    Everything is basically set up and you can start doing the actual task. Don't forget to finish each page object you make with an "export default ..." statement and then to put an "import ... from "..."" statement for that class in the test scenario (spec.cy.js) file.

Stage 6: Pushing to GitHub after you're done

    I sure as hell hope the teacher can assist you on this. Surely he will, I mean the task is already done it can hardly be considered intervening. I can't really explain this part well. Someone else can try if they'd like.
