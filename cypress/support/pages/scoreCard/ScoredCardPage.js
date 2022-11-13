
import { element } from './elements'

class ScoredCardPage {
    skillThree = () => cy.get(element.SKILL_THREE_ADVANCED_BY_ATTRIBUTE)            
  
    skillSeven = () => cy.get(element.SKILL_SEVEN_PRACTITIONER_BY_ATTRIBUTE)

    skillFive = () => cy.get(element.SKILL_FIVE_BASIC_BY_ATTRIBUTE)            

    skillNine = () => cy.get(element.SKILL_NINE_PRACTITIONER_BY_ATTRIBUTE)            
    
    skillFour = () => cy.get(element.SKILL_FOUR_ADVANCED_BY_ATTRIBUTE)            

    skillTen = () => cy.get(element.SKILL_TEN_BASIC_BY_ATTRIBUTE)           

    buttonNext = () => cy.contains('button', element.BUTTON_NEXT_BY_TEXT)

    buttonSubmit = () => cy.contains('button', element.BUTTON_SUBMIT_BY_TEXT)
}

export default new ScoredCardPage()