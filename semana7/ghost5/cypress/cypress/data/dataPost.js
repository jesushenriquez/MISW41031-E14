const { faker } = require("@faker-js/faker");

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

let movies = [
  {
    postTitle: "Cadena perpetua",
    postContent:
      "Dos hombres encarcelados establecen un fuerte vínculo a lo largo de los años, encontrando consuelo y redención a través de actos de bondad y humanidad.",
    postImage: "https://www.ecartelera.com/carteles/5600/5676/003_m.jpg",
    postYoutube: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    postSpotify: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3",
  },
  {
    postTitle: "El Padrino",
    postContent:
      "El patriarca envejecido de una familia criminal traslada el control de su imperio clandestino a su hijo reacio.",
    postImage:
      "https://cdn.sincroguia.tv/uploads/programs/e/l/-/el-padrino-poster-2981_SPA-17_V.jpg",
    postYoutube: "https://www.youtube.com/watch?v=sY1S34973zA",
    postSpotify: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
  },
  {
    postTitle: "El Caballero de la Noche",
    postContent:
      "Cuando el villano conocido como el Joker siembra el caos y la destrucción en Gotham, Batman se enfrenta a una de las pruebas más grandes, tanto psicológicas como físicas, de su capacidad para luchar contra la injusticia.",
    postImage:
      "https://irs.www.warnerbroslatino.com/keyart-jpeg/movies/media/browser/darkknight_v_dd_ka_tt_2160x2880_300dpi_mx_9a50087f_1.jpeg",
    postYoutube: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    postSpotify: "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS",
  },
  {
    postTitle: "Pulp Fiction",
    postContent:
      "Las vidas de dos asesinos a sueldo, un boxeador, la esposa de un gángster y un par de ladrones de restaurantes se entrelazan en cuatro historias de violencia y redención.",
    postImage: "https://www.miramax.com/assets/Pulp-Fiction1.png",
    postYoutube: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
    postSpotify: "https://open.spotify.com/track/6WrI0LAC5M1Rw2MnX2ZvEg",
  },
  {
    postTitle: "El club de la pelea",
    postContent:
      "Un trabajador de oficina con insomnio y un fabricante de jabón sin preocupaciones forman un club de pelea clandestino que evoluciona hacia algo mucho más grande.",
    postImage:
      "https://cdn.colombia.com/cine/2012/11/97c52f3ce5084a4da84fa14ace6af697.png",
    postYoutube: "https://www.youtube.com/watch?v=SUXWAEX2jlg",
    postSpotify: "https://open.spotify.com/track/34gCuhDGsG4bRPIf9bb02f",
  },
  {
    postTitle: "Forrest Gump",
    postContent:
      "Los acontecimientos históricos como las presidencias de Kennedy y Johnson, la Guerra de Vietnam, el escándalo de Watergate y otros se desarrollan a través de la perspectiva de un hombre con un coeficiente intelectual bajo.",
    postImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Jd1X6DW6UUypmQF0VaTt5aaB9r5enfjwzg&usqp=CAU",
    postYoutube: "https://www.youtube.com/watch?v=bLvqoHBptjg",
    postSpotify: "https://open.spotify.com/track/2dpaYNEQHiRxtZbfNsse99",
  },
  {
    postTitle: "El Señor de los Anillos: La Comunidad del Anillo",
    postContent:
      "Un hobbit tímido y ocho compañeros se embarcan en un viaje para destruir el poderoso Anillo Único y salvar a la Tierra Media del Señor Oscuro Sauron.",
    postImage:
      "https://assets.cinepolisklic.com/cmsklicia/movieimages/el-senor-de-los-anillos-la-comunidad-del-anillo/poster_originalsize_250X375.jpg",
    postYoutube: "https://www.youtube.com/watch?v=V75dMMIW2B4",
    postSpotify: "https://open.spotify.com/track/1rgnBhdG2JDFTbYkYRZAku",
  },
  {
    postTitle: "El Rey León",
    postContent:
      "El joven león Simba, heredero de su padre, debe superar la adversidad y reclamar su lugar legítimo como rey de las Tierras del Reino después de la muerte de su padre.",
    postImage:
      "https://sm.ign.com/ign_es/movie/e/el-rey-leo/el-rey-leon_114j.jpg",
    postYoutube: "https://www.youtube.com/watch?v=4sj1MT05lAA",
    postSpotify: "https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqLf",
  },
  {
    postTitle: "Gladiador",
    postContent:
      "Un general romano es traicionado y su familia asesinada por el corrupto emperador Cómodo. Obligado a convertirse en gladiador, busca venganza contra Cómodo y restaurar el honor de Roma.",
    postImage:
      "https://es.web.img3.acsta.net/medias/nmedia/18/70/92/02/20149073.jpg",
    postYoutube: "https://www.youtube.com/watch?v=owK1qxDselE",
    postSpotify: "https://open.spotify.com/track/2Fxmhks0bxGSBdJ92vM42m",
  },
  {
    postTitle: "Interestelar",
    postContent:
      "Un grupo de exploradores espaciales se embarca en un viaje interestelar para encontrar un nuevo hogar para la humanidad debido a la inminente destrucción de la Tierra.",
    postImage:
      "https://m.media-amazon.com/images/I/91vmAIK3d5L._AC_SL1500_.jpg",
    postYoutube: "https://www.youtube.com/watch?v=0vxOhd4qlnA",
    postSpotify: "https://open.spotify.com/track/7wGoVu4Dady5GV0Sv4UIsx",
  },
];

function generarPostAleatorio() {
  return {
    postTitle: faker.helpers.arrayElement(formDataSet.map((f) => f.postTitle)),
    postContent: faker.lorem.paragraphs(5),
    postImage: faker.image.url(800, 600, "abstract"),
    postYoutube: faker.helpers.arrayElement(youtubeUrls.map((y) => y.url)),
    postSpotify: faker.helpers.arrayElement(tracksSpotify.map((s) => s.url)),
    button: {
      buttonText: faker.lorem.sentence(),
      buttonUrl: faker.internet.url(),
    },
  };
}
function generarPostsAleatorios(cantidad) {
  let posts = [];
  for (let i = 0; i < cantidad; i++) {
    posts.push(generarPostAleatorio());
  }
  return posts;
}

function generarUrlAleatoria() {
  const baseUrl = "https://opensea.io/assets/";
  const contractIds = [
    "0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b",
    "0xc7ad46e0b8a400bb3c915120d284aafba8fc4735",
    "0x2953399124f0cbb46d2cbacd8a89cf0599974963",
    "0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756",
    "0x7dcb6444d66c937f4ac424c81e6203adc730ef79",
    "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270",
    "0x5f525a591ae6d22d8d8d9f6d0d37e0b0d01f59c2",
    "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852",
    "0x6cc07469a04a0ecefbc6b7d3799c3b0c7ca6a1c3",
    "0xbeefba56c2fd60a6dbb55efc93f19e956b69d3ae",
  ];
  const tokenId = Math.floor(Math.random() * 100000);

  const randomContractId = faker.helpers.arrayElement(contractIds);
  const url = `${baseUrl}${randomContractId}/${tokenId}`;

  return url;
}

function generarNftUrlsAleatorias(cantidad) {
  let urls = [];
  for (let i = 0; i < cantidad; i++) {
    urls.push(generarUrlAleatoria());
  }
  return urls;
}



module.exports = {
  movies,
  tracksBadSpotify,
  tracksSpotify,
  youtubeBadUrls,
  youtubeUrls,
  nftUrls,
  formDataSet,
  generarPostsAleatorios,
  generarNftUrlsAleatorias,
};
