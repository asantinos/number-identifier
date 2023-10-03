/**
 * @author Alejandro Santos
 *
 * Github repository: https://github.com/asantinos/number-identifier
 */

let numero = prompt("Ingresa un número:");
numero = parseFloat(numero);

if (!isNaN(numero)) {
  if (numero > 0) {
    console.log("El número ingresado es positivo.");
    alert("El número ingresado es positivo.");
  } else if (numero < 0) {
    console.log("El número ingresado es negativo.");
    alert("El número ingresado es negativo.");
  } else {
    console.log("El número ingresado es igual a cero.");
    alert("El número ingresado es igual a cero.");
  }
} else {
  alert("No ingresaste un número válido.");
}
