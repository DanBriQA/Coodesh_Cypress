
import { element } from './elements'

import toast from '../../components/toast/ToastComponent'
import alert from '../../components/alert/AlertComponent'

class OnboardingPersonalPage {

    constructor() {
        this.toast = toast
        this.alert = alert
    }

    communities = () => {
        cy.contains('span', element.COMMUNITIES_ONE_BY_TEXT).click()
        cy.contains('span', element.COMMUNITIES_TWO_BY_TEXT).click()
        cy.get(element.COMMUNITIES_RELATIONSIP_ONE_BY_ID).select('Entusiasta')
        cy.get(element.COMMUNITIES_RELATIONSIP_TWO_BY_ID).select('Estudando')    
    }

    socialCauses = () => cy.get(element.SOCIAL_CAUSES_BY_ATTRIBUTE);
 
    race  = () => cy.get(element.RACE_BY_ID);                    

    gender = () => cy.get(element.GENDER_BY_ID);

    sexualOrientation = () => cy.get(element.SEXUAL_ORIENTATION_BY_ID);

    buttonNext = () => cy.contains('button', element.SUBMIT_NEXT_BY_TEXT);
}

export default new OnboardingPersonalPage()