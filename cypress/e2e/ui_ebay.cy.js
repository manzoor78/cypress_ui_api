
const urls = require("../config/utils.json");
const homePage = require("../pages/homePage.json");

describe('UI Functional Testing', () => {
   beforeEach(() => {
  		cy.visit(urls.baseUrlUI);
  	});

  // Positive Scenarios
   it('Perform UI Basic Actions', () => {
        cy.assertElementPresent(homePage.Logo);
        cy.enterText(homePage.SearchText,'iphone14');
        cy.clickButton(homePage.SearchButton);
        cy.url()
          .should('contains','iphone14');

   });

   // Negative Scenarios
   it('UI Actions - Negative', () => {
         cy.assertElementPresent(homePage.Logo);
         cy.get(homePage.NoElement).should('not.exist');
         cy.contains('some_random_email@gmail.com').should('not.exist');

   });

});