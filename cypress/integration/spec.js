describe('Number Input', () => {
	it('accepts typed input', () => {
		cy.visit('http://localhost:8080')
			.get('.number-input')
			.type('2')
			.should('have.value', '2')
	})

	it('accepts increment via the keyboard up button', () => {
		cy.visit('http://localhost:8080')
			.get('.number-input')
			.type('2')
			.should('have.value', '2')
			.type('{uparrow}')
			.should('have.value', '2.1')
	})

	it('accepts increment via the invoking the stepUp method', () => {
		cy.visit('http://localhost:8080')
			.get('.number-input')
			.type('2')
			.should('have.value', '2')
			.invoke('stepUp')
			.should('have.value', '2.1')
	})
})
