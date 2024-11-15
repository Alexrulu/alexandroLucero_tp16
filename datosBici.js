const fs = require("fs")
const bicicletasFile = fs.readFileSync("bicicletas.json", "utf-8")

const bicicletas = JSON.parse(bicicletasFile)

module.exports = bicicletas

