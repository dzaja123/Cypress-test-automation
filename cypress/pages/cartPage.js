class cartPage {
    elements = {
        addItemButton: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        cartButton: () => cy.get('.shopping_cart_link'),
        addedItem: () => cy.get('.cart_item'),
        checkoutButton: () => cy.get('[data-test="checkout"]'),
        removeItemButton: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
        firstNameField: () => cy.get('[data-test="firstName"]'),
        lastNameField: () => cy.get('[data-test="lastName"]'),
        zipCodeField: () => cy.get('[data-test="postalCode"]'),
        continueButton: () => cy.get('[data-test="continue"]'),
        finishButton: () => cy.get('[data-test="finish"]'),
        checkoutComplete: () => cy.get('.title'),
    };

    clickButton(string) {
        button = NaN;

        switch (string) {
            case "Add":
                button = this.elements.addItemButton();
                break;
            case "Cart":
                button = this.elements.cartButton();
                break;
            case "Checkout":
                button = this.elements.checkoutButton();
                break;
            case "Remove":
                button = this.elements.removeItemButton();
                break;
            case "Continue":
                button = this.elements.removeItemButton();
                break;
            case "Finish":
                button = this.elements.finishButton();
                break;
        }
        button.click();
    }

    cartItemDisplayed() {
        this.elements.addedItem().should('be.visible')
    }

    cartItemNotDisplayed() {
        this.elements.addedItem().should('not.exist')
    }

    enterFirstName(firstName) {
        this.elements.firstNameField().type(firstName);
    }

    enterLastName(lastName) {
        this.elements.lastNameField().type(lastName);
    }

    enterZipCode(zipCode) {
        this.elements.zipCodeField().type(zipCode);
    }

    checkoutComplete() {
        cy.elements.checkoutComplete().should("contains", "CHECKOUT: COMPLETE!");
    }
}

module.exports = new cartPage();