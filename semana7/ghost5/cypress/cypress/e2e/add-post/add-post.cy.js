const { signIn } = require("../../support/utils");

describe("Add Post", function () {
  before(() => {});

  beforeEach(() => {
    signIn();
    cy.visit("http://localhost:2368/ghost/#/editor/post");
  });

  const formDataSet = [
    {
      postTitle: "Introducción a la Inteligencia Artificial",
      postContent:
        "En esta publicación, exploramos los conceptos básicos de la Inteligencia Artificial y sus aplicaciones en diversos campos.",
      postImage: "https://picsum.photos/800/600?image=123",
      button: {
        buttonText: "Sitio web de IA",
        buttonUrl: "https://example.com/ia",
      },
    },
    {
      postTitle: "Últimas tendencias en desarrollo web",
      postContent:
        "Descubre las últimas tendencias y tecnologías en el mundo del desarrollo web, incluyendo React, Vue.js y GraphQL.",
      postImage: "https://picsum.photos/800/600?image=456",
      button: {
        buttonText: "Sitio web de desarrollo web",
        buttonUrl: "https://example.com/desarrollo-web",
      },
    },
    {
      postTitle: "Seguridad en la nube: Mejores prácticas",
      postContent:
        "Aprende sobre las mejores prácticas para garantizar la seguridad de tus datos en entornos de computación en la nube.",
      postImage: "https://picsum.photos/800/600?image=789",
      button: {
        buttonText: "Sitio web de seguridad en la nube",
        buttonUrl: "https://example.com/seguridad-nube",
      },
    },
    {
      postTitle: "Machine Learning aplicado a la detección de fraudes",
      postContent:
        "Exploramos cómo el Machine Learning puede ser utilizado para detectar y prevenir fraudes en transacciones financieras.",
      postImage: "https://picsum.photos/800/600?image=234",
      button: {
        buttonText: "Sitio web de Machine Learning",
        buttonUrl: "https://example.com/machine-learning",
      },
    },
    {
      postTitle: "Blockchain: Más allá de las criptomonedas",
      postContent:
        "Descubre las aplicaciones más allá de las criptomonedas que la tecnología blockchain ofrece, como la trazabilidad de productos y la gestión de identidad.",
      postImage: "https://picsum.photos/800/600?image=567",
      button: {
        buttonText: "Sitio web de Blockchain",
        buttonUrl: "https://example.com/blockchain",
      },
    },
    {
      postTitle: "Desarrollo de aplicaciones móviles con Flutter",
      postContent:
        "Aprende cómo desarrollar aplicaciones móviles multiplataforma utilizando Flutter, un framework de código abierto desarrollado por Google.",
      postImage: "https://picsum.photos/800/600?image=890",
      button: {
        buttonText: "Sitio web de Flutter",
        buttonUrl: "https://example.com/flutter",
      },
    },
    {
      postTitle: "Ciberseguridad en un mundo hiperconectado",
      postContent:
        "Exploramos los desafíos y medidas de seguridad necesarias en un mundo cada vez más interconectado y dependiente de la tecnología.",
      postImage: "https://picsum.photos/800/600?image=345",
      button: {
        buttonText: "Sitio web de ciberseguridad",
        buttonUrl: "https://example.com/ciberseguridad",
      },
    },
    {
      postTitle: "Automatización de pruebas con Selenium",
      postContent:
        "Descubre cómo utilizar Selenium para automatizar pruebas en aplicaciones web y mejorar la calidad de tus desarrollos.",
      postImage: "https://picsum.photos/800/600?image=678",
      button: {
        buttonText: "Sitio web de Selenium",
        buttonUrl: "https://example.com/selenium",
      },
    },
    {
      postTitle: "Big Data: Conceptos y aplicaciones",
      postContent:
        "En esta publicación, exploramos el concepto de Big Data y sus aplicaciones en la toma de decisiones y el análisis de datos a gran escala.",
      postImage: "https://picsum.photos/800/600?image=901",
      button: {
        buttonText: "Sitio web de Big Data",
        buttonUrl: "https://example.com/big-data",
      },
    },
    {
      postTitle:
        "UX Design: Mejores prácticas para una experiencia de usuario excepcional",
      postContent:
        "Aprende las mejores prácticas y principios del diseño de experiencia de usuario (UX) para crear interfaces intuitivas y atractivas.",
      postImage: "https://picsum.photos/800/600?image=432",
      button: {
        buttonText: "Sitio web de UX Design",
        buttonUrl: "https://example.com/ux-design",
      },
    },
  ];

  const nftUrls = [
    "https://opensea.io/assets/0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b/1",
    "https://opensea.io/assets/0xc7ad46e0b8a400bb3c915120d284aafba8fc4735/42",
    "https://opensea.io/assets/0x2953399124f0cbb46d2cbacd8a89cf0599974963/115",
    "https://opensea.io/assets/0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756/8888",
    "https://opensea.io/assets/0x7dcb6444d66c937f4ac424c81e6203adc730ef79/3456",
    "https://opensea.io/assets/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/42",
    "https://opensea.io/assets/0x5f525a591ae6d22d8d8d9f6d0d37e0b0d01f59c2/777",
    "https://opensea.io/assets/0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852/8080",
    "https://opensea.io/assets/0x6cc07469a04a0ecefbc6b7d3799c3b0c7ca6a1c3/999",
    "https://opensea.io/assets/0xbeefba56c2fd60a6dbb55efc93f19e956b69d3ae/12345",
  ];

  const youtubeUrls = [
    {
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      title: "Rick Astley - Never Gonna Give You Up",
    },
    {
      url: "https://www.youtube.com/watch?v=3tmd-ClpJxA",
      title: "Queen - Bohemian Rhapsody",
    },
    {
      url: "https://www.youtube.com/watch?v=YQHsXMglC9A",
      title: "Imagine Dragons - Believer",
    },
    {
      url: "https://www.youtube.com/watch?v=ru0K8uYEZWw",
      title: "Ed Sheeran - Shape of You",
    },
    {
      url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
      title: "Maroon 5 - Sugar",
    },
    {
      url: "https://www.youtube.com/watch?v=ktvTqknDobU",
      title: "Coldplay - Viva La Vida",
    },
    {
      url: "https://www.youtube.com/watch?v=YQHsXMglC9A",
      title: "Imagine Dragons - Thunder",
    },
    {
      url: "https://www.youtube.com/watch?v=8PTDv_szmL0",
      title: "The Weeknd - Blinding Lights",
    },
    {
      url: "https://www.youtube.com/watch?v=4NRXx6U8ABQ",
      title: "Adele - Rolling in the Deep",
    },
    {
      url: "https://www.youtube.com/watch?v=3tmd-ClpJxA",
      title: "Queen - Don't Stop Me Now",
    },
  ];
  const youtubeBadUrls = [
    {
      title: "Resumen de El arte de amar",
      url: "https://www.youtube.com/watch?v=1ukzldeYBOE&feature=em-share_video_user",
    },
    {
      title: "Resumen de Más allá del bien y del mal",
      url: "https://www.youtube.com/watch?v=Xl8dgzoZehk&feature=em-share_video_user",
    },
    {
      title: "Resumen de Así habló Zaratustra",
      url: "https://www.youtube.com/watch?v=rrtPLj71mmk&feature=em-share_video_user",
    },
    {
      title: "Resumen de La república",
      url: "https://www.youtube.com/watch?v=saJd42R4ZSE&feature=em-share_video_user",
    },
    {
      title: "Resumen de Meditaciones",
      url: "https://www.youtube.com/watch?v=9otI7-HwPDo",
    },
  ];

  const tracksSpotify = [
    {
      name: "Shape of You",
      artist: "Ed Sheeran",
      url: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3",
      duration: 233.713,
      album: "÷ (Deluxe)",
      genre: "Pop",
      popularity: 100,
      albumCover:
        "https://i.scdn.co/image/ab67616d0000b273e8deef5ff3d4fbedcfa5603a",
    },
    {
      name: "Blinding Lights",
      artist: "The Weeknd",
      url: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
      duration: 201.573,
      album: "After Hours",
      genre: "R&B",
      popularity: 99,
      albumCover:
        "https://i.scdn.co/image/ab67616d0000b27330e295f326e07a4bea50dfe2",
    },
    {
      name: "Uptown Funk",
      artist: "Mark Ronson ft. Bruno Mars",
      url: "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS",
      duration: 269.866,
      album: "Uptown Special",
      genre: "Pop",
      popularity: 98,
      albumCover:
        "https://i.scdn.co/image/ab67616d0000b273430e8548edfbc79ad8aa26bb",
    },
    {
      name: "Don't Start Now",
      artist: "Dua Lipa",
      url: "https://open.spotify.com/track/6WrI0LAC5M1Rw2MnX2ZvEg",
      duration: 183.267,
      album: "Future Nostalgia",
      genre: "Pop",
      popularity: 97,
      albumCover:
        "https://i.scdn.co/image/ab67616d0000b273dc8d3ee79b3d1adab7862e8d",
    },
    {
      name: "Thinking out Loud",
      artist: "Ed Sheeran",
      url: "https://open.spotify.com/track/34gCuhDGsG4bRPIf9bb02f",
      duration: 281.853,
      album: "x (Deluxe Edition)",
      genre: "Pop",
      popularity: 96,
      albumCover:
        "https://i.scdn.co/image/ab67616d0000b273487fc887e1c1f8b2f625d95c",
    },
    {
      name: "Happier",
      artist: "Marshmello ft. Bastille",
      url: "https://open.spotify.com/track/2dpaYNEQHiRxtZbfNsse99",
      duration: 214.289,
      album: "Happier",
      genre: "Dance",
      popularity: 95,
      albumCover:
        "https://i.scdn.co/image/ab67616d0000b27332b66606d8a75f5582a19463",
    },
    {
      name: "Dance Monkey",
      artist: "Tones and I",
      url: "https://open.spotify.com/track/1rgnBhdG2JDFTbYkYRZAku",
      duration: 209.755,
      album: "The Kids Are Coming",
      genre: "Pop",
      popularity: 94,
      albumCover:
        "https://i.scdn.co/image/ab67616d0000b273a5a230c3e8d32281b569f4cc",
    },
    {
      name: "Someone You Loved",
      artist: "Lewis Capaldi",
      url: "https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqLf",
      duration: 182.615,
      album: "Divinely Uninspired To A Hellish Extent",
      genre: "Pop",
      popularity: 93,
      albumCover:
        "https://i.scdn.co/image/ab67616d0000b273541c4ee5ac9a5ce462756df2",
    },
    {
      name: "Bad Guy",
      artist: "Billie Eilish",
      url: "https://open.spotify.com/track/2Fxmhks0bxGSBdJ92vM42m",
      duration: 194.088,
      album: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?",
      genre: "Pop",
      popularity: 92,
      albumCover:
        "https://i.scdn.co/image/ab67616d0000b273c617e18cc06baca0fc1ec32c",
    },
    {
      name: "Rockstar",
      artist: "Post Malone ft. 21 Savage",
      url: "https://open.spotify.com/track/7wGoVu4Dady5GV0Sv4UIsx",
      duration: 218.147,
      album: "beerbongs & bentleys",
      genre: "Hip-Hop",
      popularity: 91,
      albumCover:
        "https://i.scdn.co/image/ab67616d0000b2731c2aa7fdd5bdf301b07e854f",
    },
  ];
  const tracksBadSpotify = [
    {
      name: "Shape of You",
      artist: "Ed Sheeran",
      url: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI",
      duration: 233.713,
      album: "÷ (Deluxe)",
      genre: "Pop",
      popularity: 100,
      albumCover:
        "https://i.scdn.co/image/ab67616d0000b273e8deef5ff3d4fbedcfa5603a",
    },
    {
      name: "Blinding Lights",
      artist: "The Weeknd",
      url: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3",
      duration: 201.573,
      album: "After Hours",
      genre: "R&B",
      popularity: 99,
      albumCover:
        "https://i.scdn.co/image/ab67616d0000b27330e295f326e07a4bea50dfe2",
    },
    {
      name: "Uptown Funk",
      artist: "Mark Ronson ft. Bruno Mars",
      url: "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeM",
      duration: 269.866,
      album: "Uptown Special",
      genre: "Pop",
      popularity: 98,
      albumCover:
        "https://i.scdn.co/image/ab67616d0000b273430e8548edfbc79ad8aa26bb",
    },
    {
      name: "Don't Start Now",
      artist: "Dua Lipa",
      url: "https://open.spotify.com/track/6WrI0LAC5M1Rw2MnX2ZvE",
      duration: 183.267,
      album: "Future Nostalgia",
      genre: "Pop",
      popularity: 97,
      albumCover:
        "https://i.scdn.co/image/ab67616d0000b273dc8d3ee79b3d1adab7862e8d",
    },
    {
      name: "Thinking out Loud",
      artist: "Ed Sheeran",
      url: "https://open.spotify.com/track/34gCuhDGsG4bRPIf9bb02",
      duration: 281.853,
      album: "x (Deluxe Edition)",
      genre: "Pop",
      popularity: 96,
      albumCover:
        "https://i.scdn.co/image/ab67616d0000b273487fc887e1c1f8b2f625d95c",
    },
    {
      name: "Happier",
      artist: "Marshmello ft. Bastille",
      url: "https://open.spotify.com/track/2dpaYNEQHiRxtZbfNsse9",
      duration: 214.289,
      album: "Happier",
      genre: "Dance",
      popularity: 95,
      albumCover:
        "https://i.scdn.co/image/ab67616d0000b27332b66606d8a75f5582a19463",
    },
    {
      name: "Dance Monkey",
      artist: "Tones and I",
      url: "https://open.spotify.com/track/1rgnBhdG2JDFTbYkYRZAk",
      duration: 209.755,
      album: "The Kids Are Coming",
      genre: "Pop",
      popularity: 94,
      albumCover:
        "https://i.scdn.co/image/ab67616d0000b273a5a230c3e8d32281b569f4cc",
    },
    {
      name: "Someone You Loved",
      artist: "Lewis Capaldi",
      url: "https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqL",
      duration: 182.615,
      album: "Divinely Uninspired To A Hellish Extent",
      genre: "Pop",
      popularity: 93,
      albumCover:
        "https://i.scdn.co/image/ab67616d0000b273541c4ee5ac9a5ce462756df2",
    },
    {
      name: "Bad Guy",
      artist: "Billie Eilish",
      url: "https://open.spotify.com/track/2Fxmhks0bxGSBdJ92vM42",
      duration: 194.088,
      album: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?",
      genre: "Pop",
      popularity: 92,
      albumCover:
        "https://i.scdn.co/image/ab67616d0000b273c617e18cc06baca0fc1ec32c",
    },
    {
      name: "Rockstar",
      artist: "Post Malone ft. 21 Savage",
      url: "https://open.spotify.com/track/7wGoVu4Dady5GV0Sv4UIs",
      duration: 218.147,
      album: "beerbongs & bentleys",
      genre: "Hip-Hop",
      popularity: 91,
      albumCover:
        "https://i.scdn.co/image/ab67616d0000b2731c2aa7fdd5bdf301b07e854f",
    },
  ];

  /**
   * -------------------------------------------------------------
   *                    POST REGISTRO Y PUBLICACION
   * -------------------------------------------------------------
   */
  for (let i = 0; i < formDataSet.length; i++) {
    const formData = formDataSet[i];
    const testName = `Registro y Publicación: ${formData.postTitle}`;

    it(testName, function () {
      cy.get("textarea[data-test-editor-title-input]")
        .invoke("attr", "placeholder")
        .should("contain", "Post title");

      cy.get("textarea[data-test-editor-title-input]").type(formData.postTitle);

      cy.get('div[data-placeholder="Begin writing your post..."]').type(
        formData.postContent
      );

      cy.get(
        "header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger"
      ).click();

      cy.get("div > div > div.gh-publish-cta > button").click();

      cy.get('button[data-test-button="confirm-publish"]').click();

      cy.contains(".gh-post-bookmark-title", formData.postTitle);
    });
  }
  /**
   * -------------------------------------------------------------
   *                    POST REGISTRO Y SCHEDULE
   * -------------------------------------------------------------
   */
  for (let i = 0; i < formDataSet.length; i++) {
    const formData = formDataSet[i];
    const testName = `Registro y Publicación: ${formData.postTitle}`;

    it(testName, function () {
      cy.get("textarea[data-test-editor-title-input]")
        .invoke("attr", "placeholder")
        .should("contain", "Post title");
      cy.get("textarea[data-test-editor-title-input]").type(formData.postTitle);
      cy.get('div[data-placeholder="Begin writing your post..."]').type(
        formData.postContent
      );
      cy.get(
        "header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger"
      ).click();
      cy.get("button.gh-publish-setting-title").last().click();
      cy.contains("Schedule for later").parent("div.gh-radio").click();
      cy.get(
        "div > div > div.gh-publish-settings > div.gh-publish-setting.last > button > div > span"
      ).contains("In 10 minutes");
      cy.get("div > div > div.gh-publish-cta > button").click();
      cy.get('button[data-test-button="confirm-publish"]').click();
      cy.contains(".gh-post-bookmark-title", formData.postTitle);
    });
  }
  /**
   * -------------------------------------------------------------
   *                          IMAGEN
   * -------------------------------------------------------------
   */
  formDataSet.forEach((formData, index) => {
    it(`Registrar y Publicar un nuevo Post con Imagen (${index + 1})`, () => {
      cy.get("textarea[data-test-editor-title-input]")
        .invoke("attr", "placeholder")
        .should("contain", "Post title");

      cy.get("textarea[data-test-editor-title-input]").type(formData.postTitle);

      cy.get('div[data-placeholder="Begin writing your post..."]').type(
        `/image ${formData.postImage}{enter}`
      );

      cy.get(
        "header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger"
      ).click();

      cy.get("div > div > div.gh-publish-cta > button").click();

      cy.get('button[data-test-button="confirm-publish"]').click();

      cy.contains(".gh-post-bookmark-title", formData.postTitle);
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
      cy.get("textarea[data-test-editor-title-input]")
        .invoke("attr", "placeholder")
        .should("contain", "Post title");
      cy.get("textarea[data-test-editor-title-input]").type(formData.postTitle);
      cy.get('div[data-placeholder="Begin writing your post..."]').type(
        "/button{enter}"
      );
      cy.get(
        'input.gh-input#button-text-input[placeholder="Add button text"]'
      ).type(formData.button.buttonText);
      cy.get(
        'input.gh-input-with-select-input[placeholder="https://yoursite.com/#/portal/signup/"]'
      ).type(formData.button.buttonUrl);
      cy.get(
        "header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger"
      ).click();
      cy.get("div > div > div.gh-publish-cta > button").click();
      cy.get('button[data-test-button="confirm-publish"]').click();
      cy.contains(".gh-post-bookmark-title", formData.postTitle);
    });
  }

  /**
   * -------------------------------------------------------------
   *                          NFT OPENSEA
   * -------------------------------------------------------------
   */

  nftUrls.forEach((nftUrl, i) => {
    it("Registrar y Publicar un nuevo Post con nft " + i, () => {
      cy.get("textarea[data-test-editor-title-input]")
        .invoke("attr", "placeholder")
        .should("contain", "Post title");
      cy.get("textarea[data-test-editor-title-input]").type(
        "Titulo Post con NFT " + i
      );
      cy.get('div[data-placeholder="Begin writing your post..."]').type(
        `/nft ${nftUrl}{enter}`
      );
      cy.contains("span.mr3", "There was an error when parsing the URL.");
    });
  });
  /**
   * -------------------------------------------------------------
   *                          YOUTUBE
   * -------------------------------------------------------------
   */

  youtubeUrls.forEach((url) => {
    it("Registrar y Publicar un nuevo Post con youtube " + url.title, () => {
      cy.get("textarea[data-test-editor-title-input]")
        .invoke("attr", "placeholder")
        .should("contain", "Post title");
      cy.get("textarea[data-test-editor-title-input]").type(
        `Post de ${url.title}`
      );
      cy.get('div[data-placeholder="Begin writing your post..."]').type(
        `/youtube ${url.url}{enter}`
      );
      cy.get(
        "header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger"
      ).click();
      cy.get("div > div > div.gh-publish-cta > button").click();
      cy.get('button[data-test-button="confirm-publish"]').click();
      cy.contains(".gh-post-bookmark-title", `Post de ${url.title}`);
    });
  });
  /**
   * -------------------------------------------------------------
   *                          YOUTUBE BAD
   * -------------------------------------------------------------
   */

  youtubeBadUrls.forEach((url) => {
    it("Registrar  un nuevo Post con url mal youtube " + url.title, () => {
      cy.get("textarea[data-test-editor-title-input]")
        .invoke("attr", "placeholder")
        .should("contain", "Post title");
      cy.get("textarea[data-test-editor-title-input]").type(
        `Post de ${url.title}`
      );
      cy.get('div[data-placeholder="Begin writing your post..."]').type(
        `/youtube ${url.url}{enter}`
      );
      cy.contains("span.mr3", "There was an error when parsing the URL.");
    });
  });

  /**
   * -------------------------------------------------------------
   *                          SPOTIFY
   * -------------------------------------------------------------
   */

  tracksSpotify.forEach((track) => {
    it("Registrar y Publicar un nuevo Post con Spotify "+track.name, () => {
      cy.get("textarea[data-test-editor-title-input]")
        .invoke("attr", "placeholder")
        .should("contain", "Post title");
      cy.get("textarea[data-test-editor-title-input]").type(
        `Post of ${track.name} by ${track.artist} (${track.genre})`
      );
      cy.get('div[data-placeholder="Begin writing your post..."]').type(
        `/Spotify ${track.url}{enter}`
      );
      cy.get(
        "header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger"
      ).click();
      cy.get("div > div > div.gh-publish-cta > button").click();
      cy.get('button[data-test-button="confirm-publish"]').click();
      cy.contains(
        ".gh-post-bookmark-title",
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
    it("Registrar y Publicar un nuevo Post con Spotify que sale mal "+ track.name, () => {
      cy.get("textarea[data-test-editor-title-input]")
        .invoke("attr", "placeholder")
        .should("contain", "Post title");
      cy.get("textarea[data-test-editor-title-input]").type(
        `Post of ${track.name} by ${track.artist} (${track.genre})`
      );
      cy.get('div[data-placeholder="Begin writing your post..."]').type(
        `/Spotify ${track.url}{enter}`
      );
      cy.contains("span.mr3", "There was an error when parsing the URL.");
    });
  });
});
