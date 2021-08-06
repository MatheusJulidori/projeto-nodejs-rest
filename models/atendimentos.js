const conexao = require('../infra/conexao')

class Atendimento {

    adiciona(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?' // Outra forma seria escrever direto
            //conexao.query('INSERT INTO Atendimentos (cliente, pet, status, servico) VALUES ('${cliente}','${pet}','${status}','${servico}')', (erro, resultados) => {
        conexao.query(sql, atendimento, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

}

module.exports = new Atendimento