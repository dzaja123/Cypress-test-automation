Feature: Web Page navigation

Scenario: Web page loads correctly and all elements are visible
  When A user navigates to the web page
  Then A user will see all elements

Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the saucelabs login page
        
    Scenario: Success Login
        When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
        Then the url will contains the inventory subdirectory

    Scenario: Blocked Login
        When A user enters the username "locked_out_user", the password "secret_sauce", and clicks on the login button
        Then The error message "Epic sadface: Sorry, this user has been locked out." is displayed

    Scenario: Incorrect Username Login
        When A user provides incorrect credentials, and clicks on the login button
            | username | password     |
            | testName | secret_sauce |
        Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed

    Scenario: Incorrect Password Login
        When A user provides incorrect credentials, and clicks on the login button
            | username      | password     |
            | standard_user | testPassword |
        Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed

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
