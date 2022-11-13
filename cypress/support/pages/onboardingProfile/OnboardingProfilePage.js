
import { element } from './elements'

import toast from '../../components/toast/ToastComponent'
import alert from '../../components/alert/AlertComponent'

class OnboardingProfilePage {

    constructor() {
        this.toast = toast
        this.alert = alert
    }

    carrers = () => cy.contains('span', element.CAREERS_BY_TEXT);

    getSkills = () => {
        cy.contains('div', element.SKILLS_BY_TEXT).click()
        cy.contains('div', element.SKILLS1_BY_TEXT).click()
        cy.contains('div', element.SKILLS_BY_TEXT).type('BDD {enter}')
    }

    experience = () => cy.get(element.EXPERIENCE_BY_CLASS);

    preferenceJobSearch = () => cy.get(element.PREFERENCE_JOB_SEARCH_BY_ID);
            
    whatsApp = () => cy.get(element.WHATSAPP_BY_ATTRIBUTE);

    city = () => cy.get(element.CITY_BY_ATTRIBUTE);

    vacancyPreference = () => cy.get(element.VACANCY_PREFERENCE_BY_ID);

    buttonNext = () => cy.contains('button', element.SUBMIT_NEXT_BY_TEXT);

    buttonCookies = () => cy.get(element.BUTTON_COOKIES_BY_ID);
  
    acceptTermsAndConditions = () => cy.get(element.ACCEPT_TERMS_AND_CONDITIONS_BY_CLASS);

}

export default new OnboardingProfilePage()