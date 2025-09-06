const circulo = document.getElementById("circulo").querySelector("img");
const shake1 = document.getElementById("shake1");
const shake2 = document.getElementById("shake2");
const shake3 = document.getElementById("shake3");

// Função para trocar imagem e animar
function trocarCopo(imgSrc) {
  circulo.src = imgSrc;

  // Remove a classe se já tiver, para poder reativar
  circulo.classList.remove("animate");

  // Força o navegador a recalcular o layout (reflow)
  void circulo.offsetWidth;
  
  // Adiciona a classe de animação (imediatamente após o reflow)
  circulo.classList.add("animate");
  
  // Opcional: Remove a classe depois para poder reutilizar em cliques rápidos
  // A animação já termina sozinha, mas isso garante que possa ser reativada
  setTimeout(() => {
    circulo.classList.remove("animate");
  }, 300); // Duração deve ser igual à da animação em CSS
}

shake1.addEventListener("click", () => trocarCopo("img1.png"));
shake2.addEventListener("click", () => trocarCopo("img2.png"));
shake3.addEventListener("click", () => trocarCopo("img3.png"));









