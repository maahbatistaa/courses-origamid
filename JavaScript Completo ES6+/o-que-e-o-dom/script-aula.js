// window.alert('isso mesmo')

const href = window.location.href;
console.log(href);

if (
  href ===
  'http://127.0.0.1:5500/JavaScript%20Completo%20ES6+/dom-para-iniciantes/o-que-e-o-dom/index.html'
) {
  console.log('é igual');
}

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

function callbackh1() {
  console.log('Clicou em ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callbackh1);
