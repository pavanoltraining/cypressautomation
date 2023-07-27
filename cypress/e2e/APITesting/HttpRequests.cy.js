describe("HTTP Requests",()=>{


    it("GET Call", ()=>{
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal', 200);

    })

    it("Post Call", ()=>{

        cy.request( {
                   method: 'POST',
                    url: 'https://jsonplaceholder.typicode.com/posts/',
                    body:   {
                            title:"Test post",
                            body:"This is post call",
                            userId:1
                           }
                } )
        .its('status')
        .should('equal', 201);

    })


    it("Put Call",  ()=>
    {

        cy.request( {
                    method: 'PUT',
                    url: "https://jsonplaceholder.typicode.com/posts/1",
                    body: {
                        title: "Test post - Updated",
                        body: "This is put call ",
                        userId: 1,
                          id: 1
                     }
                    } )    
        .its('status')
        .should('equal', 200);
    })

       it("Delete Call", ()=>
       {
            cy.request({  
                        method: 'DELETE',
                        url: "https://jsonplaceholder.typicode.com/posts/1"
               })
        .its('status')
        .should('equal', 200);

       })



})


