const { signIn } = require("../../support/utils");
const {
  generarPostsAleatorios,
  generarNftUrlsAleatorias,
  generarYoutubeUrls,
  generarYoutubeBadUrls,
  generarTracksSpotify,
  generarTracksBadSpotify,
  movies, 
  } = require("../../data/dataPost")
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

  generarPostsAleatorios(2).forEach((formData, index) => {
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
  generarPostsAleatorios(2).forEach((formData, index) => {
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
  generarPostsAleatorios(2).forEach((formData, index) => {
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
  generarPostsAleatorios(2).forEach((formData, i) =>{
     it(`Registrar y Publicar Post con Botón ${i + 1}`, () => {
       post.checkPlaceHolderTitle();

       post.title(formData.postTitle);
       post.addButton(formData.button.buttonText, formData.button.buttonUrl);
       
       post.publish();
       post.checkPublish(formData.postTitle);
     });
  });
  

  /**
   * -------------------------------------------------------------
   *                          NFT OPENSEA
   * -------------------------------------------------------------
   */

  generarNftUrlsAleatorias(2).forEach((nftUrl, i) => {
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

  generarYoutubeUrls(2).forEach((url) => {
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

  generarYoutubeBadUrls(2).forEach((url) => {
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

  generarTracksSpotify(2).forEach((track) => {
    it.only("Registrar y Publicar un nuevo Post con Spotify " + track.name, () => {
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

  generarTracksBadSpotify(2).forEach((track) => {
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
      post.checkPlaceHolderTitle();
      post.title(pelicula.postTitle);
      post.type(pelicula.postContent);
      post.addImage(pelicula.postImage);
      post.type("Miremos un video");
      post.addYoutube(pelicula.postYoutube);
      post.type("Miremos la banda sonora de la pelicula");
      post.addSpotify(pelicula.postSpotify);
      post.publish();
      post.checkPublish(pelicula.postTitle);
    });
  });
});
