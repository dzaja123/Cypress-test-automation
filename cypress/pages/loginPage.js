class loginPage {
    elements = {
        usernameInput: () => cy.get("#user-name"),
        passwordInput: () => cy.get("#password"),
        loginBtn: () => cy.get("#login-button"),
        errorMessage: () => cy.get('h3[data-test="error"]'),
    };

    typeUsername(username) {
        this.elements.usernameInput().type(username);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLogin() {
        this.elements.loginBtn().click();
    }

    submitLogin(username, password) {
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
    }

    checkErrorMessage(errorMessage) {
        this.elements.errorMessage().should("have.text", errorMessage);
    }
}

module.exports = new loginPage();