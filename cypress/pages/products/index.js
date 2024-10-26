class Products {
        verificarTodosProdutos() {
            //validar se está na página correta
            //5. Verify user is navigated to ALL PRODUCTS page successfully
            cy.url().should('contain', 'products')
            //Na sequencia três maneiras de fazer a mesma coisa
            cy.get('.title').should('be.visible').and('have.text', 'All Products')
            cy.get('.title').should('be.visible').and('contain', 'All Products')
            cy.get('.title').should('contain', 'All Products')
            //6. The products list is visible
            // Como identificar a lista de produtos ou uma lista??
            cy.get('.single-products') //Lista de produto
            .should('be.visible') //estar visível
            .and('have.length.at.least',1)// e ter. o tamanho. pelo menos de, ... 1 item
        }
        verificarDetalhesDeProduto() {
            //validar se está na página correta
            cy.url().should('contain', 'products')
            //7. Click on 'View Product' of first product
            cy.contains('View Product') //vai achar vários
            .first() //seleciona o primeiro dos vários
            .click()
            //8. User is landed to product detail page
            cy.url().should('contain', 'product_details/')
            //9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
            cy.get('.product-information > h2').should('be.visible') //Nome do produto:
            cy.get('.product-information p').should('be.visible').and('have.length', 4) //4 coisas dentro da estrutura 
            //acima foi testado os 4: Categoria, quantidade do estoque, condição e marca
            cy.get('.product-information span span').should('be.visible') //Preço do produto 
        }  
        procurarProduto(product_name_to_search){
            //validar se está na página correta
            cy.url().should('contain', 'products')
            //6. Enter product name in search input and click search button
            cy.get('input#search_product').type(product_name_to_search)
            cy.get('button#submit_search').click()
            //7. Verify 'SEARCHED PRODUCTS' is visible
            cy.get('.title').should('be.visible').and('contain', 'Searched Products')
            cy.get('.single-products') //achou a lista
            .should('be.visible') //lista visivel
            .and('have.length.at.least',1) //lista deve ter ao menos um produto.
        }
        adicionarProdutoNoCarrinho(){
            //validar se está na página correta
            cy.url().should('contain', 'products')
            //8. Add products to cart
            cy.contains("Add to cart") //vai achar vários
            .first() //seleciona o primeiro dos vários
            .click()
        }
        irParaCarrinho(){
            //9. Click 'Cart' button
            cy.contains("View Cart").click()
        }

}

export default new Products()