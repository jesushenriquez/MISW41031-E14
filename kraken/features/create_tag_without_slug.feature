Feature: Sign In

@user1 @web
Scenario: Crear un nuevo tag sin el campo slug
  Given I want to login by env
  And I click on "TAG"
  And I click on "NEW_TAG"
  And I wait for 1 seconds
  And I enter tag name "<TAG_NAME>"
  And I wait for 1 seconds
  And I enter tag color "<TAG_COLOR>"
  And I wait for 1 seconds
  And I enter tag description "<TAG_DESCRIPTION>"
  And I wait for 1 seconds
  And I click on "SAVE"
  And I click on "TAG"
  Then I check if tag "<TAG_NAME>" exists