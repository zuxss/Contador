//Contador en 0
let contador = 0;
//Tomar elementos del DOM
const valor = document.querySelector("#value");
const botones = document.querySelectorAll(".btn");

botones.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const estilos = e.currentTarget.classList;
    //Configuracion de los botones
    if (estilos.contains("decrease")) {
      contador--;
    } else if (estilos.contains("increase")) {
      contador++;
    } else {
      contador = 0;
    }
    //Cambio de Colores
    if (contador > 0) {
      valor.style.color = "green";
    } else if (contador < 0) {
      valor.style.color = "red";
    } else {
      valor.style.color = "black";
    }
    valor.textContent = contador;
  });
});
