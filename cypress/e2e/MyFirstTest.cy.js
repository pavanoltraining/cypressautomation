
describe('My First Test', () => {
    
    it('verify title-positve', function()  {
       cy.visit("https://opensource-demo.orangehrmlive.com/")  
       cy.title().should('eq','OrangeHRM')
    })

    it('verify title-Nagive test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")  
        cy.title().should('eq','OrangeHRM123')
                    
               
     })
 

  })

