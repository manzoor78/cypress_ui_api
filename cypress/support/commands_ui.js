

// Assert element exists
Cypress.Commands.add("assertElementPresent", (element) => {
     cy.get(element)
       .should('exist');
});

// Enter Text
Cypress.Commands.add("enterText", (element,text) => {
     cy.get(element)
       .type(text);
});

// Click on Element
Cypress.Commands.add("clickButton", (element) => {
     cy.get(element)
       .click();
});

// Ignore uncaught application errors
Cypress.on('uncaught:exception', (err, runnable) => {
     return false
});