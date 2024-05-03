let inputElement = document.querySelector("input")
let listElement = document.querySelector("ul")
let itemElement = listElement.querySelectorAll("li")

inputElement.addEventListener("input", (e) => {
    let inputed = e.target.value.toLowerCase()
    itemElement.forEach((li) => {
      let text = li.textContent.toLowerCase()
      if(text.includes(inputed)){
        li.style.display = "block"
      }else{
        li.style.display = "none"
      }
    })
  })

  const humidityElement = document.querySelector("#title span")

   // Lista de URLs de imagens de fundo aleatórias
const txtAleatorio = [
  "Batata",
  "Pão",
  "Ovo",
  "Café",
  ];

// Função para obter um número aleatório entre 0 e o comprimento da lista de imagens
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

// Função para definir uma imagem de fundo aleatória
function definirImagemAleatoria() {
  const randomIndex = getRandomIndex(txtAleatorio.length);
  const randomImageUrl = txtAleatorio[randomIndex];
  humidityElement.innerText = `${randomImageUrl}`;
}

// Chamando a função para definir a imagem de fundo aleatória quando a página é carregada
window.onload = definirImagemAleatoria;