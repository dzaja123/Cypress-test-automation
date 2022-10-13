import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

import loginPage from "../../pages/loginPage";

Given("A user is at the saucelabs login page", () => {
    cy.visit('/');
});

When("A user enters the username {string}", (username) => {
    loginPage.typeUsername(username);
});

When("A user enters the password {string}", (password) => {
    loginPage.typePassword(password);
});

When("A user clicks on the login button", () => {
    loginPage.clickLogin();
});

Then("A user is logged in", () => {
    cy.url().should("contains", "/inventory.html");
});

Then("The error message {string} is displayed", (errorMessage) => {
    loginPage.checkErrorMessage(errorMessage);
});