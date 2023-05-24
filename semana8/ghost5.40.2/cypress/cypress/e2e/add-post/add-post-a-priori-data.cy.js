const { signIn } = require("../../support/utils");
const {movies, nftUrls,tracksBadSpotify,formDataSet,tracksSpotify,youtubeBadUrls, youtubeUrls} = require("../../data/dataPost")
const {Post} = require("../../pageObjects/post")


describe("Add Post", function () {
  before(() => {});

  beforeEach(() => {
    signIn();
    cy.visit("http://localhost:2368/ghost/#/editor/post");
  });

  const post = new Post();
  /**
   * -------------------------------------------------------------
   *                    POST REGISTRO Y PUBLICACION
   * -------------------------------------------------------------
   */

  formDataSet.forEach((formData, index) => {
    it(`Registro y Publicación: ${formData.postTitle}`, function () {
      post.checkPlaceHolderTitle();
      post.title(formData.postTitle);
      post.type(formData.postContent);
      post.publish();
      post.checkPublish(formData.postTitle);
    });
  });
  /**
   * -------------------------------------------------------------
   *                    POST REGISTRO Y SCHEDULE
   * -------------------------------------------------------------
   */
  formDataSet.forEach((formData, index) => {
    it(`Registro y Publicación: ${formData.postTitle}`, function () {
      post.checkPlaceHolderTitle();
      post.title(formData.postTitle);
      post.type(formData.postContent);
      post.schedule();
      post.checkPublish(formData.postTitle);
    });
  });
  /**
   * -------------------------------------------------------------
   *                          IMAGEN
   * -------------------------------------------------------------
   */
  formDataSet.forEach((formData, index) => {
    it(`Registrar y Publicar un nuevo Post con Imagen (${index + 1})`, () => {
      post.checkPlaceHolderTitle();
      post.title(formData.postTitle);
      post.addImage(formData.postImage);
      post.publish();
      post.checkPublish(formData.postTitle);
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
      post.checkPlaceHolderTitle();
      post.title(formData.postTitle);
      post.addButton(formData.button.buttonText, formData.button.buttonUrl);
      post.publish();
      post.checkPublish(formData.postTitle);
    });
  }

  /**
   * -------------------------------------------------------------
   *                          NFT OPENSEA
   * -------------------------------------------------------------
   */

  nftUrls.forEach((nftUrl, i) => {
    it("Registrar y Publicar un nuevo Post con nft " + i, () => {
      post.checkPlaceHolderTitle();
      post.title("Titulo Post con NFT " + i);
      post.addNFT(nftUrl);
      post.checkErrorParsingUrl();
    });
  });
  /**
   * -------------------------------------------------------------
   *                          YOUTUBE
   * -------------------------------------------------------------
   */

  youtubeUrls.forEach((url) => {
    it("Registrar y Publicar un nuevo Post con youtube " + url.title, () => {
      post.checkPlaceHolderTitle();
      post.title(`Post de ${url.title}`);
      post.addYoutube(url.url);
      post.publish();
      post.checkPublish(`Post de ${url.title}`);
    });
  });
  /**
   * -------------------------------------------------------------
   *                          YOUTUBE BAD
   * -------------------------------------------------------------
   */

  youtubeBadUrls.forEach((url) => {
    it("Registrar  un nuevo Post con url mal youtube " + url.title, () => {
      post.checkPlaceHolderTitle();
      post.title(`Post de ${url.title}`);
      post.addYoutube(url.url);
      post.checkErrorParsingUrl();
    });
  });

  /**
   * -------------------------------------------------------------
   *                          SPOTIFY
   * -------------------------------------------------------------
   */

  tracksSpotify.forEach((track) => {
    it("Registrar y Publicar un nuevo Post con Spotify " + track.name, () => {
      post.checkPlaceHolderTitle();
      post.title(`Post of ${track.name} by ${track.artist} (${track.genre})`);
      post.addSpotify(track.url);
      post.publish();
      post.checkPublish(
        `Post of ${track.name} by ${track.artist} (${track.genre})`
      );
    });
  });
  /**
   * -------------------------------------------------------------
   *                          SPOTIFY BAD
   * -------------------------------------------------------------
   */

  tracksBadSpotify.forEach((track) => {
    it(
      "Registrar y Publicar un nuevo Post con Spotify que sale mal " +
        track.name,
      () => {
        post.checkPlaceHolderTitle();
        post.title(`Post of ${track.name} by ${track.artist} (${track.genre})`);
        post.addSpotify(track.url);
        post.checkErrorParsingUrl();
      }
    );
  });
  /**
   * -------------------------------------------------------------
   *               TEXTO, IMAGEN, YOUTUBE, SPOTIFY
   * -------------------------------------------------------------
   */
  movies.forEach((pelicula) => {
    it("Registrar y Publicar un nuevo Post con texto, imagen, youtube y spotify", () => {
      //siempre al inicio
      post.checkPlaceHolderTitle();
      //----------------------------------


      
      post.title(pelicula.postTitle);

      post.type(pelicula.postContent);
      post.addImage(pelicula.postImage);

      post.type("Miremos un video");
      post.addYoutube(pelicula.postYoutube);
      
      post.type("Miremos la banda sonora de la pelicula");
      post.addSpotify(pelicula.postSpotify);

      //siempre al final
      post.publish();
      post.checkPublish(pelicula.postTitle);
    });
  });
});
