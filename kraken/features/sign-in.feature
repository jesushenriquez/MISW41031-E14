Feature: Sign In

@user2 @web
Scenario: Iniciar sesión en el dashboard administrativo con un email y password existente y validos
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I enter email "daniel.jimenez@ingenieros.com"
  And I enter password "Asdf1234$*"
  And I click on the button Sing in ->
  And I wait for 5 seconds
  Then I should be logged in
  And I wait for 2 seconds