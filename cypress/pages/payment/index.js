import { faker } from "@faker-js/faker";

class Payment {
  preencherCartao() {
    //validar se está na página correta
    cy.url().should("includes", "/payment");
    //14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    // Gerar dados faker de cartão de crédito
    const full_name = faker.person.fullName();
    const card_number = faker.finance.creditCardNumber();
    const cvc = faker.finance.creditCardCVV();
    const expiry_month = faker.date.future().getMonth(); //+ 2; // Pega o mês atual do ano futuro
    const expiry_year = faker.date.future().getFullYear(); //.toString().slice(-2); // Pega os dois últimos dígitos do ano

    // Preencher os campos de pagamento
    cy.get('[data-qa="name-on-card"]').type(full_name);
    cy.get('[data-qa="card-number"]').type(card_number);
    cy.get('[data-qa="cvc"]').type(cvc);
    cy.get('[data-qa="expiry-month"]').type(expiry_month);
    cy.get('[data-qa="expiry-year"]').type(expiry_year);
  }
  pagar() {
    //validar se está na página correta
    cy.url().should("includes", "/payment");
    //15. Click 'Pay and Confirm Order' button
    cy.get('[data-qa="pay-button"]').click();
  }
}

export default new Payment();
