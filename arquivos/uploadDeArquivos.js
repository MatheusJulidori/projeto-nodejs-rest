const fs = require('fs'); // FS = File System , faremos upload atraves de um buffer

/*fs.readFile('./assets/1.jpg', (erro, buffer) => { // le o arquivo e transforma em bytes
    if (erro) {
        console.log(erro)
    } else {
        console.log('inicio do buffer')
        console.log(buffer)
        console.log('fim do buffer')

        fs.writeFile('./assets/2.jpg', buffer, (erro) => {
                console.log('arquivo criado')
            }) // cria um arquivo chamado 2.jpg baseado nos bytes do buffer
    }
})*/

// NO MODO ACIMA, BUFFER É SINCRONO, ELE INTERROMPE A EXECUÇÃO DE CÓDIGOS, ENTÃO USAREMOS STREAM 

fs.createReadStream('./assets/1.jpg') // Uma stream funciona através da emissão de eventos
    .pipe(fs.createWriteStream('./assets/2.jpg')) // Cria uma stream e pega os valores da stream e joga num 'cano' para poder reescrever a imagem
    .on('finish', () => {
        console.log('imagem escrita com sucesso')
    }) // metodo 'on' captura um evento especifico da stream, nesse caso o finish, e ele permite uma função de callback