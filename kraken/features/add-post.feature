Feature: Add Post

@user2 @web
Scenario: Registrar y Publicar un nuevo Post con boton
  Given I want to login by env
  And I wait for 1 seconds
  And I click on the plus button in the Menu
  Then I check load Post Create form
  When I enter title "Titulo Primer Post con boton"
  And I enter post button
  And I setup button data
  And I wait for 1 seconds
  And I click on publish
  And I wait for 1 seconds
  And I click on Continue, final review
  And I wait for 1 seconds
  And I click on confirm publish
  And I wait for 1 seconds
  Then I validate text of title "Titulo Primer Post con boton"


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
  And I wait for 1 seconds
  And I enter post Image "/image https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  And I wait for 1 seconds
  And I click on publish
  And I wait for 1 seconds
  And I click on Continue, final review
  And I wait for 1 seconds
  And I click on confirm publish
  And I wait for 1 seconds
  Then I validate text of title "Titulo Primer Post con Imagen"

@user4 @web
Scenario: Registrar y Publicar un nuevo Post con imagen y boton
  Given I want to login by env
  And I wait for 1 seconds
  And I click on the plus button in the Menu
  Then I check load Post Create form
  When I enter title "Titulo Primer Post con Imagen y boton"
  And I wait for 1 seconds
  And I enter post Image "/image https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  And I wait for 1 seconds
  And I enter post button
  And I setup button data
  And I wait for 1 seconds
  And I click on publish
  And I wait for 1 seconds
  And I click on Continue, final review
  And I wait for 1 seconds
  And I click on confirm publish
  And I wait for 1 seconds
  Then I validate text of title "Titulo Primer Post con Imagen y boton"

@user5 @web
Scenario: Registrar y Publicar un nuevo Post con imagen y boton y texto
  Given I want to login by env
  And I wait for 1 seconds
  And I click on the plus button in the Menu
  Then I check load Post Create form
  When I enter title "Titulo Primer Post con Imagen y boton y texto"
  And I wait for 1 seconds
  And I enter post Image "/image https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  And I wait for 1 seconds
  And I enter post button
  And I setup button data
  And I wait for 1 seconds
  And I enter post Body "lorem Ipsum Dolor Sip ammet"
  And I wait for 1 seconds
  And I click on publish
  And I wait for 1 seconds
  And I click on Continue, final review
  And I wait for 1 seconds
  And I click on confirm publish
  And I wait for 1 seconds
  Then I validate text of title "Titulo Primer Post con Imagen y boton y texto"