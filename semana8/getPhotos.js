const fs = require('fs');
const { arch } = require('os');
const path = require('path');

const carpetaOrigenGhost3 = path.join(__dirname, 'ghost5.49.0', 'cypress', 'cypress', 'screenshots');
const carpetaOrigenGhost5 = path.join(__dirname, 'ghost5.40.2', 'cypress', 'cypress', 'screenshots');
const carpetaDestinoResembleGhost3 = path.join(__dirname, 'resemble', 'results', 'ghost5.49.0');
const carpetaDestinoResembleGhost5 = path.join(__dirname, 'resemble', 'results', 'ghost5.40.2');


function copiarDirectorio(carpetaOrigen, carpetaDestino) {
  fs.mkdirSync(carpetaDestino, { recursive: true });
  const archivos = fs.readdirSync(carpetaOrigen);
  archivos.forEach((archivo) => {
    let archivoDestino = archivo.replace(/\s/g, '-');
    const origen = path.join(carpetaOrigen, archivo);
    const destino = path.join(carpetaDestino, archivoDestino);
    if (fs.statSync(origen).isDirectory()) {
      copiarDirectorio(origen, carpetaDestino);
    } else {
      fs.copyFileSync(origen, destino);
      console.log(`Se copió ${archivoDestino} correctamente.`);
    }
  });
}

// Copiar imágenes de Ghost3
copiarDirectorio(carpetaOrigenGhost3, carpetaDestinoResembleGhost3, carpetaDestinoResembleGhost3);

// Copiar imágenes de Ghost5
copiarDirectorio(carpetaOrigenGhost5, carpetaDestinoResembleGhost5, carpetaDestinoResembleGhost3);