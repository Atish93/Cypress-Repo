import {
  cartIcon,
  loginButton,
  logo,
  searchEngineLocator,
} from "../constants/homePage";

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("passes", () => {
    cy.get(logo).should("be.visible");
  });

  it("Check Search Engine", () => {
    cy.get(searchEngineLocator).should("be.visible");
  });

  it("Type in Search Engine", () => {
    cy.get(searchEngineLocator).type("mobile").should("have.value", "mobile");
  });

  it("Check Login Button", () => {
    cy.get(loginButton).contains("Login").should("be.visible");
  });

  it("Check Cart Icon", () => {
    cy.get(cartIcon).should("be.visible");
  });
});
