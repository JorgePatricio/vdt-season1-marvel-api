

describe('DELETE /characters/id', function () {

	const character = {
		name: 'Jhonny Storm',
		alias: 'Tocha Humana',
		team: ['Quarteto Fantástico'],
		active: true
	}

	context('quando tenho um personagem cadastrado', function () {
		before(function () {
			cy.postCharacter(character).then(function (response) {
				Cypress.env('characterId', response.body.character_id)
			})
		})

		it('deve remover o personagem por id', function () {
			const id = Cypress.env('characterId')
			cy.deleteCharactersById(id).then(function (response) {
				expect(response.status).to.eql(204)
			})
		})

		after(function(){
			const id = Cypress.env('characterId')
			cy.deleteCharactersById(id).then(function (response) {
				expect(response.status).to.eql(404)
			})
		})
	})

	it('deve retornar 404 ao remover por id não cadastrado', function () {
		const id = '62b5d6e854e506d15806432e'
		cy.deleteCharactersById(id).then(function (response) {
			expect(response.status).to.eql(404)
		})
	})
})