class Base {
  
    static visit() {
      cy.visit(this.url);
    }
  }
  
  export default Base;