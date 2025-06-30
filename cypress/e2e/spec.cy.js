// cypress/integration/spec.cy.js
describe('Qase Demo Smoke', () => {
  it('Visits the Cypress docs homepage', () => {
    cy.visit('https://docs.cypress.io/app/get-started/why-cypress');
    cy.contains('Cypress Documentation');
  });
});
