module.exports = app => { //Exportando o modulo

    app.get('/atendimentos', (req, res) => res.send('rota de atendimentos'))

}