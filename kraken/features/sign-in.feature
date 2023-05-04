Feature: Sign In

@user2 @web
Scenario: Iniciar sesión en el dashboard administrativo con un email y password existente y validos
  Given I navigate to page "https://outlook.com"
  And I wait for 2 seconds
  And I enter email "test@test.com"