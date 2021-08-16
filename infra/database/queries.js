const conexao = require('./conexao');

const executaQuery = (query, parametros = '') => { //valor default de parametro  = '' pq nem sempre tem parametro na query
    return new Promise((resolve, reject) => {
        conexao(query, parametros, (erros, resultados, campos) => {
            if (erros) {
                reject(erros);
            } else {
                resolve(resultados)
            }
        })
    })

}