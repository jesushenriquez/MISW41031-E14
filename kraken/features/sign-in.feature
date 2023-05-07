Feature: Sign In

@user1 @web
Scenario: Intento de inicio de sesion fallido
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I enter email "email@Mal.com"
  And I enter password "passmal"
  And I click on the button Sing in ->
  And I wait for 5 seconds
  Then I should see a button Sing in -> with text Retry
  And I wait for 2 seconds



@user2 @web
Scenario: Iniciar sesión en el dashboard administrativo con un email y password existente y validos
  Given I want to login by env
  And I wait for 5 seconds
  Then I should be logged in
  And I wait for 2 seconds