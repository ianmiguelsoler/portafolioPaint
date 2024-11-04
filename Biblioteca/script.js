"use strict";
import {
  actualizarColorSeleccionado,
  generarCuadricula,
  pintarCelda,
  reiniciarCuadricula
} from './funciones.js';

document.addEventListener("DOMContentLoaded", () => {
  const colorCells = document.querySelectorAll(".color-selector");
  const selectedColorDisplay = document.getElementById("selected-color");
  const drawingGrid = document.getElementById("drawing-grid");
  const botonReiniciar = document.getElementById("reset-button");

  let selectedColor = "white";
  let isPainting = false;

  // Evento para seleccionar color.
  colorCells.forEach(cell => {
    cell.addEventListener("click", function () {
      document.querySelectorAll('.color-selector').forEach((el) => {
        el.classList.remove('selected');
      });
      this.classList.add('selected');
      actualizarColorSeleccionado(this);
      selectedColor = this.style.backgroundColor;
    });
  });

  // Generar la cuadrícula de dibujo de 60x50 celdas.
  const rows = 50;
  const cols = 60;
  generarCuadricula(drawingGrid, rows, cols, "white");

  // Añadir eventos para pintar celdas.
  drawingGrid.querySelectorAll("div").forEach(cell => {
    cell.addEventListener("click", () => {
      isPainting = !isPainting;
      pintarCelda(cell, selectedColor);
    });

    cell.addEventListener("mouseover", () => {
      if (isPainting) {
        pintarCelda(cell, selectedColor);
      }
    });
  });

  // Evento de reinicio de cuadrícula.
  botonReiniciar.addEventListener("click", () => {
    reiniciarCuadricula(drawingGrid, "white");
  });
});
