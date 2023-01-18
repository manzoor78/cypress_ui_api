
const urls = require("../config/utils.json");

describe('API Functional Testing', () => {
   beforeEach(() => {
  		cy.visit(urls.baseUrlAPI);
  	});

   it('Add a Pet', () => {
        cy.addPet();
   });

   it('Update Pet Name', () => {
        cy.findPetByID(100);
        cy.matchPetIDAndName(100,'Cat');
        cy.updatePetNameByID(100,'Dog');
        cy.matchPetIDAndName(100,'Dog');
   });

   it('Delete a Pet', () => {
           cy.deletePet(100);
   });

});
