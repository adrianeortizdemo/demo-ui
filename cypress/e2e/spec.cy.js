// cypress/integration/spec.cy.js
describe('Qase Demo Smoke', () => {
  it('Visits the Cypress docs FAQ Page', () => {
    cy.visit('https://docs.cypress.io/app/faq');
    cy.contains('Frequently Asked Questions');
  });
});
