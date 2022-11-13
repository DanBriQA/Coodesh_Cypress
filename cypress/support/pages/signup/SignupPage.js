
import { element } from './elements'

import toast from '../../components/toast/ToastComponent'
import alert from '../../components/alert/AlertComponent'

class SignupPage {

    constructor() {
        this.toast = toast
        this.alert = alert
    }

    go() {
        cy.visit('/auth/signup/candidates')
        cy.url().should('contain', 'candidates');
    }

    buttonCookies() {
        cy.get(element.BUTTON_COOKIES_BY_ID).click()
    }

    form(user) {
        cy.get(element.NAME_BY_ID).type(user.name)
        cy.get(element.EMAIL_BY_ID).type(user.email)
        cy.get(element.PASSWORD_BY_ID).type(user.password)
    }
    
    acceptTermsAndConditions() {
        cy.get(element.ACCEPT_TERMS_AND_CONDITIONS_BY_CLASS)
            .click({ force: true})
            .should('be.checked')
    }

    submit() {
        cy.contains(element.SIGNUP_BUTTON_BY_TEXT).click()
    }
}

export default new SignupPage()