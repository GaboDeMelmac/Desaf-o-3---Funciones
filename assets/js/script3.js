ubi = prompt("Ingrese ubicacion inmueble");
depto = prompt("N° de depto");
comuna = prompt("ingrese la comuna");

var resp1 = document.querySelector(".ubic");
resp1.innerHTML = ubi;

var resp2 = document.querySelector(".depto");
resp2.innerHTML = depto;

var resp3 = document.querySelector(".comuna");
resp3.innerHTML = comuna;
