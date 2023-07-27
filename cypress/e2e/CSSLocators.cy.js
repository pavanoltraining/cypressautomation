
describe('CSSLocators', () => {

it("csslocators", () => {
   

    cy.visit("http://automationpractice.com/index.php")

    //cy.get("#search_query_top").type("T-Shirts")    // id   tag is optional
    //cy.get(".search_query").type("T-Shirts")    // class   tag is optional
  //  cy.get("[name='search_query']").type("T-Shirts")    // attribute   tag is optional

  cy.get("input.search_query[name='search_query']").type("T-Shirts")    // tag class attribute   tag is optional

    cy.get("[name='submit_search']").click()

    cy.get(".lighter").contains("T-Shirts") //Assertion

})

})