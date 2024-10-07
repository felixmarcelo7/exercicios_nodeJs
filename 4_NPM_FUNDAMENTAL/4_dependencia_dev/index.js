//há uma possibilidade de instalar pacotes apenas para o ambiente de desenvolvimento
//Utilizamos a flag --save-dev
//isso faz com que ele seja separado no package.json dos demais
//então na build de produção não instalaremos estes módulos
//um exemplo: servidor para ambientelocal como o Nodemon;

const _ = require('lodash');
const chalk = require('chalk');

const a = [1, 2, 3, 4, 5, 6];
const b = [5, 6, 7, 8, 9];

const diff = _.difference(a, b);

console.log(chalk.bgRed.bold(diff));

//Constantemente os pacotes do npm são atualizados
//temos então ocomando npm update
//que vi fazer a atulização de todos os pacotes instalados no package.json
//é possível atualizar um pacote específico com 'npm update <nome>'
//para checar se existe novas versões se o npm update n funcionar 'npx npm-check-updates -u'

//É possível criar rotinas com o npm também
//utilizamos npm run <script>
//no package.json em 'script' adicione o 'start': '<script>'