function saluta(nome) {
    console.log(`Ciao ${nome}`);
}

const os = require('os')

console.log(os.uptime());


module.exports = saluta;