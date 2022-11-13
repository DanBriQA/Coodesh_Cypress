import { element } from './elements'

class Header {
    userLoggedIn(userName) {
        cy.get(element.FULL_NAME_BY_ATTRIBUTE)
            .should('be.visible')
            .should('have.text', userName)
    }
}

export default new Header()