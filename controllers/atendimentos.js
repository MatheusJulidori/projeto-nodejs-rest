const Atendimento = require('../models/atendimentos');

module.exports = app => { //Exportando o modulo

    app.get('/atendimentos', (req, res) => res.send('rota de atendimentos'))

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento)
        res.send('voce está na rota de atendimentos post')
    })

}