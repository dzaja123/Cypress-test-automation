import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('A user opens the login page', () => {
    cy.visit('https://www.saucedemo.com/')
})

When('A user enter the username {string}', () => {

})