class Checkout {
    verificarDetalhesEndereco() {
        //validar se está na página correta
        cy.url().should('includes','/checkout')
        //12. Verify Address Details and Review Your Order
        //Confirmar os detalhes campo a campo conforme os dados inseridos antes 
        //Fraco o trampo... //seletores com o número são sujeitos a falha
        cy.get(':nth-child(2) > .heading').should('have.text', 'Address Details')
        //outra forma de fazer a mesma coisa porém sem o 2 e o 4 
        cy.get('.heading')
          .first() //pega o primeiro
          .should('have.text', 'Address Details')
     
    }
    verificarPedido() {
        //validar se está na página correta
        cy.url().should('includes','/checkout')
        //12. Verify Address Details and Review Your Order
        //Confirmar os detalhes campo a campo conforme os dados inseridos antes 
        //Fraco o trampo... //seletores com o número são sujeitos a falha
        cy.get(':nth-child(4) > .heading').should('have.text', 'Review Your Order')
        //outra forma de fazer a mesma coisa porém sem o 2 e o 4 
        cy.get('.heading')
          .last() //pega o último, no caso é o segundo.
          .should('have.text', 'Review Your Order')
    }
    inserirMensagem(message) {
        //validar se está na página correta
        cy.url().should('includes','/checkout')
        cy.get('.form-control').type(message)
    }
    fazerPedido() {
        //validar se está na página correta
        cy.url().should('includes','/checkout')
        cy.get('.btn-default.check_out').click()
    }
   
}

export default new Checkout()