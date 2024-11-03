"use strict";

document.addEventListener("DOMContentLoaded", () => {
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
