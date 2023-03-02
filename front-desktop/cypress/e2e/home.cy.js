describe('template spec', () => {
  it('Home page', () => {
    cy.visit('http://localhost:3000/');
    cy.contains("A-rosa-je");
    cy.contains("Gardien de plantes");

    cy.contains("Prenez soin de vos plantes et de celles de vos proches");

  })


  it('back home page', () => {
    cy.visit('http://localhost:3000/my-plants');
    
    cy.contains("A-rosa-je").click()
 
    cy.contains("A-rosa-je");
    cy.contains("Gardien de plantes");

    cy.contains("Prenez soin de vos plantes et de celles de vos proches");
  })


  it('User can login', () => {
    
    cy.visit('http://localhost:3000/');

    cy.intercept('POST', '**/authenticate*').as('getAuthentificate')

    cy.get('[href="/login"] > .btn').click()

    cy.get('#floatingInput').type('a@g')
    cy.get('#floatingPassword').type('test')

    cy.contains("Se connecter").click()

    cy.wait('@getAuthentificate')

    cy.contains("Mes plantes")
    cy.contains("Annonces")
    cy.contains("Les Publications")
    cy.contains("Mon profil")
    cy.contains("Gardien de plantes")
  })

  it('User can signin as a client / And Addresse Input Working', () => {

    cy.visit('http://localhost:3000/');

    cy.intercept('POST', '**/users*').as('postUser')
    cy.intercept('POST', '**/authenticate*').as('getAuthentificate')
    cy.intercept('POST', '**/clients*').as('postCreateClients')


    cy.get('[href="/sign-in"] > .btn').click()

    cy.get('#floatingInputEmail').type('testing@testing.com')
    cy.get('#floatingInputPseudo').type('test')
    cy.get('#floatingPassword').type('test')

    cy.get(':nth-child(1) > .form-control').click().type("9 allée de la vignolièr")

    cy.wait(500)

    cy.contains("9 Allée de la Vignolière 69290 Craponne").click()

    cy.get('.w-100').click()


  
  })

  it('route were block if user was not connected', () => {


    cy.visit('http://localhost:3000/my-plants');
  
  })


})