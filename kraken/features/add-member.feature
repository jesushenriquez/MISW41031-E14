Feature: Add Member

@user1 @web
Scenario: Crear un nuevo member
  Given I want to login by env
  And I wait for 1 seconds
  And I click on "MEMBERS"
  And I wait for 1 seconds
  And I click on "NEW_MEMBER"
  And I wait for 1 seconds
  And I enter member name "<MEMBER_NAME>"
  And I wait for 1 seconds
  And I enter member email "<MEMBER_EMAIL>"
  And I wait for 1 seconds
  And I enter member note "<MEMBER_NOTE>"
  And I wait for 1 seconds
  And I click on "SAVE"
  And I wait for 2 seconds
  And I click on "MEMBERS"
  And I wait for 1 seconds
  # When I check if member "<MEMBER_NAME>" exists

@user2 @web
Scenario: Crear un nuevo member sin nota
  Given I want to login by env
  And I wait for 1 seconds
  And I click on "MEMBERS"
  And I wait for 1 seconds
  And I click on "NEW_MEMBER"
  And I wait for 1 seconds
  And I enter member name "<MEMBER_NAME>"
  And I wait for 1 seconds
  And I enter member email "<MEMBER_EMAIL>"
  And I wait for 1 seconds
  And I click on "SAVE"
  And I wait for 2 seconds
  And I click on "MEMBERS"
  And I wait for 1 seconds
  # When I check if member "<MEMBER_NAME>" exists


@user3 @web
Scenario: Crear un nuevo member solo con email
  Given I want to login by env
  And I wait for 1 seconds
  And I click on "MEMBERS"
  And I wait for 1 seconds
  And I click on "NEW_MEMBER"
  And I wait for 1 seconds
  And I enter member email "<MEMBER_EMAIL>"
  And I wait for 1 seconds
  And I click on "SAVE"
  And I wait for 2 seconds
  And I click on "MEMBERS"
  And I wait for 1 seconds
  # When I check if member "<MEMBER_NAME>" exists