
import { element } from './elements'
import toast from '../../components/toast/ToastComponent'
import alert from '../../components/alert/AlertComponent'

class LoginPage {

    constructor() {
        this.toast = toast
        this.alert = alert
    }

    go = () => {
        cy.visit('/auth/signin/candidates')
        cy.url().should('contain', 'signin')
    }

    buttonCookies = () => cy.get(element.BUTTON_COOKIES_BY_ID)

    form(dataUserLogin) {
        cy.get(element.EMAIL_BY_ID)
            .clear()
            .type(dataUserLogin.email)            
        cy.get(element.PASSWORD_BY_ID)
            .clear()
            .type(dataUserLogin.password)
    }

    clickFieldEmail = () => cy.get(element.EMAIL_BY_ID)

    clickFieldPassword = () => cy.get(element.PASSWORD_BY_ID)

    clickBody = () => cy.get(element.BODY).click();

    submit = () => cy.get(element.LOGIN_BUTTON_BY_ATTRIBUTE)           
}

export default new LoginPage()