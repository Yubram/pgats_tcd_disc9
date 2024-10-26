class Delete_Account {
  continuar(base_url) {
    //validar se está na página correta
    cy.url().should("contain", "/delete_account");
    //14. Verify that 'ACCOUNT DELETED!' is visible
    cy.get('[data-qa="account-deleted"]').should("be.visible");
    //15. Click 'Continue' button
    cy.get('[data-qa="continue-button"]').click();
    cy.url().should("eq", base_url);
  }
}

export default new Delete_Account();
