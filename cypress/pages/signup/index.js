class SignUp {
    preencherDadosNovoUsuario(password, first_name, last_name) {
        //validar se está na página correta
        cy.url().should('contain', '/signup')
        //8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
        //Enter Account Information
        //9. Fill details: Title, Name, Email, Password, Date of birth
        cy.get('input[type=radio]').check('Mrs')
        cy.get('[type=password]').type( password , {log: false})
        cy.get('[data-qa="days"]').select('15')
        cy.get('[data-qa="months"]').select('September')
        cy.get('[data-qa="years"]').select('1977')
        //10. Select checkbox 'Sign up for our newsletter!'
        cy.get('input[type=checkbox]#newsletter').check()
        //11. Select checkbox 'Receive special offers from our partners!'
        cy.get('input[type=checkbox]#optin').check()
        //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        cy.get('[data-qa="first_name"]').type(first_name)
        cy.get('[data-qa="last_name"]').type(last_name)
        cy.get('[data-qa="company"]').type('QA & CO Ltda')
        cy.get('[data-qa="address"]').type('Rua da Qualidade')
        cy.get('[data-qa="address2"]').type('Rua dos Bugs')
        cy.get('[data-qa="country"]').select('Canada')
        cy.get('[data-qa="state"]').type('Quality')
        cy.get('[data-qa="city"]').type('Darkness')
        cy.get('[data-qa="zipcode"]').type('2-410-002')
        cy.get('[data-qa="mobile_number"]').type('(2) 410 002')
        //13. Click 'Create Account button'
        cy.get('[data-qa="create-account"]').click()

    }
    confirmarErroUsuarioExiste(){
        //validar se está na página correta
        cy.url().should('contain', '/signup')
        //8. Verify error 'Email Address already exist!' is visible
        //Fazer duas asserções ao mesmo tempo. 
        cy.get('.signup-form form p').should("be.visible").and('contain', 'Email Address already exist!')
    }
}

export default new SignUp()