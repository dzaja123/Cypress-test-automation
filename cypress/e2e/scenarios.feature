Feature: Web Page navigation

Scenario: Web page loads correctly and all elements are visible
  When A user navigates to the web page
  Then A user will see all elements

Feature: Login Feature

Scenario: User is able to login
  Given A user opens the login page
  When A user enter the correct username
  And A user enter the correct password
  And A user clicks on the login button
  Then A user will be logged in

Scenario: User is not able to login
  Given A user opens the login page
  When A user enter the wrong username
  And A user enter the wrong password
  And A user clicks on the login button
  Then A error message will be displayed

Feature: Add/Remove item Feature

Scenario: User is able to add item to cart
  Given A user has successfully logged in 
  When A user clicks on the Add button
  Then A item will be added to the cart

Scenario: User is able to remove item to cart
  Given A user has successfully logged in 
  When A user clicks on the Remove button
  Then A item will be removed to the cart

Feature: Checkout Feature

Scenario: User is able to Checkout
  Given A user has successfully logged in 
  And A user added items in the shopping cart
  When A user clicks on the CHECKOUT button
  Then A checkout page will be displayed

 Scenario: User is not able to Checkout
  Given A user has successfully logged in 
  And A user did not add items in the shopping cart
  When A user clicks on the CHECKOUT button
  Then A error message will be displayed

Feature: Checkout Feature
 
Scenario: User is able to finish the Checkout
  Given A user has successfully logged in 
  And A user added items in the shopping cart
  When A user clicks on the CHECKOUT button
  Then A checkout page will be displayed

 Scenario: User is not able to finish the Checkout
  Given A user has successfully logged in 
  And A user did not add items in the shopping cart
  When A user clicks on the CHECKOUT button
  Then A error message will be displayed
