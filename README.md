# Pintarrajea 🎨
Este proyecto es una pequeña aplicación de dibujo, similar a un "paint", llamada **Pintarrajea**. Permite a los usuarios crear diseños y logotipos básicos eligiendo colores y haciendo clic sobre las celdas de una tabla en la pantalla. Este ejercicio fue desarrollado en JavaScript y HTML como parte de un portafolio para demostrar habilidades en **JavaScript ES6** y **manipulación del DOM**.

## Funcionalidad de Pintarrajea
La aplicación permite seleccionar colores y pintar sobre una cuadrícula de celdas. Los usuarios pueden:
1. Elegir un color de una paleta y aplicarlo en una cuadrícula.
2. Pintar con un clic inicial y continuar pintando con solo mover el cursor.
3. Cambiar el color de la cuadrícula haciendo clic nuevamente o elegir un nuevo color.
4. Borrar colores seleccionando el color blanco en la paleta de colores.
5. Reiniciar la cuadrícula con un botón que restablece todo a blanco.

## Cómo funciona la aplicación
1. **Selector de colores**: 
   - En la parte superior de la interfaz, se muestra una tabla con celdas de colores predefinidos. El usuario selecciona un color haciendo clic en una celda. Este color se aplica a todas las celdas que toque en la cuadrícula de la parte inferior hasta que se seleccione un nuevo color o se haga clic en una nueva celda para detener el efecto.
2. **Tabla de dibujo**:
   - La cuadrícula principal se genera de forma automática con 60x50 celdas de 10x10 px.
   - Al hacer clic en una celda, esta toma el color seleccionado. El usuario puede continuar pintando moviendo el ratón sobre otras celdas sin necesidad de hacer más clics.
3. **Botón de reinicio**:
   - Un botón en la parte inferior permite restablecer todas las celdas de la cuadrícula al color blanco.
   
## Tecnologías usadas
- **JavaScript (ES6)**: se utiliza para manejar la selección de colores, aplicar los eventos de pintura y reiniciar la cuadrícula.
- **HTML5**: estructura básica del selector de colores y la cuadrícula.
- **CSS**: diseño de estilo para que la cuadrícula tenga un aspecto similar al de un cuaderno de cuadrícula clásica (inspiración en cuadernos de Rubio).

## Ejecución del código
Todo el código de JavaScript se ejecuta dentro de la función `window.onload = () => {};` para asegurarse de que se ejecute una vez que el contenido esté completamente cargado. También se hace uso de:
- **`strict mode`** para mejorar la seguridad del código.
- **Eventos del DOM (`addEventListener`)** para controlar el clic en las celdas de la paleta y la cuadrícula.

## Instrucciones de uso
1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/pintarrajea.git
