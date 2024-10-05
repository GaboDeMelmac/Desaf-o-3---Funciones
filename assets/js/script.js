// Ejercicio 2

const btnValidar = document.querySelector("#btnValidar");

btnValidar.addEventListener("click", function () {
  const sticker_1 = document.querySelector("#sticker_1");
  const sticker_2 = document.querySelector("#sticker_2");
  const sticker_3 = document.querySelector("#sticker_3");

  const parrafo_resultado = document.getElementById("resultado_sticker");

  const valor1 = Number(sticker_1.value);
  const valor2 = Number(sticker_2.value);
  const valor3 = Number(sticker_3.value);

  alert("Llevas: " + Number(valor1 + valor2 + valor3) + " stickers");

  if (valor1 + valor2 + valor3 > 10) {
    parrafo_resultado.innerHTML = "Llevas demasiados stickers!!";
  } else {
    parrafo_resultado.innerHTML =
      "Llevas " + Number(valor1 + valor2 + valor3) + " stickers!!";
  }
});

// Ejercicio 3

const btnValidar2 = document.querySelector("#btnValidar_2");

btnValidar2.addEventListener("click", function () {
  const numero_1 = document.querySelector("#numero1");
  const numero_2 = document.querySelector("#numero2");
  const numero_3 = document.querySelector("#numero3");

  const parrafo_resultado2 = document.getElementById("resultado_pass");

  const key1 = numero_1.value;
  const key2 = numero_2.value;
  const key3 = numero_3.value;

  alert("Tu número es: " + key1 + key2 + key3);

  if (key1 + key2 + key3 === "911") {
    parrafo_resultado2.innerHTML = "password 1 correcto";
  } else if (key1 + key2 + key3 === "714") {
    parrafo_resultado2.innerHTML = "password 2 es correcto";
  } else {
    parrafo_resultado2.innerHTML = "password incorrecto";
  }
});
