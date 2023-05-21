const { faker, random } = require("@faker-js/faker");

let loginDataFake = [
  { username: "usuario1", password: "contrasena1" },
  { username: "usuario2", password: "contrasena2" },
  { username: "usuario3", password: "contrasena3" },
];
const loginDataFakeLarge = [
  {
    username:
      "LoremipsumdolorsitametconsecteturadipiscingelitPhasellusauctoripsumutloremeuismoddapibusIntegerfacilisisquam",
    password: "P@ssw0rd1WithLongCharsAndNumbers!",
  },
  {
    username:
      "UtenimadminimveniamquisnostrudexercitationullamcolaborisnisiutaliquipexeacommodoconsequatDuisauteiruredolorin",
    password: "Secur3P@ssw0rdW!thSymbolsAndUpperCase",
  },
  {
    username:
      "SeddoeiusmodtemporincididuntlaboreetdoloremagnaaliquaUtadminimveniamquisnostrudexercitationullamcolaborisnisi",
    password: "AVeryL0ngP@ssw0rdWithSpecialCharsAndNumbers#",
  },
];

function loginDataFakeRandom(){
    return {
      username: faker.internet.email(),
      password: faker.internet.password(),
    };
}
function generarloginDataFake(cantidad) {
  let movies = [];
  for (let i = 0; i < cantidad; i++) {
    movies.push(loginDataFakeRandom());
  }
  return movies;
}
function loginDataFakeLargeRandom(){
    return {
      username: faker.lorem.paragraphs(5).replace(/\s/g, ""),
      password: faker.lorem.paragraphs(5).replace(/\s/g, ""),
    };
}
function generarloginDataFakeLarge(cantidad) {
  let movies = [];
  for (let i = 0; i < cantidad; i++) {
    movies.push(loginDataFakeLargeRandom());
  }
  return movies;
}
module.exports = {
  loginDataFake,
  loginDataFakeLarge,
  generarloginDataFake,
  generarloginDataFakeLarge,
};