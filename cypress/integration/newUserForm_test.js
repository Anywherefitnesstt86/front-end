// describe block "describes" our collection of tests
describe('Fitness App', () => {
// ----------------- TESTS for NEWUSER FORM ------------------------
  beforeEach(() => {
    // console.log(`random int: ${Math.random()}`)
    cy.visit('/newUser')  // correct path
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
  const personName = () => cy.get('[name="personName"]')
  const email = () => cy.get('[name="email"]')
  const isOverEighteen = () => cy.get('[name="isOverEighteen"]')
  const password = () => cy.get('[name="password"]')
  const isInstructor = () => cy.get('[name="isInstructor"]')
  const authCode = () => cy.get('[name="authCode"]')
  const submitButton = () => cy.get('#submitBtn')

  //write a test that inputs are there
  it('input fields are rendering', () => {
    personName().should('exist')
    email().should('exist')
    isOverEighteen().should('exist')
    password().should('exist')
    isInstructor().should('exist')
    // authCode().should('exist') // is hidden on browser load
    submitButton().should('exist')
  })

  // write a test for making sure that we can order a new pizza
  it('make sure we can sign up a new user', () => {
    const testName = "Test Name"
    const testEmail = "1234@test.com"
    const testPassword = 1234
    const testAuthCode = 5678

  
    personName().type(testName)
    email().type(testEmail)
    password().type(testPassword)

    isOverEighteen().check()
    isInstructor().check({force: true})
    authCode().type(testAuthCode)
 
    submitButton().click()
  })

});

// ALL TESTS PASS
