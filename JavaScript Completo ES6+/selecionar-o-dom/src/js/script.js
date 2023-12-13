// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll('img')
console.log(imgs)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const img = document.querySelectorAll('img[src^="./src/img/imagem"]');
console.log(img)

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]')
console.log(links)
// Selecione o primeiro h2 dentro de .animais-descricao
const h2animais = document.querySelector('.animais-descricao')
console.log(h2animais)

// Selecione o último p do site
