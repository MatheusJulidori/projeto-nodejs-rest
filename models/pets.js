const conexao = require('../infra/database/conexao')
const uploadDeArquivo = require('../infra/arquivos/uploaddeArquivos')


class Pet {

    adiciona(pet, res) {
        const sql = 'INSERT INTO Pets SET ?'

        uploadDeArquivo(pet.imagem, pet.nome, (erro, novoCaminho) => { //Pega a imagem recebida do pet, passa pela função de upload de arquivos, e salva isso pra poder jogar pro banco
            if (erro) {
                res.status(415).json(erro)
            } else {
                const novoPet = { nome: pet.nome, imagem: novoCaminho }
                conexao.query(sql, novoPet, (erro) => {
                    if (erro) {
                        res.status(400).json(erro)
                    } else {
                        res.status(200).json(novoPet)
                    }
                })
            }
        })


    }

    /*lista(res) {
        const sql = 'SELECT * FROM Atendimentos'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaId(id, res) {
        const sql = `SELECT * FROM Atendimentos WHERE id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0]
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(atendimento)
            }
        })
    }

    altera(id, valores, res) {
        if (valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id })
            }
        })
    }

    apagar(id, res) {
        const sql = `DELETE FROM Atendimentos WHERE id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ id })
            }
        })
    }*/

}

module.exports = new Pet