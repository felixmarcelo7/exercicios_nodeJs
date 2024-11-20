const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const title = prompt("Digite o nome do produto: ");
  const price = Number(prompt("Digite o preço do produto: "));

  const newProduct = { title, price };

  if (title === null || isNaN(price) || price === 0) {
    return;
  } else {
    fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }).catch((error) => {
      console.error("Erro ao enviar os dados:", error);
    });

    window.location.reload();
  }
});
