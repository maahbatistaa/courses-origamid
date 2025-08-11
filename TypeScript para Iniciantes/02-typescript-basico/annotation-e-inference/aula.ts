let produto = "Livro";
let preco = 200;

const carro = {
  marca: "Audi",
  portas: 4,
};

const barato = preco < 400 ? true : "produto caro";

function somar(a: number, b: number) {
  return a + b;
}

// somar("3", "4");
somar(4, 5);

const nitendo = {
  nome: "Nitendo",
  preco: "2000",
};

function transformarPreco(produto: { nome: string; preco: string }) {
  produto.preco = "R$ " + produto.preco;
  return produto;
}

const produtoNovo = transformarPreco(nitendo);
console.log(produtoNovo);
