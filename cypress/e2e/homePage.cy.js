describe('template spec', () => {

  beforeEach(()=>{
    cy.visit('https://www.flipkart.com/');
  })

  it('passes', () => {
    cy.get('img[title="Flipkart"]').should('be.visible');
  })

  it('Check Search Engine', ()=>{
    cy.get('input[placeholder="Search for Products, Brands and More"]').should('be.visible');
  })

  it('Type in Search Engine', ()=>{
    cy.get('input[placeholder="Search for Products, Brands and More"]').type('mobile').should('have.value', 'mobile');
  })
})