const fs = require('fs'); // FS = File System , faremos upload atraves de um buffer

fs.readFile('./assets/1.jpg', (erro, buffer) => { // le o arquivo e transforma em bytes
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
})