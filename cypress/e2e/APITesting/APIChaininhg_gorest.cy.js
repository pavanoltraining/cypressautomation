/*
GET https://gorest.co.in/public/v2/users
PUT https://gorest.co.in/public/v2/users/${userId}
DELETE https://gorest.co.in/public/v2/users/${userId}
*/

describe('GoRest User API Chaining', () => {
    
    const auth_token='Bearer c35e10e748c6f113775527bcef204e9929b4c9f4b995a8ee253eec46aed57b06'

    it('should create, update, and delete a user', () => {
      // Create a new user
        cy.request({
            method:'POST',
            url: 'https://gorest.co.in/public/v2/users', 
            body: {
                name: 'John Kenedy',
                gender: 'male',
                email: Math.random().toString(5).substring(2)+"@gmail.com",
                status: 'active'
            },
            headers:{
                 Authorization: auth_token
            }
        })
        .then((response) => {
            expect(response.status).to.equal(201)
            const userId = response.body.id
            // Update the user's name
            cy.request(
                {
                    method: 'PUT',
                    url: `https://gorest.co.in/public/v2/users/${userId}`,
                    body: {
                        name: 'Scott'
                    },
                    headers:{ 
                        Authorization: auth_token
                    }       
                })
               .then((response) => {
                    expect(response.status).to.equal(200)
                    expect(response.body.name).to.equal('Scott')
                    // Delete the user
                    cy.request(
                        {
                            method:'DELETE',
                            url: `https://gorest.co.in/public/v2/users/${userId}`,
                            headers:{ 
                                Authorization: auth_token
                            } 
                        })
                        .then((response) => {
                                expect(response.status).to.equal(204)
                         })
                 })
            })
        })
  })
   
  