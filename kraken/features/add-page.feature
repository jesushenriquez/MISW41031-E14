Feature: Add Page

@user4 @web
Scenario: Registrar Pagina sin Titulo
  Given I want to login by env
  And I click on "PAGE"
  And I click on "NEW_PAGE"
  And I enter page image "<PAGE_IMAGE>"
  And I wait for 1 seconds
  And I validate image
  And I click on "SAVE_PAGE"
  And I wait for 1 seconds
  And I click on "CONTINUE"
  And I wait for 1 seconds
  And I click on "CONFIRM_PUBLISH"
  And I click on "BACK_TO_EDITOR"
  And I wait for 1 seconds
  And I click on "BACK_TO_PAGES"
  And I wait for 1 seconds
  Then I check if page untitle exists