class Menu {

    irParaSignupLogin() {
        cy.get('a[href$=login]').click() 
        cy.url().should('contain', '/login')
    }

    confirmarUsuarioLogado(full_name) {
        //16. Verify that 'Logged in as username' is visible
        cy.get('i.fa-user').parent().should('contain',full_name)
    }

    irParaDeletar() {
        cy.get('a[href$=delete_account]').click() 
        cy.url().should('contain', '/delete_account')
    }

    irParaDeslogar(full_name) {
        cy.contains(`Logged in as ${full_name}`)
        //9. Click 'Logout' button
        cy.contains('Logout').click()
        //10. Verify that user is navigated to login page
        cy.url().should('contain', '/login')
    }

    irParaContactar() {
        //4. Click on 'Contact Us' button
        cy.contains('Contact us').click()
    }

    irParaProdutos() {
        //4. Click on 'Products' button
        cy.contains('Products').click()
    }

    inscrever(e_mail){
        //4. Scroll down to footer
        cy.scrollTo('bottom')
        //5. Verify text 'SUBSCRIPTION'
        //cy.get('[data-layer="Content"]')//
        cy.get('.single-widget > h2').should('contain','Subscription') 
        //Mais uma com texto minúsculo que aparece como maiúsculo #Socorro
        //6. Enter email address in input and click arrow button
        cy.get('input#susbscribe_email').type(e_mail)
        cy.get('button#subscribe').click()
        //7. Verify success message 'You have been successfully subscribed!' is visible
        cy.contains('You have been successfully subscribed!').should('be.visible')
        //depois de 3seg desaparece... 
    }

}

export default new Menu()