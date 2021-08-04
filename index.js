//PARA RODAR, DIGITAR "npm start"
const customExpress = require('./config/customExpress')

const app = customExpress()

app.listen(3000, () => console.log('Servidor rodando na porta 3000')) // mandando o app "escutar"(Rodar) na porta 3000, e logo em seguida
    // rodando uma função que printa no console