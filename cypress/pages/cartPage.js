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
    };

    clickAddItem() {
        this.elements.addItemButton().click();
    }

    clickCartButton() {
        this.elements.cartButton().click();
    }

    clickCheckoutButton() {
        this.elements.checkoutButton().click();
    }

    clickRemoveItemButton() {
        this.elements.removeItemButton().click();
    }

    clickContinueButton() {
        this.elements.continueButton().click();
    }

    clickFinishButton() {
        this.elements.finishButton().click();
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
        cy.url().should("contains", "/checkout-complete.html");
    }
}

module.exports = new cartPage();