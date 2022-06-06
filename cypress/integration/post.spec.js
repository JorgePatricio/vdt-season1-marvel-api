

describe('POST /characters', ()=>{

	before(()=>{
		cy.setToken()
		cy.back2ThePast()
	})

	it('deve cadastrar um personagem', ()=> {

		const character ={
			name: 'Wanda Maximoff',
			alias: 'Feiticeira Escarlate',
			team: ['vingadores'],
			active: true
		}

		cy.api({
			method: 'POST',
			url: '/characters',
			body: character,
			headers: {
				Authorization: Cypress.env('token')
			}
		}).then(response => {
			expect(response.status).to.eq(201)
		})
	})
})