// Lista das imagens (adicione os nomes das fotos que estão na pasta "fotos")
const imagens = [
  "foto (67).jpeg",
  "foto (68).jpeg",
  "foto (69).jpeg",
  // ... adicionar todas
];

const thumbsContainer = document.getElementById("thumbs");
const mainImage = document.getElementById("mainImage");

// Função para trocar a foto principal
function mostrarImagem(src) {
  mainImage.src = `fotos/${src}`;
}

// Monta as miniaturas
imagens.forEach((img, index) => {
  const thumb = document.createElement("img");
  thumb.src = `fotos/${img}`;
  thumb.classList.add("img-fluid");
  thumb.addEventListener("click", () => mostrarImagem(img));
  thumbsContainer.appendChild(thumb);

  // Primeira imagem já vai para a principal
  if (index === 0) {
    mostrarImagem(img);
  }
});
