class Login
{
    setUserName(username)
    {
        cy.get("input[placeholder='Username']").type(username);
    }

    setPassword(password)
    {
        cy.get("input[placeholder='Password']").type(password);
    }

    clickSubmit()
    {
        cy.get("button[type='submit']").click();
    }
   verifyLogin()
    {
        cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should('have.text','Dashboard');
    }
}

export default Login;