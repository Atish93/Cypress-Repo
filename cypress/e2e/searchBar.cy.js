import {
  course,
  searchBar,
  searchDropdown,
  searchKey,
  sideBarSearch,
} from '../constants/searchBar';

describe('Search Engine Cases', () => {
  it('Visit Home Page', () => {
    cy.visit('/'); // Visit home page
    cy.get(searchBar).should('be.visible');
  });

  it('Find and Type Anything in Search Engine', () => {
    cy.get(searchBar).type(course, { force: true }); // typing forcefully here due overlapping
    cy.get(searchKey).should('contain.text', course);
  });

  it('Select any one of the Items listed in dropdown', () => {
    cy.clickRandomElement(searchDropdown); // Created custom command for selecting random element from list
    cy.wait(1000);
    cy.url().should('not.eq', Cypress.config().baseUrl); // Checking user is redirected to other page
  });

  it('Browser Navigation back to Home Page', () => {
    cy.go('back');
    cy.get(searchBar).should('be.visible');
  });

  it('Check other Courses', () => {
    cy.get(searchBar).type('Angular', { force: true });
    // here we are verifying: options have the same string that we are searching for
    cy.get(searchKey).should('include.text', 'Angular').and('be.visible');
  });
});
