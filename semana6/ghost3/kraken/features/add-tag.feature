Feature: Create Tag

@user1 @web
Scenario: Crear un nuevo tag desde el panel de Tags sin datos en los campos
  Given I want to login by env
  And I click on "TAG"
  And I click on "NEW_TAG"
  And I wait for 1 seconds
  And I enter tag name "<TAG_NAME>"
  And I wait for 1 seconds
  And I enter tag color "<TAG_COLOR>"
  And I wait for 1 seconds
  And I enter tag slug "<TAG_SLUG>"
  And I wait for 1 seconds
  And I enter tag description "<TAG_DESCRIPTION>"
  And I wait for 1 seconds
  And I click on "SAVE"
  And I click on "TAG"
  Then I check if tag "<TAG_NAME>" exists

@user2 @web
Scenario: Crear un nuevo tag desde el panel de Tags
  Given I want to login by env
  And I click on "TAG"
  And I click on "NEW_TAG"
  And I wait for 1 seconds
  And I click on "SAVE"
  Then I check errors

@user3 @web
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

@user4 @web
Scenario: Crear un nuevo tag con detalles especificos
  Given I want to login by env
  And I click on "TAG"
  And I click on "NEW_TAG"
  And I wait for 1 seconds
  And I enter tag name "New Tag by Yojan"
  And I wait for 1 seconds
  And I enter tag color "#FF0000"
  And I wait for 1 seconds+
  And I enter tag slug "new-tag-by-yojan"
  And I wait for 1 seconds
  And I enter tag description "This is a new tag created by Yojan"
  And I wait for 1 seconds
  And I click on "SAVE"
  And I click on "TAG"
  Then I check if tag "New Tag by Yojan" exists
