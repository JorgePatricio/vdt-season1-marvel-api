// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('setToken', ()=>{
	cy.api({
		method: 'POST',
		url: '/sessions',
		body: {
			email: 'jorge@qacademy.io',
			password: 'qa-cademy'
		}
	}).then(response=>{
		expect(response.status).to.eq(200)
		Cypress.env('token', response.body.token)
	})
})

Cypress.Commands.add('back2ThePast', ()=>{
	cy.api({
		method: 'DELETE',
		url: '/back2thepast/6299f5627bb0f40016e7aee7'
	}).then(response =>{
		expect(response.status).to.eq(200)
	})
})
