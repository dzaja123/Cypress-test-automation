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

        switch (string) {
            case "Add":
                this.elements.addItemButton().click();
                break;
            case "Cart":
                this.elements.cartButton().click();
                break;
            case "Checkout":
                this.elements.checkoutButton().click();
                break;
            case "Remove":
                this.elements.removeItemButton().click();
                break;
            case "Continue":
                this.elements.continueButton().click();
                break;
            case "Finish":
                this.elements.finishButton().click();
                break;
        }
    }

    cartItemDisplayed() {
        this.elements.addedItem().should('be.visible');
    }

    cartItemNotDisplayed() {
        this.elements.addedItem().should('not.exist');
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
        this.elements.checkoutComplete().contains("Checkout: Complete!");
    }
}

module.exports = new cartPage();