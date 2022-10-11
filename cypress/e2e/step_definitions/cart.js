import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

const loginPage = require("../../pages/loginPage");
const cartPage = require("../../pages/cartPage");

const sauceDemoUrl = "https://www.saucedemo.com/"

const username = "standard_user"
const password = "secret_sauce"

Given('A user has successfully logged in', () => {
    cy.visit(sauceDemoUrl);
    loginPage.submitLogin(username, password);
});

When('A user clicks on the {string} button', (button) => {
    cartPage.clickButton(button)
});

When('A user clicks on the cart button', () => {
    cartPage.clickCartButton();
});

Then('A item will be added to the cart', () => {
    cartPage.clickCartButton();
    cartPage.cartItemDisplayed();
});

Then('A item will be removed from the cart', () => {
    cartPage.clickCartButton();
    cartPage.cartItemNotDisplayed();
});

When('A user types his first name {string}', (firstName) => {
    cartPage.enterFirstName(firstName);
});

When('A user types his last name {string}', (lastName) => {
    cartPage.enterLastName(lastName);
});

When('A user types his zip code {string}', (zipCode) => {
    cartPage.enterZipCode(zipCode);
});

Then('A item checkout will be successfull', () => {
    cartPage.checkoutComplete();
});