//Yubram Ferreira Guevara - PGATS - Disc9 - Testes Integrados -> Automação de Testes Web
//Fica a dica:
//https://docs.cypress.io/api/commands -> comandos para utilizar
//

// pom - page object model
import menu from "../pages/menu";
import login from "../pages/login";
import signUp from "../pages/signup";
import account_created from "../pages/account_created";
import delete_account from "../pages/delete_account";
import contact_us from "../pages/contact_us";
import products from "../pages/products";
import view_cart from "../pages/view_cart";
import checkout from "../pages/checkout";
import payment from "../pages/payment";
import payment_done from "../pages/payment_done";
//Colocar faker aumentou em 45s o início do teste
//import { faker } from '@faker-js/faker';

const base_url = "https://automationexercise.com/";
// número do teste para gerar uma variável aleatória mas 'fixa'
// const number_test = "0018"
const number_test = new Date().getTime();
const first_name = "Tester";
const last_name = "QA-YFG " + number_test;
const full_name = first_name + " " + last_name;
const e_mail = "tester-qa-yfg." + number_test + "@studying.tst";
const password = "qaYFG20240706@" + number_test;
const wrong_e_mail = "tester-qa-yfg.@studying.tst";
const wrong_password = "@qaYFG20240706";
const subject = "Testes Web Automatizados";
const message =
  "A alegria de fazer isso e funcionar, mas tem tanta informação que falta #desespero";
const file = "yfg_arquivo_para_upload.txt";
const product_name_to_search = "Jeans";

//Credit Card
/*
const card_number = "1234-4567-8901-2345" //faker.finance.creditCardNumber()
const cvc = "123" //faker.finance.creditCardCVV()
const number_expiry_month = "09"
const expiry_year = "2029"
*/

//console.log(full_name)

