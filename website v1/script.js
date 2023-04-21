// script.js

const mainImage = document.getElementById('center-image');
const icons = document.querySelectorAll('#icons img');


  mainImage.addEventListener("mouseover", () => {
    mainImage.src = "images/hoverimg.png";
  });

  mainImage.addEventListener("mouseout", () => {
    mainImage.src = "images/hovernone.png";
  });


icons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    const newImage = icon.getAttribute('data-img');
    mainImage.setAttribute('src', newImage);
  });

  icon.addEventListener("mouseout", () => {
    mainImage.src = "images/hovernone.png";
  });
});