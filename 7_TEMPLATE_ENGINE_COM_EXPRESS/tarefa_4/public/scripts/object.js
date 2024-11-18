const btn = document.querySelector("button");





btn.addEventListener("click", () => {
    const title = prompt("Digite o nome do produto: ");
    const price = prompt("Digite o preço do produto: ");
    const id = products.length + 1;

    products.push({id, title, price});
});
