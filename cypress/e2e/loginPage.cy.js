import {
  api,
  loginButton,
  loginPanel,
  redirectionUrl,
  socialOption,
  socialOptionAttribute,
  socialOptionContainer,
} from '../constants/loginPage';

describe('Login Page Cases', () => {
  it(' Visite Home Page', () => {
    cy.visit('/');
  });

  it('Open Login Page', () => {
    // Intercepting API call to check API response
    cy.intercept('GET', api).as('loginPageApi');

    // Clicking on login button using Index as there is hidden duplicate button
    cy.get(loginButton).eq(0).should('be.visible').click();

    //   Verifying status code of the API
    cy.wait('@loginPageApi').its('response.statusCode').should('eq', 200);
  });

  // Check redirected url
  it('Check Redirection', () => {
    cy.url().should('deep.equal', redirectionUrl);
  });

  it('Check Login Options', () => {
    cy.get(loginPanel).should('be.visible');

    // Check Social login options
    cy.get(socialOptionContainer)
      .find(socialOptionAttribute)
      .each((element, index) => {
        cy.wrap(element).should('contain.text', socialOption[index]);
      });
  });
});
