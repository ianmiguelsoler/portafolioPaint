"use strict";
import {
  actualizarColorSeleccionado,
  generarCuadricula,
  pintarCelda,
  reiniciarCuadricula,
} from "./funciones.js";

document.addEventListener("DOMContentLoaded", () => {
  const colorTable = document.querySelector("section:first-of-type table");
  const drawingGrid = document.getElementById("drawing-grid");
  const botonReiniciar = document.getElementById("reset-button");

  let selectedColor = "white";
  let isPainting = false;

  // Delegación de eventos para seleccionar color.
  colorTable.addEventListener("click", (event) => {
    if (event.target.classList.contains("color-selector")) {
      document.querySelectorAll(".color-selector").forEach((el) => {
        el.classList.remove("selected");
      });
      event.target.classList.add("selected");
      actualizarColorSeleccionado(event.target);
      selectedColor = event.target.style.backgroundColor;
    }
  });

  // Generar la cuadrícula de dibujo de 60x50 celdas.
  const rows = 50;
  const cols = 60;
  generarCuadricula(drawingGrid, rows, cols, "white");

  // Función para activar los eventos de pintura en la cuadrícula.
  const activarPintura = () => {
    drawingGrid.querySelectorAll("div").forEach((cell) => {
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
  };

  activarPintura(); // Activar eventos de pintura en las celdas.

  // Evento de reinicio de cuadrícula.
  botonReiniciar.addEventListener("click", () => {
    reiniciarCuadricula(drawingGrid, "white");
  });
});
