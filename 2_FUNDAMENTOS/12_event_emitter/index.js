//o EventEmitter se comporta como um evento no navegador
//Podemos ativar um código em alguns pontos da aplicação, como no início

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('Durante');
});

console.log('antes');
eventEmitter.emit('start');
console.log('Depois');
