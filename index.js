// Aguarda até que a página carregue completamente
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona a imagem pelo nome da classe
    const imgElement = document.querySelector(".project_img");

    // Define os caminhos das imagens
    const originalSrc = "./img/logonutriperry.png";  // Caminho da imagem original
    const hoverSrc = "./img/NutriPerryScreen.JPG";        // Caminho da imagem ao passar o mouse

    // Adiciona um evento para mudar a imagem quando o mouse passa por cima
    imgElement.addEventListener("mouseenter", function () {
        imgElement.src = hoverSrc;
    });

    // Adiciona um evento para restaurar a imagem original quando o mouse sai
    imgElement.addEventListener("mouseleave", function () {
        imgElement.src = originalSrc;
    });
});
