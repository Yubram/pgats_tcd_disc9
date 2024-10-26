class Account_Created {
  continuar(base_url) {
    //validar se está na página correta
    cy.url().should("includes", "/account_created");
    //14. Verify that 'ACCOUNT CREATED!' is visible
    cy.get('[data-qa="account-created"]').should("be.visible");
    //15. Click 'Continue' button
    cy.get('[data-qa="continue-button"]').click();
    cy.url().should("eq", base_url);
  }
}

export default new Account_Created();
