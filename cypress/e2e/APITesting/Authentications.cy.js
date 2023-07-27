describe("Authentication",()=>{

    it("Basic Authentication",()=>{
        cy.request(
               { 
                 method: 'GET',
                 url: 'https://postman-echo.com/basic-auth',
                 auth:{
                        user: 'postman',
                        pass:'password'
                  }
              })
              .then((response)=>{

                expect(response.status).to.eq(200)
                expect(response.body.authenticated).to.eq(true);

              })
    })

    it("Digest Authentication",()=>{
        cy.request(
               { 
                 method: 'GET',
                 url: 'https://postman-echo.com/basic-auth',
                 auth:{
                        username: 'postman',
                        password:'password',
                        method: 'degest'
                  }
              })
              .then((response)=>{

                expect(response.status).to.eq(200)
                expect(response.body.authenticated).to.eq(true);

              })
        })


        const token='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'
        it("Bearer Token Auth",()=>{
          cy.request(
              {
                method: 'GET',
                url: 'https://api.github.com/user/repos',
                headers:{
                    Authorization:'Bearer '+token
                }
              })
              .then((response)=>{
                expect(response.status).to.eq(200)
              })
        })


        it("API key Auth",()=>{

            cy.request(
                {
                  method:"GET",
                  url:'api.openweathermap.org/data/2.5/forecast/daily',
                  qs:{
                     q:'Delhi',
                     appid:'fe9c5cddb7e01d747b4611c3fc9eaf2c'  // API key and value
                  }
               })
               .then((response)=>{
                  expect(response.status).to.eq(200);
               })



        })





})