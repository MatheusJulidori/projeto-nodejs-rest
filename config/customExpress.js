const express = require('express') //Declaração do express(biblioteca pra criar servidor)
const consign = require('consign') //importa consign, pra poder agrupar todas as rotas que forem criadas dentro dos controllers


module.exports = () => {

    const app = express() //Declaração do app rodando express 

    consign()
        .include('controllers') //inclui a pasta controllers com as rotas
        .into(app) //passa o app para todas as rotas no controller

    return app
}