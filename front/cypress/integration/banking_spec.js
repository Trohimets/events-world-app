describe('Banking App E2E Test', () => {
    it('should login, deposit, and logout successfully', () => {
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  
      cy.contains('Customer Login').click();
  
      cy.get('select').select('1');
  
      cy.contains('Login').click();
  
      cy.contains('Deposit').click();
  
      cy.get('input[ng-model="amount"]').type('100');
  
      cy.contains('Deposit').click();
  
      cy.contains('Deposit Successful').should('be.visible');
  
      cy.contains('Logout').click();
    });
  });