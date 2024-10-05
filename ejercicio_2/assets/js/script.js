// ---------Funión original pregunta 2.1------------------------
function pintar(color = "green") {
  ele.style.backgroundColor = color;
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);

// --------------Cambio de Función preunta 2.2 - Función Anónima-------------
function pintar2() {
  ele.style.backgroundColor = "yellow";
}
ele.addEventListener("click", function () {
  pintar2();
});

// // ---------------Cambio de Funión pregunta 2.3 --------------------------
// Agrega el color verde por defeto y lo cambia a amarillo
function pintar3(color = "green") {
  ele.style.backgroundColor = color;
}
ele.addEventListener("click", function () {
  pintar3("yellow");
});
