describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have working arithmetic buttons that update with result displayed ', () => {
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9')
  })

  it('should be able to chain multiple operations together', () => {
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '72')
  })

  it('should be able display expected output for a range of numbers, including decimal numbers', () => {
    cy.get('#number4').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '31.5')
  })

  it('should be able display expected output for a range of numbers, including negative numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-5')
  })

  it('should be able to display an error message when exceptional circumstances arise', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'error - cannot divide by 0')
  })
})