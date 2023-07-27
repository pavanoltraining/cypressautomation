//Hooks

// before
//after
//beforeEach
//AfterEach

describe('MyTestSuite', ()=>{
   
    before(()=>{
        cy.log("*****   Launch app  ******");

    })

    after(()=>{

        cy.log("*******    close App  ******");

    })
    

    beforeEach(()=>{

        cy.log("*******   Login  ******");

    })

    afterEach(()=>{

        cy.log("*****   Logout    ");

    })
    
    it('search', ()=> {

        cy.log("*****   searching  ******");

    })
      
    it.skip('advanced search', ()=> {

        cy.log("*****   advanced searching  ******");
    })
  
  
    it.only('listing Products', ()=> {

        cy.log("*****  Listing products  ******");
    })
  
          
})