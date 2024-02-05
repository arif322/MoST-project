class login{

    loginProcess(){
    let logPage = "//a[normalize-space()='Login']"
    let username ="//input[@id='loginForm_username']" 
    let password= "//input[@id='loginForm_password']"
    let submit = "//span[normalize-space()='Log in']"

    cy.xpath(logPage).click()
    cy.xpath(username).type('nafiz@yopmail.com')
    cy.xpath(password).type('Abc123!')
    cy.xpath(submit).click()
    cy.wait(2000)

    }
}export default login

