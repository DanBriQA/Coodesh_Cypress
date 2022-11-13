/// <reference types="cypress" />

import loginPage from '../support/pages/login/LoginPage'
import dashPage from '../support/pages/dash/DashPage'
import vacanciesPage from '../support/pages/vacancies/VacanciesPage'

describe('Testes em vagas', () => {


    context('Quando o usuário está logado', function () {
        const user = {
            name: 'Elsie',
            email: 'elsie.gray@example.com',
            password: 'Abcd123#'
        }
        
        beforeEach(() => {
            loginPage.go();
            loginPage.buttonCookies().click();
            loginPage.form(user);
            loginPage.submit().click();

            dashPage.header.userLoggedIn(user.name)
        });

        it(" Um vez na tela de vagas, deve buscar por uma empresa onde terá um ou mais resultados de vagas", () => {
            vacanciesPage.go();
            vacanciesPage.searchVacancies();
            cy.wait(2000)
            vacanciesPage.checkIfVacanciesVisible();
        });

        it(" Um vez na tela de vagas, deve buscar por uma empresa inexustente não encontrará vagas", () => {
            vacanciesPage.go();
            vacanciesPage.searchnullVacancies();
            cy.wait(2000)
            vacanciesPage.checkIfVacanciesNotVisible();
        });
    })
});