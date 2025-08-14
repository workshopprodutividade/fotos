// Gera a lista de imagens
const imagens = [];
for (let i = 1; i <= 199; i++) {
  imagens.push(`foto (${i}).jpeg`);
}

// Ordena numericamente
imagens.sort((a, b) => {
  const numA = parseInt(a.match(/\d+/)[0]);
  const numB = parseInt(b.match(/\d+/)[0]);
  return numA - numB;
});

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
