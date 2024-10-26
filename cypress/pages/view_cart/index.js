class View_Cart {
    prosseguirParaPagamento() {
        //10. Verify that cart page is displayed
        cy.url().should('includes', 'view_cart')
        cy.get('.btn-default.check_out').should('be.visible')
        //11. Click Proceed To Checkout
        cy.get('.btn-default.check_out').click()
    }
   
}

export default new View_Cart()