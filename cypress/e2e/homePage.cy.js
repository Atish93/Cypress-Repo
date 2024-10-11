import {
  aspCourseList,
  barItems,
  logo,
  phpCourseList,
  searchEngineLocator,
} from "../constants/homePage";

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
  it("Check Dropdown Options", () => {
    cy.get("#tnb-search-suggestions").should(
      "have.attr",
      "style",
      "display: block;"
    );
    cy.get(searchEngineLocator).clear();
  });

  // .forEach() loop for Top Navigation bar and it helps us in code readability
  // and maintainability
  it("Verify Top Nav Items", () => {
    barItems.forEach((item) => {
      cy.get(item.selector).should("contain.text", item.text).and("be.visible");
    });
  });

  // Verify Sub Navigation items : Covered in three different statements
  // as they where having different locator, so covered them in a seperately.
  it("Verify Sub Navigation Bar", () => {
    // Check all elements with same attributes here
    cy.verifyItems("#subtopnav [href*='/default.asp']", aspCourseList);

    // as it had different locator covered this element separately.
    cy.get("#subtopnav [href='/bootstrap/bootstrap_ver.asp']").should(
      "contain.text",
      "BOOTSTRAP"
    );

    // Covered other cases in this
    cy.verifyItems('#subtopnav [href*="/index.php"]', phpCourseList);
  });
});
