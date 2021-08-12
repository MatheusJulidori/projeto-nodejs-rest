const Pet = require('../models/pets');

module.exports = app => { //Exportando o modulo


    //CREATE
    app.post('/pet', (req, res) => {
        const pet = req.body
        Pet.adiciona(pet, res) //chamando metodo adiciona do models, passando o atendimento que foi criado com a req.body e a res
    })

    /*
    //READ
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Atendimento.buscaId(id, res)
    })

    //UPDATE
    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    //DELETE
    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.apagar(id, res)
    })*/



}