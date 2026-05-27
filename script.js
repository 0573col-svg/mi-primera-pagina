let contador = 0;

const numero = document.querySelector("#numero");
const botonSumar = document.querySelector("#boton-sumar");
const botonRestar = document.querySelector("#boton-restar");
const botonReset = document.querySelector("#boton-reset");

botonSumar.addEventListener("click", () => {
  contador = contador + 1;
  numero.textContent = contador;
});

botonRestar.addEventListener("click", () => {
  contador = contador - 1;
  numero.textContent = contador;
});

botonReset.addEventListener("click", () => {
  contador = 0;
  numero.textContent = contador;
});