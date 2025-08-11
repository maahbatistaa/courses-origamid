const frase = "Front end";
const preco = 500;
const condi = preco > 100;

if (typeof frase === "string") {
  console.log("frase é string");
}
if (typeof preco === "number") {
  console.log("preco é number");
}
if (typeof condi === "boolean") {
  console.log("condi é boolean");
}

const frase1 = new String("Front End");
const frase2 = String("Front End");
const frase3 = "Front End";

console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);
