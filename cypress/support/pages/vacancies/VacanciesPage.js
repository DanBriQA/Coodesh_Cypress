
import { element } from './elements'

class VacanciesPage {

    go = () => {
        cy.visit('/vagas')
        cy.url().should('contain', 'vagas');
    }

    searchVacancies() {
        cy.get(element.FIELD_SEARCH_BY_ATTRIBUTE).type('Cypress Test e2e')
        cy.contains('button', element.BUTTON_SEARCH_BY_TEXT).click()  
    }

    searchnullVacancies() {
        cy.get(element.FIELD_SEARCH_BY_ATTRIBUTE).type('empresa inexistente')
        cy.contains('button', element.BUTTON_SEARCH_BY_TEXT).click()
          
    }

    checkIfVacanciesVisible() {
        cy.get(element.VACANCIES_BY_CLASS, { timeout: 20000 })
            .should('be.visible')
            .should('not.be.empty')
            
    }

    checkIfVacanciesNotVisible() {
        cy.get(element.VACANCIES_BY_CLASS, { timeout: 20000 })
            .should('not.exist')           
    }
}

export default new VacanciesPage