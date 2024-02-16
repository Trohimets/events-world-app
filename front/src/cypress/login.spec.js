import { describe, it } from "node:test";

describe('Login Form', () => {
  it('renders login form', () => {
    cy.visit('/auth'); 
    cy.get('input[name="username"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('submits the form with valid data', () => {
    cy.visit('/auth'); 
    cy.get('input[name="username"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('testpassword');
    cy.get('button[type="submit"]').click();


  });


});