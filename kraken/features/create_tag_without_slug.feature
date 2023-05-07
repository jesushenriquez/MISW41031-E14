Feature: Sign In

@user1 @web
Scenario: Crear un nuevo tag sin el campo slug
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  And I enter email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click on "SIGNIN"
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