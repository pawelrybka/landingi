describe('Test strony Landingi', () => {
  it('Otwórz stronę i kliknij w element', () => {
    cy.visit('https://landingi-dashboard.vercel.app/')
    cy.contains("button","2").click()
    cy.contains("button", "Delete basket").click({ force: true })
    cy.contains("button", "Yes").click()
    cy.contains("div", "New basket").click()
    cy.get("input[type=number]").clear()
    cy.get("input[type=number]").type(2)
    cy.contains("button","Add new basket").click()
  })
})



