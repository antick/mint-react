// <reference types="cypress" />

describe('login page', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('http://localhost:3001/login');
  });

  it('should not have any visual differences in UI', () => {
    cy.get('body').toMatchSnapshot();
  });

  it('should redirect page link correctly', () => {
    cy.contains('Login').should('exist');
    cy.contains('Forgot Password').click();
    cy.url().should('include', '/forgot-password');
    cy.go('back');
    cy.contains('Create an Account').click();
    cy.url().should('include', '/register');
    cy.go('back');
  });

  it('should display correct login error message', () => {
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('password123');

    cy.get('.btn-submit').click();
    cy.contains('Incorrect email or password').should('exist');
  });

  it('should login without error', () => {
    cy.get('input[name="email"]').type('pankaj@desk.sh');
    cy.get('input[name="password"]').type('sanam@123');

    cy.get('.btn-submit').click();
    cy.url().should('equal', 'http://localhost:3001/');
  });
});
