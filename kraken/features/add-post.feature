Feature: Add Post

@user3 @web
Scenario: Registrar y Publicar un nuevo Post
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I enter email "admin@miso.com"
  And I enter password "Admin123456"
  And I click on the button Sing in ->
  And I wait for 5 seconds
  And I click on the plus button in the Menu
  Then I check load Post Create form
  And I enter title "Titulo Primer Post"
  And I enter Body "lorem Ipsum Dolor Sip ammet"

  And I click on publish
  And I wait for 5 seconds
  When I click on Continue, final review
  And I wait for 3 seconds
  When I click on confirm publish
  And I wait for 3 seconds
  Then I validate text of title "Titulo Primer Post"
  And I wait for 30 seconds