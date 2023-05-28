const { screenshot } = require("../../support/utils");

const { loginDataFake, loginDataFakeLarge } = require("../../data/dataSignIn");
const { Login } = require("../../pageObjects/login");
let login = new Login();
describe("Sign-in", function () {
  beforeEach(() => {
    cy.fixture("sign-in.json").as("loginData");
  });

  loginDataFake.forEach((logindata, index) => {
    it("Intento de inicio de sesion fallido " + index, () => {
      let screen = screenshot.bind(
        null,
        "Add Post",
        `Intento de inicio de sesion fallido ${index}`
      );

      screen("paso1");
      login.visit();
      screen("paso2");
      login.identificationType(logindata.username);
      screen("paso3");
      login.passwordType(logindata.password);
      screen("paso4");
      login.enviarClick();
      screen("paso5");
      login.checkEnviarIsRetry();
      screen("paso6");
    });

    it("Intento de inicio de sesion solo ingresando email " + index, () => {
      let screen = screenshot.bind(
        null,
        "Add Post",
        `Intento de inicio de sesion solo ingresando email ${index}`
      );

      screen("paso1");
      login.visit();
      screen("paso2");
      login.identificationType(logindata.username);
      screen("paso3");
      login.enviarClick();
      screen("paso4");
      login.checkEnviarIsRetry();
      screen("paso5");
    });
    it("Intento de inicio de sesion solo ingresando pass " + index, () => {
      let screen = screenshot.bind(
        null,
        "Add Post",
        `Intento de inicio de sesion solo ingresando pass ${index}`
      );

      screen("paso1");
      login.visit();
      screen("paso2");
      login.passwordType(logindata.password);
      screen("paso3");
      login.enviarClick();
      screen("paso4");
      login.checkEnviarIsRetry();
      screen("paso5");
    });
  });

  it(
    "Iniciar sesión en el dashboard administrativo con un email y password existente y válidos ",
    function () {
      cy.get("@loginData").then((loginData) => {
        let screen = screenshot.bind(
          null,
          "Add Post",
          `Iniciar sesión en el dashboard administrativo con un email y password existente y válidos `
        );

        const { LOGIN_USERNAME, LOGIN_PASSWORD } = loginData;
        login.visit();
        screen("paso1");
        login.identificationType(LOGIN_USERNAME);
        screen("paso2");
        login.passwordType(LOGIN_PASSWORD);
        screen("paso3");
        login.enviarClick();
        screen("paso4");
        login.checkLoginOk();
        screen("paso5");
      });
    }
  );

  loginDataFakeLarge.forEach((logindata, i) => {
    it("Iniciar sesión en el dashboard administrativo con un email y password invalidos, introduciendo mucho texto en los campos. ", () => {
      let screen = screenshot.bind(
        null,
        "Add Post",
        `Intento de inicio de sesion solo ingresando pass`
      );

      login.visit();
      screen("paso1");
      login.identificationType(logindata.username);
      screen("paso2");
      login.passwordType(logindata.password);
      screen("paso3");
      login.enviarClick();
      screen("paso4");
      login.checkEnviarIsRetry();
      screen("paso5");
    });
  });
});
