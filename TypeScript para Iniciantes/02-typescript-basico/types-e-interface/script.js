"use strict";
async function fetchProduct() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const data = await response.json();
    console.log(data);
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>${data.preco}</p>
      <div>
        <h3>Fabricante: ${data.empresaFabricante.nome}</h2>
      </div>
      <div>
        <h3>Montadora: ${data.empresaMontadora.nome}</h2>
      </div>
    </div>
  `;
}
