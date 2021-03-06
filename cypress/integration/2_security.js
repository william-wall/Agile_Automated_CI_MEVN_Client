describe("Security", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  describe("Denied Access to Review List - Unauthenticated", () => {
    it("Should not be allowed to navigate to Review List without Authentication", () => {
      cy.visit("/reviewlist");
      cy.url().should('include', '/signin');
    });
  });
  describe("Denied Access to Chat Rooms - Unauthenticated", () => {
    it("Should not be allowed to navigate to Chat Rooms without Authentication", () => {
      cy.visit("/roomlist");
      cy.url().should('include', '/signin');
    });
  });
  describe("Denied Access to Add Reviews - Unauthenticated", () => {
    it("Should not be allowed to navigate to Add Review without Authentication", () => {
      cy.visit("/reviews/add");
      cy.url().should('include', '/signin');
    });
  });
  describe("Denied Access to Gallery - Unauthenticated", () => {
    it("Should not be allowed to navigate to Gallery without Authentication", () => {
      cy.visit("/reviews/add");
      cy.url().should('include', '/signin');
    });
  });
  describe("Denied Access to Submit Car - Unauthenticated", () => {
    it("Should not be allowed to navigate to Submit Car without Authentication", () => {
      cy.visit("/gallery/new");
      cy.url().should('include', '/signin');
    });
  });
  describe("Denied Access to Game - Unauthenticated", () => {
    it("Should not be allowed to navigate to Game without Authentication", () => {
      cy.visit("/game");
      cy.url().should('include', '/signin');
    });
  });

});
