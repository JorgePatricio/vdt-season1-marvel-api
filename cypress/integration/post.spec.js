

describe('POST /characters', () => {
	it('deve cadastrar um personagem', () => {
		const character = {
			name: 'Wanda Maximoff',
			alias: 'Feiticeira Escarlate',
			team: ['vingadores'],
			active: true
		}
		cy.postCharacter(character)
			.then(response => {
				expect(response.status).to.eq(201)
				expect(response.body.character_id.length).to.eq(24)
			})
	})

	context('quando o persenagem já existe', () => {
		const character = {
			name: 'Pietro Maximoff',
			alias: 'Mercurio',
			team: [
				'vingadores da costa oeste',
				'irmandade de mutantes'
			],
			active: true
		}
		before(() => {
			cy.postCharacter(character)
				.then(response => {
					expect(response.status).to.eq(201)
				})
		})
		it('não deve cadastrar duplicado', () => {
			cy.postCharacter(character)
				.then(response => {
					expect(response.status).to.eq(400)
					expect(response.body.error).to.eq('Duplicate character')
				})
		})
	})
})