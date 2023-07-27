import 'cypress-iframe'

describe("Drag and Drop", () => {
   
  it.only('Drag and Drop 0', () => {
    const dataTransfer = new DataTransfer();
 
    cy.visit('https://www.aspsnippets.com/demos/742/')
   
    cy.get("img[src='../SampleImages/Penguins.jpg']").trigger('dragstart', {dataTransfer})
    cy.get('#dvDest').trigger('drop', {dataTransfer})

   // cy.iframe('.demo-frame').find('#droppable>p').should('be.visible',true)
      //.contains("Dropped!") //not worked
      // .should('have.text','Dropped!') //not worked
      //.should('have.value','Dropped!');
   
  });  




    it('Drag and Drop1- not working', () => {
      const dataTransfer = new DataTransfer();
   
      cy.visit('https://jqueryui.com/droppable/')
     
      cy.frameLoaded('.demo-frame');   // Load the frame
      cy.iframe('.demo-frame').find('#draggable').trigger('dragstart', {dataTransfer})
      cy.iframe('.demo-frame').find('#droppable').trigger('drop', {dataTransfer})

      cy.iframe('.demo-frame').find('#droppable>p').should('be.visible',true)
        //.contains("Dropped!") //not worked
        // .should('have.text','Dropped!') //not worked
        //.should('have.value','Dropped!');
     
    });  
   

    
    it('Drag and Drop using dragStart 2 - not working', () => {
      const dataTransfer = new DataTransfer();
   
      cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
      cy.get('#box6').trigger('dragstart', {
        dataTransfer
      });
   
      cy.get('#box106').trigger('drop', {
        dataTransfer
      });
    });  



    it('Drag and Drop using plugin', () => {
            
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box6').drag('#box106').then((success) => {
            assert.isTrue(success)
          })
     });  


  });