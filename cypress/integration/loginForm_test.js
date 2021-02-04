describe('Fitness App', () => {
      beforeEach(() => {
        cy.visit('/login')  // correct path
      }) // connect to cypress with cy.visit
    
      // tests for the test itself
      it('sanity check', () => {
        // expect is an assertion, can have many assertions in a test
        expect(1 + 2).to.equal(3)
        expect(1 + 2).not.to.equal(4)
      }) // test check 1
    
      it('sanity check 2', () => {
        expect([1,2,3,4,5].length).to.equal(5)
      })  // test check 2
    
      // element variables
      const email = () => cy.get('[name="email"]')
      const password = () => cy.get('[name="password"]')
      const submitButton = () => cy.get('#submitBtn2')
    
      it('input fields are rendering', () => {
        email().should('exist')
        password().should('exist')
        submitButton().should('exist')
      })
    
      it('make sure we can login', () => {
        const testEmail = "1234@test.com"
        const testPassword = 1234
    
      
        email().type(testEmail)
        password().type(testPassword)
     
        submitButton().click()
      })
    
    });