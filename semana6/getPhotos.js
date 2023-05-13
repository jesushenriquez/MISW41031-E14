const fs = require('fs');
const path = require('path');

const carpetaOrigenGhost3 = path.join(__dirname, 'ghost3', 'cypress', 'cypress', 'screenshots');
const carpetaOrigenGhost5 = path.join(__dirname, 'ghost5', 'cypress', 'cypress', 'screenshots');
const carpetaDestinoResembleGhost3 = path.join(__dirname, 'resemble', 'results', 'ghost3');
const carpetaDestinoResembleGhost5 = path.join(__dirname, 'resemble', 'results', 'ghost5');

function copiarImagenes(carpetaOrigen, carpetaDestino) {
  fs.readdir(carpetaOrigen, (err, archivos) => {
    if (err) {
      console.error(`Error al leer la carpeta ${carpetaOrigen}:`, err);
      return;
    }

    archivos.forEach((archivo) => {
      const origen = path.join(carpetaOrigen, archivo);
      const destino = path.join(carpetaDestino, archivo);

      fs.copyFile(origen, destino, (err) => {
        if (err) {
          console.error(`Error al copiar ${archivo}:`, err);
        } else {
          console.log(`Se copió ${archivo} correctamente.`);
        }
      });
    });
  });
}

function copiarDirectorio(carpetaOrigen, carpetaDestino) {
  fs.mkdirSync(carpetaDestino, { recursive: true });
  const archivos = fs.readdirSync(carpetaOrigen);
  archivos.forEach((archivo) => {
    const origen = path.join(carpetaOrigen, archivo);
    const destino = path.join(carpetaDestino, archivo);
    if (fs.statSync(origen).isDirectory()) {
      copiarDirectorio(origen, carpetaDestino);
    } else {
      fs.copyFileSync(origen, destino);
      console.log(`Se copió ${archivo} correctamente.`);
    }
  });
}

// Copiar imágenes de Ghost3
copiarDirectorio(carpetaOrigenGhost3, carpetaDestinoResembleGhost3, carpetaDestinoResembleGhost3);

// Copiar imágenes de Ghost5
copiarDirectorio(carpetaOrigenGhost5, carpetaDestinoResembleGhost5, carpetaDestinoResembleGhost3);