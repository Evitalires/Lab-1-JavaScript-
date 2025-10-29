// 1. Variables y Tipos de Datos

// Ejercicio 1:
const nombre = "Jair";
let edad = "30";
let esEstudiante = true;

// Ejercicio 2
let sinValor
let valorNulo = null;
console.log("sinValor = ", sinValor);
console.log("valorNulo = ", valorNulo);

// 2 Ingreso de Datos por Teclado

const prompt = require("prompt-sync")();

//  Ejercicio 1
let nacimiento = prompt("Escribe su año de nacimiento: ");
let edadCalculada = 2025 - nacimiento;
console.log("Su edad para el 2025 será: ", edadCalculada);

//Ejercicio 2
numero1 = prompt("Escriba el primer número: " );
numero2 = prompt("Escriba el segundo número: " );
suma = numero1 + numero2;
console.log("La suma de ", numero1, " y ", numero2, "es :", suma);

