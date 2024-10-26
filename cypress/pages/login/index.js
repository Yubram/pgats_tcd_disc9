class Login{
    preencherLogin(e_mail, password){
        //validar se está na página correta
        cy.url().should('contain', '/login')
        //5. Verify 'Login to your account' is visible
        cy.get('.login-form > h2').should('contain', 'Login to your account')
        //6. Enter correct email address and password
        cy.get('[data-qa="login-email"]').type(e_mail)
        cy.get('[data-qa="login-password"]').type(password , {log: false})
        //7. Click 'login' button
        cy.get('[data-qa="login-button"]').click()
        //8. Verify that 'Logged in as username' is visible
    }
    preencherNovoUsuario(full_name, e_mail){
        //validar se está na página correta
        cy.url().should('contain', '/login')
        //5. Verify 'New User Signup!' is visible
        cy.get('.signup-form > h2').should('contain', 'New User Signup!')
        //6. Enter name and email address
        cy.get('[data-qa="signup-name"]').type(full_name)
        cy.get('[data-qa="signup-email"]').type(e_mail)
        //7. Click 'Signup' button
        cy.contains('button','Signup').click()
    }
    confirmarErroDeCombinacao(){
        //validar se está na página correta
        cy.url().should('contain', '/login')
        //8. Verify error 'Your email or password is incorrect!' is visible
        cy.get('.login-form form p').should('contain', 'Your email or password is incorrect!')
        //caso de por só o p, pode ter mais de um p , e se tiver a mensagem será um falso verdadeiro
    }
}

export default new Login()