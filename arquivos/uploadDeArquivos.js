const fs = require('fs'); // FS = File System , faremos upload atraves de um buffer

fs.readFile('../assets/1.jpg', (erro, buffer) => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('inicio do buffer')
        console.log(buffer)
        console.log('fim do buffer')
    }
})