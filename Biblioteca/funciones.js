"use strict";

// Función para actualizar el color de fondo y el texto en el div #selected-color.
const actualizarColorSeleccionado = (colorElemento) => {
  const selectedColor = window.getComputedStyle(colorElemento).backgroundColor;
  const selectedColorDiv = document.getElementById('selected-color');

  selectedColorDiv.style.backgroundColor = selectedColor;
  const isLightColor = esColorClaro(selectedColor);
  selectedColorDiv.style.color = isLightColor ? '#000' : '#fff';
  selectedColorDiv.textContent = `Color seleccionado: ${obtenerNombreColor(selectedColor)}`;
};

// Función para verificar si el color es claro u oscuro.
const esColorClaro = (rgb) => {
  const [r, g, b] = rgb.match(/\d+/g).map(Number);
  const brillo = (r * 299 + g * 587 + b * 114) / 1000;
  return brillo > 128;
};

// Función para obtener el nombre del color basado en su valor RGB.
const obtenerNombreColor = (rgb) => {
  const colores = {
    "rgb(255, 0, 0)": "Rojo",
    "rgb(0, 0, 255)": "Azul",
    "rgb(0, 128, 0)": "Verde",
    "rgb(255, 255, 0)": "Amarillo",
    "rgb(0, 0, 0)": "Negro",
    "rgb(255, 255, 255)": "Blanco"
  };
  return colores[rgb] || "Desconocido";
};

// Función para generar una cuadrícula de celdas de dibujo.
const generarCuadricula = (drawingGrid, filas, columnas, colorInicial) => {
  for (let i = 0; i < filas * columnas; i++) {
    const cell = document.createElement("div");
    cell.classList.add('clase-blanco-inicial');
    cell.style.backgroundColor = colorInicial;
    drawingGrid.appendChild(cell);
  }
};

// Función para pintar una celda con el color seleccionado.
const pintarCelda = (cell, colorSeleccionado) => {
  cell.style.backgroundColor = colorSeleccionado;
};

// Función para reiniciar la cuadrícula al color inicial.
const reiniciarCuadricula = (drawingGrid, colorInicial) => {
  drawingGrid.querySelectorAll("div").forEach(cell => {
    cell.style.backgroundColor = colorInicial;
  });
};



// Exportar todas las funciones
export {
  actualizarColorSeleccionado,
  esColorClaro,
  obtenerNombreColor,
  generarCuadricula,
  pintarCelda,
  reiniciarCuadricula
};
