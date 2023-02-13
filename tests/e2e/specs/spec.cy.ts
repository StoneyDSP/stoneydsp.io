describe('Visit website', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000'),
    cy.visit('http://localhost:3000/public'),
    cy.contains('StoneyDSP')
  })
})
