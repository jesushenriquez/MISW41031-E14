Feature: Sign In

@user1 @web
Scenario: Registrar Pagina sin foto
  Given I want to login by env
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
  And I click on "BACK_TO_PAGES"
  And I wait for 1 seconds
  Then I check if page "<PAGE_NAME>" exists