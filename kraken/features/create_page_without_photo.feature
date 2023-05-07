Feature: Sign In

@user1 @web
Scenario: Registrar Pagina sin foto
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  And I enter email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click on "SIGNIN"
  And I wait for 1 seconds
  And I click on "PAGE"
  And I wait for 1 seconds
  And I click on "NEW_PAGE"
  And I wait for 1 seconds
  And I enter page name "<PAGE_NAME>"
  And I wait for 1 seconds
  And I enter page description "<PAGE_DESCRIPTION>"
  And I wait for 1 seconds
  And I click on "SAVE_PAGE"
  And I wait for 1 seconds
  And I click on "CONTINUE"
  And I wait for 1 seconds
  And I click on "CONFIRM_PUBLISH"
  And I wait for 1 seconds
  And I click on "BACK_TO_EDITOR"
  And I wait for 1 seconds