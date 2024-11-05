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

  // Alternar `isPainting` al hacer clic en una celda y pintar mientras `isPainting` esté activo.
  drawingGrid.addEventListener("click", (event) => {
    if (event.target.tagName === "DIV") {
      isPainting = !isPainting;  // Alterna el estado de `isPainting`.
      pintarCelda(event.target, selectedColor);  // Pinta la celda clicada.
    }
  });

  // Pintar celdas al pasar el ratón mientras `isPainting` esté activo.
  drawingGrid.addEventListener("mouseover", (event) => {
    if (isPainting && event.target.tagName === "DIV") {
      pintarCelda(event.target, selectedColor);
    }
  });

  // Evento de reinicio de cuadrícula.
  botonReiniciar.addEventListener("click", () => {
    reiniciarCuadricula(drawingGrid, "white");
    isPainting = false;  // Asegurarse de que `isPainting` esté desactivado al reiniciar.
  });
});
