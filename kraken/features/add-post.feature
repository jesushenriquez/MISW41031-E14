Feature: Add Post

@user3 @web
Scenario: Registrar y Publicar un nuevo Post
  Given I want to login by env
  
  And I wait for 1 seconds
  And I click on the plus button in the Menu
  Then I check load Post Create form
  When I enter title "Titulo Primer Post"
  And I enter Body "lorem Ipsum Dolor Sip ammet"
  And I click on publish
  And I wait for 1 seconds
  And I click on Continue, final review
  And I wait for 1 seconds
  And I click on confirm publish
  And I wait for 1 seconds
  Then I validate text of title "Titulo Primer Post"


@user1 @web
Scenario: Registrar y Publicar un nuevo Post con imagen
  Given I want to login by env
  And I wait for 1 seconds
  And I click on the plus button in the Menu
  Then I check load Post Create form
  When I enter title "Titulo Primer Post con Imagen"
  And I wait for 10 seconds
  And I enter post Image "/image https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  And I wait for 10 seconds
  And I click on publish
  And I wait for 1 seconds
  And I click on Continue, final review
  And I wait for 1 seconds
  And I click on confirm publish
  And I wait for 1 seconds
  Then I validate text of title "Titulo Primer Post con Imagen"