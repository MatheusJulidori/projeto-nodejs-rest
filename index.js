//PARA RODAR, DIGITAR "npm start"


const express = require('express') //Declaração do express(biblioteca pra criar servidor)

const app = new express() //Declaração do app rodando express 

app.listen(3000, () => console.log('Servidor rodando na porta 3000')) // mandando o app "escutar"(Rodar) na porta 3000, e logo em seguida
    // rodando uma função que printa no console

app.get('/', (req, res) => res.send('servidor rodando, tudo ok')) //Criando uma rota get na url '/'(home) e logo em seguida rodando uma função que tem req(requisição do usuario)
    // e res(resposta do servidor) como parametro, e que envia como resposta(res.send) a mensagem 'servidor rodando

app.get('/atendimentos', (req, res) => res.send('rota de atendimentos'))