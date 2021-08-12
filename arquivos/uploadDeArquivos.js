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

// NO MODO ACIMA, BUFFER É SINCRONO, ELE INTERROMPE A EXECUÇÃO DE CÓDIGOS, ENTÃO USAREMOS STREAM, QUE É ASYNC

fs.createReadStream('./assets/1.jpg') // Uma stream funciona através da emissão de eventos
    .pipe(fs.createWriteStream('./assets/2.jpg')) // Cria uma stream e pega os valores da stream e joga num 'cano' para poder reescrever a imagem
    .on('finish', () => {
        console.log('imagem escrita com sucesso')
    }) // metodo 'on' captura um evento especifico da stream, nesse caso o finish, e ele permite uma função de callback


// COMO FUNCIONA O ASYNC E EVENT LOOPER

/* 
Antes de mais nada, algo assíncrono acontecerá em paralelo com outros processos. 
Então, se algo está acontecendo, ao invés de primeiro tudo terminar de acontecer
em uma linha temporal, sairemos dessa linha e outro procedimento ocorrerá ao mesmo tempo.
Só que isso pode ser um pouco confuso, já que o Node é Single Thread, ou seja, só tem a 
capacidade de executar uma coisa de cada vez. 

Mas isso não é exatamente verdade.
O que é de fato Single Thread é o V8, o motor que roda o Node. 
Ainda assim, conseguiremos transferir eventos assíncronos para
outros lugares e trabalhar de forma assíncrona.

Vamos supor que temos nosso código Javascript e alguns eventos, três deles síncronos e outros dois assíncronos.

Nossa Stack JS representará tudo o que será executado pelo Javascript. Ele lerá todo o código e executará o que for síncrono,
por ser o que precisará de uma sequência, e só depois o que for assíncrono, mesmo que a resposta seja instantânea.

Esses dois eventos assíncronos não serão executados pelo motor do Javascript em si, mas por um terceiro. 
Quem será esse terceiro? Se usarmos o Javascript no Web Browser, ele poderá ser executado por uma Web EPI. 
Outra possibilidade é que eles sejam executados pela EPI do C++, por exemplo, entre outros lugares onde conseguimos executá-los.
Depois de serem executados, ele voltam para uma fila de callback para poder entrar no fluxo normal do código
*/