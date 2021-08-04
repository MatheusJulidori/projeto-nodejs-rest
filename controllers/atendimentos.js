module.exports = app => { //Exportando o modulo

    app.get('/atendimentos', (req, res) => res.send('rota de atendimentos'))

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('voce está na rota de atendimentos post')
    })

}