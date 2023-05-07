Feature: Sign In

@user1 @web
Scenario: Crear un nuevo member
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  And I enter email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click on "SIGNIN"
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
  When I check if member "<MEMBER_NAME>" exists