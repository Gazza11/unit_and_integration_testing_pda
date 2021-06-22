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
})