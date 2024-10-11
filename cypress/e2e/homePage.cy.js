import { barItems, logo, searchEngineLocator } from "../constants/homePage";

describe("Home Page Cases", () => {
  it("Visite Page", () => {
    cy.visit("/");
  });

  // Check Logo 
  it("passes", () => {
    cy.get(logo).eq(0).should("be.visible");
  });

  // Check Search Engine
  it("Check Search Engine", () => {
    cy.get(searchEngineLocator).should("be.visible");
  });

  // Type and check Dropdown on search engine
  it("Type in Search Engine", () => {
    cy.get(searchEngineLocator).type("Java").should("have.value", "Java");
  });

  // Just check Dropdown is opened
  it('Check Dropdown Options', ()=>{
    cy.get('#tnb-search-suggestions').should('have.attr', 'style', 'display: block;');    
  })

  it('Verify Top Nav Items', ()=>{
    barItems.forEach((item)=>{
      cy.get(item.selector).should('contain.text', item.text).and('be.visible');
    })
  })
});
