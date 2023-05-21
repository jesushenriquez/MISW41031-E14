const {
  generarloginDataFake,
  generarloginDataFakeLarge
} = require("../../data/dataSignIn");
const { mezclarAccionesAleatorio } = require("../../support/utils");

const { Login } = require("../../pageObjects/login");
let login = new Login();
describe("Sign-in", function () {
  beforeEach(() => {
    cy.fixture("sign-in.json").as("loginData");
  });

  generarloginDataFake(2).forEach((logindata, index) => {
    it("Intento de inicio de sesion fallido " + index, () => {
      login.visit();

      const acciones = [
        () => login.identificationType(logindata.username),
        () => login.passwordType(logindata.password),
      ];
      mezclarAccionesAleatorio(acciones);
      acciones.forEach((accion) => accion()); 

      login.enviarClick();
      login.checkEnviarIsRetry();
    });

    it("Intento de inicio de sesion solo ingresando email " + index, () => {
      login.visit();
      const acciones = [
        () => login.identificationType(logindata.username),
        () => login.passwordType(''),
      ];
      mezclarAccionesAleatorio(acciones);
      acciones.forEach((accion) => accion()); 
      login.enviarClick();
      login.checkEnviarIsRetry();
    });
    it("Intento de inicio de sesion solo ingresando pass " + index, () => {
      login.visit();
      const acciones = [
        () => login.identificationType(''),
        () => login.passwordType(logindata.password),
      ];
      mezclarAccionesAleatorio(acciones);
      acciones.forEach((accion) => accion()); 
      login.enviarClick();
      login.checkEnviarIsRetry();
    });
  });

  it("Iniciar sesión en el dashboard administrativo con un email y password existente y válidos", function () {
    cy.get("@loginData").then((loginData) => {
      const { LOGIN_USERNAME, LOGIN_PASSWORD } = loginData;
      login.visit();
      const acciones = [
        () => login.identificationType(LOGIN_USERNAME),
        () => login.passwordType(LOGIN_PASSWORD),
      ];
      mezclarAccionesAleatorio(acciones);
      acciones.forEach((accion) => accion());
      login.enviarClick();
      login.checkLoginOk();
    });
  });

generarloginDataFakeLarge(2).forEach((logindata) => {
  it("Iniciar sesión en el dashboard administrativo con un email y password invalidos, introduciendo mucho texto en los campos. ", () => {
    login.visit();
    const acciones = [
      () => login.identificationType(logindata.username),
      () => login.passwordType(logindata.password),
    ];
    mezclarAccionesAleatorio(acciones);
    acciones.forEach((accion) => accion());
    login.enviarClick();
    login.checkEnviarIsRetry();
  });
});
});
