/// <reference types="cypress" />

import loginPage from '../support/pages/login/LoginPage'
import dashPage from '../support/pages/dash/DashPage'
import {dataUserLogin} from '../support/factories/signup/dataUser'

describe('login', () => {


    context('Quando o usuário está correto', function () {

        it("login com sucesso", () => {
            loginPage.go();
            loginPage.buttonCookies().click();
            loginPage.form(dataUserLogin);
            loginPage.submit().click();

            dashPage.header.userLoggedIn(dataUserLogin.name)
        });
    })

    context('Quando o usuário não está cadastrado', function () {
        const user = {
            email: 'alfie.gray@example.com',
            password: 'Abcd123#'
        }

        it("Usuário não encontrado", () => {
            loginPage.go();
            loginPage.buttonCookies().click();
            loginPage.form(user);
            loginPage.submit().click();

            loginPage.toast.shouldHaveText('Usuário não encontrado')
        });
    })

    context('Quando a senha está incorreta', function () {
        const user = {
            name: 'Elsie',
            email: 'elsie.gray@example.com',
            password: 'abcd123#'
        }

        it("Usuário/senha incorretos", () => {
            loginPage.go();
            loginPage.buttonCookies().click();
            loginPage.form(user);
            loginPage.submit().click();

            loginPage.toast.shouldHaveText('Usuário/senha incorretos')
        });
    })

    context('quando não preencho nenhum dos campos', function(){
        const alertMessages = [
            'Este campo é obrigatório'
        ]

        before(function(){
            loginPage.go();
            loginPage.buttonCookies().click();
            loginPage.clickFieldEmail().click();;
            loginPage.clickFieldPassword().click();;
            loginPage.clickBody();
        })

        alertMessages.forEach(function(alert){
            it('deve exibir ' + alert.toLowerCase(), function(){
                loginPage.alert.haveText(alert)
            })
        })
    })

    context('quando o formato do email é inválido', function () {

        const emails = [
            'danilo.com.br',
            'yahoo.com',
            '@gmail.com',
            '@',
            'danilo@',
            '111111',
            '&$#%*^&^&*',
            'asdsd123'
        ]

        before(function(){
            loginPage.go();
            loginPage.buttonCookies().click();
        })

        emails.forEach(function (email) {
            it('não deve logar com o email: ' + email, () => {
                const user = { email: email, password: 'Abcd123#' }
               
                loginPage.form(user)
                loginPage.alert.haveText('Este campo deve ser um email válido')
            })
        })

    })
});