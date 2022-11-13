/// <reference types="cypress" />

import signupPage from '../support/pages/signup/SignupPage'
import onboardingPageProfile from '../support/pages/onboardingProfile/OnboardingProfilePage'
import onboardingPagePersonal from '../support/pages/onboardingPersonal/OnboardingPersonalPage'
import onboardingPageScoredIntro from '../support/pages/onboardingScoredIntro/OnboardingScoredIntroPage'
import scoredCardPage from '../support/pages/scoreCard/ScoredCardPage'
import onboardingPageCurriculum from '../support/pages/onboardingCurriculum/OnboardingCurriculumPage'
import dashPage from '../support/pages/dash/DashPage'
import {dataUserSignup} from '../support/factories/signup/dataUser'

describe('Criação de conta', () => {

    before(()=>{
        cy.fixture('signup').then(function(signup) {
            this.onboarding = signup.onboarding
            this.onboardingProfile = signup.onboardingProfile
          });
    })

    context('Quando o usuário não tem cadastro', function () {

        it('deve cadastrar e completar o onboarding com sucesso', function () {
            signupPage.go()
            signupPage.buttonCookies()
            signupPage.form(dataUserSignup)
            signupPage.acceptTermsAndConditions()
            signupPage.submit()
            onboardingPageProfile.carrers().click()
            onboardingPageProfile.getSkills()
            onboardingPageProfile.experience().click()
            onboardingPageProfile.preferenceJobSearch()
            onboardingPageProfile.whatsApp().type(this.onboarding.whatsApp)
            onboardingPageProfile.city().type(this.onboarding.city)
            onboardingPageProfile.vacancyPreference().check()
            onboardingPageProfile.buttonNext().click()
            onboardingPagePersonal.communities()
            onboardingPagePersonal.socialCauses().type(this.onboarding.socialCauses + '{enter}')
            onboardingPagePersonal.race().select(this.onboarding.race)
            onboardingPagePersonal.gender().select(this.onboarding.male_gender)
            onboardingPagePersonal.sexualOrientation().select(this.onboarding.sexualOrientation)
            onboardingPagePersonal.buttonNext().click()
            onboardingPageScoredIntro.answerNow().click() 
            scoredCardPage.skillThree().click()
            scoredCardPage.skillSeven().click()
            scoredCardPage.skillFive().click()
            scoredCardPage.buttonNext().click()
            scoredCardPage.skillTen().click()
            scoredCardPage.skillFour().click()
            scoredCardPage.skillNine().click()
            scoredCardPage.buttonSubmit().click()
            onboardingPageCurriculum.addLanguages()
            onboardingPageCurriculum.toast.shouldHaveText('A conta foi atualizada')
            onboardingPageCurriculum.addProfessionalExperience()
            onboardingPageCurriculum.toast.shouldHaveText('A conta foi atualizada')
            onboardingPageCurriculum.addAcademicEducation()
            onboardingPageCurriculum.toast.shouldHaveText('A conta foi atualizada')
            onboardingPageCurriculum.addProjectPortfolio()
            onboardingPageCurriculum.toast.shouldHaveText('A conta foi atualizada')
            onboardingPageCurriculum.addCertificate()
            onboardingPageCurriculum.toast.shouldHaveText('A conta foi atualizada')
            onboardingPageCurriculum.completeProfile()
            dashPage.header.userLoggedIn(dataUserSignup.name)

        })
    })

});