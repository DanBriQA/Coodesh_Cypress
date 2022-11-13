
import { element } from './elements'

class OnboardingScoredIntroPage {
    answerNow = () => cy.contains('a', element.ANSWER_NOW_BUTTON_BY_TEXT)          
}

export default new OnboardingScoredIntroPage()