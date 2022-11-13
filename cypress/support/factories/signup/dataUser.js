import { faker } from '@faker-js/faker'

exports.dataUserSignup = {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: 'Abcd123#'
}

exports.dataUserLogin = {
    name: 'Elsie',
    email: 'elsie.gray@example.com',
    password: 'Abcd123#'
}