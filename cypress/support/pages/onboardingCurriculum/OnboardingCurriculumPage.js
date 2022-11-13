
import { element } from './elements'
import toast from '../../components/toast/ToastComponent'

class OnboardingCurriculumPage {

    constructor() {
        this.toast = toast
        this.alert = alert
    }

    addLanguages() {
        cy.get(element.ADD_LANGUAGE_BY_ATTRIBUTE).click()
        cy.get(element.ADD_BUTTON_BY_CLASS).click()
        cy.get(element.SEARCH_LANGUAGE_BY_CLASS).type('Inglês {enter}') 
        cy.get(element.LEVEL_NATIVE_BY_CLASS) .click()
        cy.contains('button', element.SAVE_BUTTON_BY_TEXT).click()
    }

    addProfessionalExperience() {
        cy.get(element.ADD_PROFESSIONAL_EXPERIENCE_BY_ATTRIBUTE).click()
        cy.get(element.COMPANY_NAME_BY_ID).type('Coodesh')
        cy.get(element.OFFICE_BY_ID).type('QA')
        cy.get(element.LOCATION_WORK_BY_ID)
            .click({ force: true})
            .should('be.checked')
        cy.get(element.START_DATE_BY_ATTRIBUTE).type('15/02/2012') 
        cy.get(element.END_DATE_BY_ATTRIBUTE).type('15/05/2021')
        cy.get(element.DESCRIPTION_BY_ID).type('Testes Automatizados Cypress')
        cy.contains('button', element.ADD_EXPERIENCE_BUTTON_BY_TEXT).click()
        cy.contains('button', element.SAVE_BUTTON_BY_TEXT).click()
    }

    addAcademicEducation() {
        cy.get(element.ADD_ACADEMIC_EDUCATION_BY_ATTRIBUTE).click()
        cy.get(element.SCHOOL_NAME_BY_ID).type('Faculdade de Tecnologia')
        cy.get(element.FORMATION_BY_ID).type('Analise de Sistemas')
        cy.get(element.START_DATE_BY_ATTRIBUTE).type('15/02/2012') 
        cy.get(element.CURRENTLY_STUDY_HERE_BY_ID)
            .click({ force: true})
            .should('be.checked')
        cy.contains('button', element.ADD_FORMATION_BUTTON_BY_TEXT).click()
        cy.contains('button', element.SAVE_BUTTON_BY_TEXT).click()
    }

    addProjectPortfolio() {
        cy.get(element.ADD_PROJECT_PROTFOLIOS_BY_ATTRIBUTE).click()
        cy.get(element.NAME_BY_ID).type('Projeto Cypress Coodesh')
        cy.get(element.LINK_PROJECT_BY_ID).type('http://projetocoodesh.com')
        cy.get(element.STACK_BY_CLASS).type('BDD{enter}')
        cy.get(element.STACK_BY_CLASS).type('Javascript{enter}')
        cy.get(element.DESCRIPTION_BY_ID).type('Testes Automatizados Cypress')
        cy.contains('button', element.ADD_PROJECT_BUTTON_BY_TEXT).click()
        cy.contains('button', element.SAVE_BUTTON_BY_TEXT).click()
    }

    addCertificate() {
        cy.get(element.ADD_CERTIFICATE_BY_ATTRIBUTE).click()
        cy.get(element.SCHOOL_NAME_BY_ID).type('Coodesh')
        cy.get(element.NAME_BY_ID).type('Curso de Qualidade')
        cy.get(element.CATEGORY_BY_ID).type('QA')
        cy.get(element.START_DATE_BY_ATTRIBUTE).type('15/02/2012') 
        cy.get(element.END_DATE_BY_ATTRIBUTE).type('15/05/2014')
        cy.get(element.WORKLOAD_BY_ID).type('150')
        cy.contains('button', element.ADD_FORMATION_BUTTON_BY_TEXT).click()
        cy.contains('button', element.SAVE_BUTTON_BY_TEXT).click()
    }

    completeProfile() {
        cy.contains('a', element.BUTTON_COMPLETE_PROFILE_BY_TEXT).click()
    }
}

export default new OnboardingCurriculumPage()