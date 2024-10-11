// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('verifyItems', (element, items) => {
  cy.get(element).each(($el, index) => {
    cy.wrap($el).should('contain.text', items[index]);
  });
});

Cypress.Commands.add('clickRandomElement', (locator) => {
  cy.get(locator) // Adjust the selector to your actual list element
    .then(($items) => {
      const itemCount = $items.length; // Get the number of items in the list
      const randomIndex = Math.floor(Math.random() * itemCount); // Generate a random index

      // Select and interact with the random item
      cy.wrap($items)
        .eq(randomIndex)
        .should('be.visible') // Ensure the item is visible
        .click({ force: true });
    });
});
