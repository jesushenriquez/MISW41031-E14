const { signIn, screenshot } = require("../../support/utils");

const {movies, nftUrls,tracksBadSpotify,formDataSet,tracksSpotify,youtubeBadUrls, youtubeUrls} = require("../../data/dataPost")
const {Post} = require("../../pageObjects/post")

        

describe("Add Post", function () {
  before(() => {});

  beforeEach(() => {
    signIn();
    cy.visit("http://localhost:2369/ghost/#/editor/post");
  });

  const post = new Post();
  /**
   * -------------------------------------------------------------
   *                    POST REGISTRO Y PUBLICACION
   * -------------------------------------------------------------
   */

  formDataSet.forEach((formData, index) => {
    it(`Registro y Publicación: ${formData.postTitle}`, function () {
      let screen = screenshot.bind(
        null,
        "Add Post",
        `Registro y Publicación: ${formData.postTitle} ${index}`
      );
      screen("paso1")
      post.checkPlaceHolderTitle();
      screen("paso2")
      post.title(formData.postTitle);
      screen("paso3")
      post.type(formData.postContent);
      screen("paso4")
      post.publish();
      screen("paso5")
      post.checkPublish(formData.postTitle);
      screen("paso6")
    });
  });
  /**
   * -------------------------------------------------------------
   *                    POST REGISTRO Y SCHEDULE
   * -------------------------------------------------------------
   */
  formDataSet.forEach((formData, index) => {
    it(`Registro y Publicación Schedule: ${formData.postTitle}`, function () {
       let screen = screenshot.bind(
         null,
         "Add Post",
         `Registro y Publicación Schedule: ${formData.postTitle} ${index}`
       );
      post.checkPlaceHolderTitle();
      screen("paso1")
      post.title(formData.postTitle);
      screen("paso2")
      post.type(formData.postContent);
      screen("paso3")
      post.schedule();
      screen("paso4")
      post.checkPublish(formData.postTitle);
      screen("paso5")
    });
  });
  /**
   * -------------------------------------------------------------
   *                          IMAGEN
   * -------------------------------------------------------------
   */
  formDataSet.forEach((formData, index) => {
    it(`Registrar y Publicar un nuevo Post con Imagen (${index + 1})`, () => {
      let screen = screenshot.bind(
        null,
        "Add Post",
        `Registrar y Publicar un nuevo Post con Imagen ${index}`
      );
      screen("paso1")
      post.checkPlaceHolderTitle();
      screen("paso2")
      post.title(formData.postTitle);
      screen("paso3")
      post.addImage(formData.postImage);
      screen("paso4")
      post.publish();
      screen("paso5")
      post.checkPublish(formData.postTitle);
      screen("paso6")
    });
  });

  /**
   * -------------------------------------------------------------
   *                          BOTON
   * -------------------------------------------------------------
   */
  for (let i = 0; i < formDataSet.length; i++) {
    const formData = formDataSet[i];
    it(`Registrar y Publicar Post con Botón ${i + 1}`, () => {
      let screen = screenshot.bind(null, "Add Post", `Registrar y Publicar Post con Botón ${i}`);
      post.checkPlaceHolderTitle();
      screen("paso1");
      post.title(formData.postTitle);
      screen("paso2");
      post.addButton(formData.button.buttonText, formData.button.buttonUrl);
      screen("paso3");
      post.publish();
      screen("paso4");
      post.checkPublish(formData.postTitle);
      screen("paso5");
    });
  }

  /**
   * -------------------------------------------------------------
   *                          NFT OPENSEA
   * -------------------------------------------------------------
   */

  nftUrls.forEach((nftUrl, i) => {
    it("Registrar y Publicar un nuevo Post con nft " + i, () => {
            let screen = screenshot.bind(
              null,
              "Add Post",
              `Registrar y Publicar Post con nft ${i}`
            );

            screen("paso1");
            
            post.checkPlaceHolderTitle();
            screen("paso2");
            post.title("Titulo Post con NFT " + i);
            screen("paso3");
            post.addNFT(nftUrl);
            screen("paso4");
            post.checkErrorParsingUrl();
            screen("paso5");
    });
  });
  /**
   * -------------------------------------------------------------
   *                          YOUTUBE
   * -------------------------------------------------------------
   */

  youtubeUrls.forEach((url, i) => {
    it("Registrar y Publicar un nuevo Post con youtube " + url.title, () => {
      let screen = screenshot.bind(
        null,
        "Add Post",
        `Registrar y Publicar un nuevo Post con youtube ${url.title} ${i}`
      );

      screen("paso1")
      post.checkPlaceHolderTitle();
      screen("paso2")
      post.title(`Post de ${url.title}`);
      post.addYoutube(url.url);
      screen("paso3")
      post.publish();
      screen("paso4")
      post.checkPublish(`Post de ${url.title}`);
      screen("paso5")
    });
  });
  /**
   * -------------------------------------------------------------
   *                          YOUTUBE BAD
   * -------------------------------------------------------------
   */

  youtubeBadUrls.forEach((url, i) => {
    it("Registrar  un nuevo Post con url mal youtube " + url.title, () => {
      let screen = screenshot.bind(
        null,
        "Add Post",
        `Registrar un nuevo Post con url mal youtube ${url.title} ${i}`
      );
      screen("paso1")
      post.checkPlaceHolderTitle();
      screen("paso2")
      post.title(`Post de ${url.title}`);
      screen("paso3")
      post.addYoutube(url.url);
      screen("paso4")
      post.checkErrorParsingUrl();
      screen("paso5")
    });
  });
  
  /**
   * -------------------------------------------------------------
   *                          SPOTIFY
   * -------------------------------------------------------------
  */
 
 tracksSpotify.forEach((track, i) => {
   it("Registrar y Publicar un nuevo Post con Spotify " + track.name, () => {
     let screen = screenshot.bind(
       null,
       "Add Post",
       `Registrar y Publicar un nuevo Post con Spotify  ${track.name} ${i}`
       );
       screen("paso1")
       post.checkPlaceHolderTitle();
       screen("paso2")
       post.title(`Post of ${track.name} by ${track.artist} (${track.genre})`);
       screen("paso3")
       post.addSpotify(track.url);
       screen("paso4")
       post.publish();
       screen("paso5")
       post.checkPublish(
         `Post of ${track.name} by ${track.artist} (${track.genre})`
       );
       screen("paso6")
    });
  });
  /**
   * -------------------------------------------------------------
   *                          SPOTIFY BAD
   * -------------------------------------------------------------
   */

  tracksBadSpotify.forEach((track, i) => {
    it(
      "Registrar y Publicar un nuevo Post con Spotify que sale mal " +
        track.name,
      () => {

        let screen = screenshot.bind(
          null,
          "Add Post",
          `Registrar y Publicar un nuevo Post con Spotify que sale mal  ${track.name} ${i}`
        );

        screen("paso1");
        post.checkPlaceHolderTitle();
        screen("paso2");
        post.title(`Post of ${track.name} by ${track.artist} (${track.genre})`);
        screen("paso3");
        post.addSpotify(track.url);
        screen("paso4");
        post.checkErrorParsingUrl();
        screen("paso5");
      }
    );
  });
  /**
   * -------------------------------------------------------------
   *               TEXTO, IMAGEN, YOUTUBE, SPOTIFY
   * -------------------------------------------------------------
   */
  movies.forEach((pelicula, i) => {
    it("Registrar y Publicar un nuevo Post con texto, imagen, youtube y spotify", () => {

      let screen = screenshot.bind(
        null,
        "Add Post",
        `Registrar y Publicar un nuevo Post con texto, imagen, youtube y spotify ${i}`
      );

      //siempre al inicio
      post.checkPlaceHolderTitle();
      //----------------------------------
      screen("paso1");
      post.title(pelicula.postTitle);
      screen("paso2");
      post.type(pelicula.postContent);
      screen("paso3");
      post.addImage(pelicula.postImage);
      screen("paso4");
      post.type("Miremos un video");
      screen("paso5");
      post.addYoutube(pelicula.postYoutube);
      screen("paso6");
      post.type("Miremos la banda sonora de la pelicula");
      screen("paso7");
      post.addSpotify(pelicula.postSpotify);
      screen("paso8");
      //siempre al final
      post.publish();
      screen("paso8");
      post.checkPublish(pelicula.postTitle);
    });
  });
});
