"use strict";

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll('.color-selector').forEach((color) => {
    color.addEventListener('click', function () {
      // Quitar la clase 'selected' de todos los elementos
      document.querySelectorAll('.color-selector').forEach((el) => {
        el.classList.remove('selected');
      });
      // Agregar la clase 'selected' solo al elemento actual
      this.classList.add('selected');
      // Actualizar el texto del color seleccionado
      const selectedColor = window.getComputedStyle(this).backgroundColor;
      document.getElementById('selected-color').textContent = `Color seleccionado: ${selectedColor}`;
    });
  });
  

  document.querySelectorAll('.color-selector').forEach((color) => {
    color.addEventListener('click', function () {
      // Quitar la clase 'selected' de todos los elementos
      document.querySelectorAll('.color-selector').forEach((el) => {
        el.classList.remove('selected');
      });
      // Agregar la clase 'selected' solo al elemento actual
      this.classList.add('selected');
      
      // Actualizar el color de fondo en el div #selected-color
      const selectedColor = window.getComputedStyle(this).backgroundColor;
      const selectedColorDiv = document.getElementById('selected-color');
      
      selectedColorDiv.style.backgroundColor = selectedColor;
      
      // Cambiar el color del texto según el fondo (blanco o negro)
      const isLightColor = checkIfLightColor(selectedColor);
      selectedColorDiv.style.color = isLightColor ? '#000' : '#fff';
      
      // Mostrar el nombre del color
      selectedColorDiv.textContent = `Color seleccionado: ${getColorName(selectedColor)}`;
    });
  });
  
  // Función para verificar si el color es claro u oscuro
  function checkIfLightColor(rgb) {
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    // Calcular el brillo usando una fórmula de percepción
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128;
  }
  
  // Función para obtener el nombre del color (esto es una simplificación)
  function getColorName(rgb) {
    const colors = {
      "rgb(255, 0, 0)": "Rojo",
      "rgb(0, 0, 255)": "Azul",
      "rgb(0, 128, 0)": "Verde",
      "rgb(255, 255, 0)": "Amarillo",
      "rgb(0, 0, 0)": "Negro",
      "rgb(255, 255, 255)": "Blanco"
    };
    return colors[rgb] || "Desconocido";
  }
  
  // Variables
  let selectedColor = "white"; // Color seleccionado inicialmente es blanco
  let isPainting = false; // Estado para indicar si se está pintando

  // Selecciona los elementos
  const colorCells = document.querySelectorAll(".color-selector");
  const selectedColorDisplay = document.getElementById("selected-color");
  const drawingGrid = document.getElementById("drawing-grid");
  const botonReiniciar = document.getElementById("reset-button");

  // Función para actualizar el color seleccionado
  colorCells.forEach(cell => {
    cell.addEventListener("click", () => {
      selectedColor = cell.style.backgroundColor; // Cambia el color seleccionado
      selectedColorDisplay.textContent = `Color seleccionado: ${selectedColor}`; // Muestra el color seleccionado
    });
  });

  // Genera la cuadrícula de dibujo de 60x50 celdas
  const rows = 50;
  const cols = 60;

  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add('clase-blanco-inicial');
    cell.style.backgroundColor = "white"; // Color inicial de las celdas

    // Cambia el color de la celda al hacer clic
    cell.addEventListener("click", () => {
      isPainting = !isPainting; // Alterna el estado de pintar
      cell.style.backgroundColor = selectedColor; // Pinta la celda actual
    });

    // Cambia el color de la celda al pasar el ratón sin necesidad de hacer clic adicional
    cell.addEventListener("mouseover", () => {
      if (isPainting) { // Solo pinta si está en modo de pintar
        cell.style.backgroundColor = selectedColor;
      }
    });

    drawingGrid.appendChild(cell);
  }

  // Funcionalidad del botón de reinicio
  botonReiniciar.addEventListener("click", () => {
    // Establece todas las celdas de la cuadrícula de vuelta al color blanco
    drawingGrid.querySelectorAll("div").forEach(cell => {
      cell.style.backgroundColor = "white";
    });
  });
});
