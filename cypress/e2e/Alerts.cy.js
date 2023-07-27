describe('Alerts', () => {

    //1) Javascript Alert: It will have some text and an ‘OK’ button
    it('Js alert',()=>{

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert',(t)=>{
                expect(t).to.contains('I am a JS Alert');

        })

        //alert window automatically closed by cypress

        cy.get("#result").should('have.text','You successfully clicked an alert')


    })

    //2) Javascript Confirm Alert: It will have some text with ‘OK’ and ‘Cancel’ buttons
    it('Js confirm alert - OK',()=>{

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');

        })
        //cypress automatically closed alert window by using ok button-default

        cy.get('#result').should('have.text','You clicked: Ok')

    })

    it('Js confirm alert - Cancel',()=>{

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');

        })
        
        cy.on('window:confirm',()=> false); // cypress closes alert window using cancel button

        cy.get('#result').should('have.text','You clicked: Cancel')

    })


    //3) Javascript Prompt Alert: It will have some text with a text box for user input along with ‘OK’ and ‘Cancel’ buttons.
    it('Js prompt alert',()=>{

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome');
         })
         cy.get("button[onclick='jsPrompt()']").click();

        //cypress will automatically close prompted alert- it will use OK button - by default
        //cy.on('window:prompt',()=> false); 

        cy.get('#result').should('have.text', 'You entered: welcome')
       
    })

     //4) Authenticated Alert
     it.only('Authenticated  alert',()=>{

        //appraoch1
        /*cy.visit("https://the-internet.herokuapp.com/basic_auth",{ auth: 
                                                                    {
                                                                      username: "admin",
                                                                      password: "admin"
                                                                    }    
                                                                } );
       cy.get("div[class='example'] p").should('have.contain',"Congratulations");

       */
      
       cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
       cy.get("div[class='example'] p").should('have.contain',"Congratulations");

       
    })
  })