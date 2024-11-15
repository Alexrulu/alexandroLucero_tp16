const bicicletas = require("./datosBici")

const dhBici = {
    bicicletas,
    buscarBici: function (id) {
        if (id >= 1 && id <= bicicletas.length) {
            return bicicletas.filter(bici => bici.id === id)
        } else {
            return null
        }
    },
    venderBici: function (id) {
        if (id >= 1 && id <= bicicletas.length) {
            bicicletas.filter(bici => {
                if (bici.id === id) {
                    bici.vendida = true
                }
            })
            return `Bicicleta vendida, id: ${id}`
        } else {
            return "Bicicleta no encontrada"
        }
    },
    biciParaLaVenta: function () {
        console.log("Bicicletas disponibles:")
        return bicicletas.filter(bici => bici.vendida === false)
    },
    totalDeVentas: function () {
        const vendidas = bicicletas.filter(bici => bici.vendida === true)
        console.log("Monto generado por ventas:")
        return vendidas.reduce((total, bici) => total + bici.precio, 0)
    },
    aumentoBici: function(porcentaje) {
        bicicletas.map(bici => {
            bici.precio = bici.precio * (1 + (porcentaje * 0.01))
        })
        return bicicletas
    },
    biciPorRodado: function(rodado) {
        return bicicletas.filter(bici => bici.rodado === rodado)
    },
    listarTodasLasBicis: function () {
        bicicletas.forEach(bici => {
            console.log(bici)
        })
    }    
}



//console.log(bicicletas) //en caso de querer ver todas por defecto.

//console.log(dhBici.buscarBici(1))
//console.log(dhBici.venderBici(1))
//console.log(dhBici.buscarBici(1)) //para testear la funcion venderBici()
//console.log(dhBici.biciParaLaVenta())
//console.log(dhBici.totalDeVentas())
//console.log(dhBici.aumentoBici(50)) //Escribe el porcentaje de aumento 0-100
//console.log(dhBici.buscarBici(1)) //para testear la funcion aumentoBici()
//console.log(dhBici.biciPorRodado(16))
//dhBici.listarTodasLasBicis()
