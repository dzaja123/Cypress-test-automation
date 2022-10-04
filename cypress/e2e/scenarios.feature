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
  Then A user will be loged in

Scenario: User is not able to login
  Given A user opens the login page
  When A user enter the wrong username
  And A user enter the wrong password
  And A user clicks on the login button
  Then A error message will be displayed



