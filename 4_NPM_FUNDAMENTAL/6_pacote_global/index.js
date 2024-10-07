//Um pacote global não fica salvo na pasta node_modules do projeto
//ele fica salvo no computador do usuário
//A vantagem é que podemos acessá-lo em qualquer local via terminal
//utilizando a flag -g em node install

const _ = require('lodash');

const arr = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,];

console.log(_.sortedUniq(arr));

//alguns pacotes são scripts executáveis, que resultam em alguma ação no nosso computador
//Como por exemplo a instalação do React, que é feita pelo npx
//Desta maneira uma série de processos são simplificados por este executor

//Para remover um pacote utilizamos o comando: npm uninstall <nome>
//Isso faz com que o pacote seja removido do package.json também