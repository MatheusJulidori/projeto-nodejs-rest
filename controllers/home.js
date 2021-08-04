module.exports = app => {

    app.get('/', (req, res) => res.send('servidor rodando, tudo ok')) //Criando uma rota get na url '/'(home) e logo em seguida rodando uma função que tem req(requisição do usuario)
        // e res(resposta do servidor) como parametro, e que envia como resposta(res.send) a mensagem 'servidor rodando
}