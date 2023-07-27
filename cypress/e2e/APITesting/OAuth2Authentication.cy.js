
//Pre-requisite: generate Auth code
//https://github.com/login/oauth/authorize/{client_id}
// Ex:   https://github.com/login/oauth/authorize?client_id=ded8c34b1cbcdcaf7149

/* 1) Get the OAuth2 access token
POST:    https://github.com/login/oauth/access_token	
Query params
		 -----
		 client_id
		 client_secret
		 code

2) Send GET request by using access token.
https://api.github.com/user/repos
 Auth: accessToken

 */
 
describe("OAuth2",()=>{
    let accessToken=""; 
    
    it("Get OAuth2 Access Token",() => {
        cy.request({
               method: 'POST',
               url: 'https://github.com/login/oauth/access_token',
               qs: {
                client_id: 'ded8c34b1cbcdcaf7149',
                client_secret: '1c10f2559255c03d07bf97c8567eae2e913cccda',
                code: '8d3e8caac86fad208f2c'
               }
           })
       .then((response) => {
            //access_token=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&scope=&token_type=bearer
            expect(response.status).to.eq(200);
            const params=response.body.split('&');
            accessToken=params[0].split("=")[1];
            cy.log("Generated token is:"+accessToken);
           
          })
       })

   
       it("OAuth2.0 Demo",() => {
        cy.request({
               method: 'GET',
               url: 'https://api.github.com/user/repos',
               headers: {
                      Authorization:'Bearer '+accessToken
                 }
           })
       .then((response) => {
            
                  expect(response.status).to.eq(200);
                  expect(response.body[0].id).to.equal(201070920);
      
            })
       })

 })

