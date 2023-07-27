import Login from "../PageObjects/LoginPage2.js";

describe('pom', () => {

    //General approach
    it('LoginTest', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    })

       //using pom
    it('LoginTest', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        
        const ln=new Login();
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit();
        ln.verifyLogin();

    })

       //using pom with fixture
       it.only('LoginTest', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        
        cy.fixture('orangehrm').then((data)=>{
            const ln=new Login();
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit();
            ln.verifyLogin();
        })
       

    })


 })
