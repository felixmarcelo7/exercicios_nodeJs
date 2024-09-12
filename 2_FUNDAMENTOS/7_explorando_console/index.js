//mas de um valor
const x = 10;
const y = "João";
const z = [1, 2];

console.log(x, y, z);

//contagem de impressões: mais usado em loops
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);

//variável entre strings
console.log('O nome é %s, ele é programador', y);

//limpa o console
setTimeout(() => {
    console.clear();
}, 2000);
