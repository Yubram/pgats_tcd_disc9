class Payment_Done {
  confirmarPedidoRealizado() {
    //validar se está na página correta
    cy.url().should("includes", "/payment_done");

    //16. Verify success message 'Your order has been placed successfully!'
    //Mensagem aparece e desaparece mais rápido que o teste consegue pegar
    //cy.get('#success_message > .alert-success')//.should("contain","Your order has been placed successfully!")
    cy.get('[data-qa="order-placed"]').should("be.visible");
  }
}

export default new Payment_Done();
