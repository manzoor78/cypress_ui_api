
// Read add pet request body
const addPetRequestBody = require("../data/addNewPet.js");

// Add a pet
Cypress.Commands.add("addPet", () => {
      cy.request('POST', '/v2/pet',addPetRequestBody)
      .then((response) => {
          expect(response.status).to.eq(200)
        });
});

// Find Pet details by ID
Cypress.Commands.add("findPetByID", (petID) => {
      cy.request('GET', '/v2/pet/' + petID)
      .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('id', petID)
        });
});

// Update pet name by Pet ID
Cypress.Commands.add("updatePetNameByID", (petID,petName) => {
      cy.request({
        method: 'POST',
        url: '/v2/pet/' + petID,
        form: true,
        body: {
          petId: petID,
          name: petName,
          status: 'available'
        },
      })
      .then((response) => {
         expect(response.status).to.eq(200)
      });
});

// Match Pet ID and Name
Cypress.Commands.add("matchPetIDAndName", (petID,petName) => {
      cy.request('GET', '/v2/pet/' + petID)
      .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('id', petID)
          expect(response.body).to.have.property('name', petName)
        });
});

// Delete a Pet with Pet ID
Cypress.Commands.add("deletePet", (petID) => {
      cy.request('DELETE', '/v2/pet/'+ petID)
      .then((response) => {
          expect(response.status).to.eq(200)
        });
});