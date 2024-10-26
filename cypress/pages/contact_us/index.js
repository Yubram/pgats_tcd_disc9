class ContactUs {
    preencherFormularioDeContato(full_name, e_mail, subject, message, file) {
      //5. Verify 'GET IN TOUCH' is visible
      // cy.get('.contact-form h2').should('be.visible').and('have.text', 'Get In Touch')
      cy.get('.contact-form h2').should('contain', 'Get In Touch')
      //6. Enter name, email, subject and message
      cy.get('[data-qa="name"]').type(full_name)
      cy.get('[data-qa="email"]').type(e_mail)
      cy.get('[data-qa="subject"]').type(subject)
      cy.get('[data-qa="message"]').type(message)
      //7. Upload file
      cy.fixture(file).as('file')
      cy.get('input[name="upload_file"]').selectFile('@file')
      //8. Click 'Submit' button
      cy.get('[data-qa="submit-button"]').click()
      //9. Click OK button
      // abriu uma modal como clicar aqui ??
      //10. Verify success message 'Success! Your details have been submitted successfully.' is visible
      cy.get('.status').should('have.text','Success! Your details have been submitted successfully.')
      //11. Click 'Home' button and verify that landed to home page successfully
      // class="btn btn-success"
      cy.get('#form-section > .btn').click()
      cy.contains('Signup').should('be.visible')

    }
}

export default new ContactUs()