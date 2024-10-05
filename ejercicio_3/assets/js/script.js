//----------------------- Pregunta 3.2-------------------------
// --- Forma 1 crea la funcion y la llama
const divblue0 = document.getElementById("div_blue");
const pintarfondo = function (color = "black") {
  divblue0.style.backgroundColor = color;
};
divblue0.addEventListener("click", function () {
  pintarfondo();
});

// ---Forma 2 con Arrow Function (mas corto)
const divblue = document.getElementById("div_blue");
divblue.addEventListener(
  "click",
  () => (divblue.style.backgroundColor = "black")
);

const divred = document.getElementById("div_red");
divred.addEventListener(
  "click",
  () => (divred.style.backgroundColor = "black")
);

const divgreen = document.getElementById("div_green");
divgreen.addEventListener(
  "click",
  () => (divgreen.style.backgroundColor = "black")
);

const divyellow = document.getElementById("div_yellow");
divyellow.addEventListener(
  "click",
  () => (divyellow.style.backgroundColor = "black")
);

//----------------------- Pregunta 3.3-------------------------
// Variable Global
var box1 = document.getElementById("key");

function guardar_color(color) {
  // Obtenemos el elemento contenedor por su ID
  box1.style.backgroundColor = color;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    /* Cambiar a color 1 */
    guardar_color("pink");
  } else if (event.key === "s" || event.key === "S") {
    /* Cambiar a color 2 */
    guardar_color("orange");
  } else if (event.key === "d" || event.key === "D") {
    /* Cambiar a color 3 */
    guardar_color("skyblue");
  }
});

//----------------------- Pregunta 3.4-------------------------

function agregarElemento(color) {
  // Obtenemos el elemento contenedor por su ID
  const box2 = document.getElementById("key2");
  // Creamos un nuevo elemento <div>
  const nuevoElemento = document.createElement("div");
  //   // Asignamos un texto al nuevo elemento
  //   nuevoElemento.textContent = "Elemento agregado";
  // Agregamos el nuevo elemento al contenedor
  box2.appendChild(nuevoElemento);
  box2.style = "width: 200px; height: 200px";
  box2.style.background = color; // Cambiamos el color de fondo
}

document.addEventListener("keydown", function (event) {
  if (event.key === "q" || event.key === "Q") {
    /* Cambiar a color 1 */
    agregarElemento("purple");
  } else if (event.key === "w" || event.key === "W") {
    /* Cambiar a color 2 */
    agregarElemento("gray");
  } else if (event.key === "e" || event.key === "E") {
    /* Cambiar a color 3 */
    agregarElemento("brown");
  }
});
