//garante que a execução do código seja sequnacial
function a() {
    console.log('executando a()');
}
function b() {
    console.log('executando b()');
}
function c() {
    console.log('executando c()');
    
}

c();
a()
b()