describe("Suit TCD: PGATS - Automação de Testes Web - POM", () => {
  beforeEach(() => {
    // Code to run before each test
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com/'
    cy.visit(base_url);
  });

  it("TC010 - Cadastrar Usuário -> Test Case 1: Register User", () => {
    //4. Click on 'Signup / Login' button
    menu.irParaSignupLogin();
    //5. - 7.
    login.preencherNovoUsuario(full_name, e_mail);
    //8. - 13.
    signUp.preencherDadosNovoUsuario(password, first_name, last_name);
    //14. - 15.
    account_created.continuar(base_url);
    //16. Verify that 'Logged in as username' is visible
    menu.confirmarUsuarioLogado(full_name);
    //17. Click 'Delete Account' button
    menu.irParaDeletar();
    //18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    delete_account.continuar(base_url);
  });

  // para pular um teste usar ??? mudando order para os testes não se entrelacarem
  it("TC020 - Logar com Usuário Correto E Deletar conta-> Test Case 2: Login User with correct email and password", () => {
    //Arrange (Preparar):
    menu.irParaSignupLogin();
    login.preencherNovoUsuario(full_name, e_mail);
    signUp.preencherDadosNovoUsuario(password, first_name, last_name);
    account_created.continuar(base_url);
    menu.irParaDeslogar(full_name);
    cy.visit(base_url);
    //Act (Agir): Assert (Asserção):
    //4. - 5.
    menu.irParaSignupLogin();
    //6. - 7.
    login.preencherLogin(e_mail, password);
    //8. Verify that 'Logged in as username' is visible
    menu.confirmarUsuarioLogado(full_name);
    //9. Click 'Delete Account' button
    menu.irParaDeletar();
    //10. Verify that 'ACCOUNT DELETED!' is visible
    delete_account.continuar(base_url);
  });

  it("TC030 - Logar com Usuário Incorreto -> Test Case 3: Login User with incorrecail and password", () => {
    //Arrange (Preparar):
    menu.irParaSignupLogin();
    //Act (Agir):
    login.preencherLogin(wrong_e_mail, wrong_password);
    //Assert (Asserção):
    //8. Verify error 'Your email or password is incorrect!' is visible
    login.confirmarErroDeCombinacao();
  });

  it("TC040 - Deslogar Usuário -> Test Case 4: Logout User", () => {
    //Arrange (Preparar):
    menu.irParaSignupLogin();
    login.preencherNovoUsuario(full_name, e_mail);
    signUp.preencherDadosNovoUsuario(password, first_name, last_name);
    account_created.continuar(base_url);
    //Act (Agir): Assert (Asserção):
    menu.irParaDeslogar(full_name);
    //finalização para não deixar registro
    menu.irParaSignupLogin();
    login.preencherLogin(e_mail, password);
    menu.confirmarUsuarioLogado(full_name);
    menu.irParaDeletar();
    delete_account.continuar(base_url);
  });

  it("TC050 - Tentar Cadastrar Usuário Com Email Existente-> Test Case 5: Register User with existing email", () => {
    //Arrange (Preparar):
    menu.irParaSignupLogin();
    login.preencherNovoUsuario(full_name, e_mail);
    signUp.preencherDadosNovoUsuario(password, first_name, last_name);
    account_created.continuar(base_url);
    menu.irParaDeslogar(full_name);
    //Act (Agir): Assert (Asserção):
    menu.irParaSignupLogin();
    login.preencherNovoUsuario(full_name, e_mail);
    signUp.confirmarErroUsuarioExiste();
    //finalização para não deixar registro
    menu.irParaSignupLogin();
    login.preencherLogin(e_mail, password);
    menu.confirmarUsuarioLogado(full_name);
    menu.irParaDeletar();
    delete_account.continuar(base_url);
  });

  it("TC060 - Preencher Formulário de Contate-nos e Anexar Arquivo -> Test Case 6: Contact Us Form", () => {
    menu.irParaContactar();
    contact_us.preencherFormularioDeContato(
      full_name,
      e_mail,
      subject,
      message,
      file,
    );
  });

  it("TC080 - Verificar listagem de produto e detalhes -> Test Case 8: Verify All Products and product detail page", () => {
    menu.irParaProdutos();
    //5. - 6.
    products.verificarTodosProdutos();
    //7.  - 9.
    products.verificarDetalhesDeProduto();
  });

  it("TC090 - Procurar Produto -> Test Case 9: Search Product", () => {
    //4. Click on 'Products' button
    menu.irParaProdutos();
    //Verify user is navigated to ALL PRODUCTS page successfully
    products.verificarTodosProdutos();
    products.procurarProduto(product_name_to_search);
  });

  it("TC100 - Inscrição -> Test Case 10: Verify Subscription in home page", () => {
    menu.inscrever(e_mail);
  });

  it("TC150 - Realizar Pedido -> Test Case 15: Place Order: Register before Checkout", () => {
    //4. Click on 'Signup / Login' button
    menu.irParaSignupLogin();
    //5. - 6.
    login.preencherNovoUsuario(full_name, e_mail);
    signUp.preencherDadosNovoUsuario(password, first_name, last_name);
    account_created.continuar(base_url);
    //7. Verify that 'Logged in as username' is visible
    menu.confirmarUsuarioLogado(full_name);
    //Preparação - Criado passo para garantir local e menu de teste mesmo que tenha na home.
    menu.irParaProdutos();
    //Ações
    //8. Add products to cart
    products.adicionarProdutoNoCarrinho();
    //9. Click 'Cart' button
    products.irParaCarrinho();
    //10. - 11.
    view_cart.prosseguirParaPagamento();

    checkout.verificarDetalhesEndereco();
    checkout.verificarPedido();
    checkout.inserirMensagem(message);
    checkout.fazerPedido();

    //14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    payment.preencherCartao();
    //15. Click 'Pay and Confirm Order' button
    payment.pagar();

    //16. Verify success message 'Your order has been placed successfully!'
    payment_done.confirmarPedidoRealizado();

    //17. Click 'Delete Account' button
    menu.irParaDeletar();
    delete_account.continuar(base_url);
  });
});
