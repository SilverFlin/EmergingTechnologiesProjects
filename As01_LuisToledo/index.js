/**
 * Hacer un programa que lea una serie de números enteros positivos
 * del teclado y calcule el valor máximo de los mismos y cuántas veces
 * aparece dicho valor repetido. La entrada de datos finalizará cuando
 *  se introduzca un 0.
 */

import readLine from "readline-sync";

run();

function run() {
  console.log("Ingresa un numero positivo para comenzar");

  const input = [];
  let currentMax = 0;
  let countOfMax = 0;

  while (true) {
    let newNumber = readLine.questionInt(
      "\nIngrese un numero (0 para salir): ",
      {
        limitMessage: "Por favor ingrese un numero positivo",
        limit: (input) => input >= 0,
      }
    );

    if (newNumber === 0) {
      break;
    }

    input.push(newNumber);
    console.log(
      `El numero ingresado es ${newNumber}, se agregó a la lista ${input}`
    );

    if (newNumber > currentMax) {
      currentMax = newNumber;
      countOfMax = 1;
      continue;
    }

    if (newNumber === currentMax) {
      countOfMax++;
    }
  }

  console.log(
    `El numero maximo es ${currentMax} y se repite ${countOfMax} veces`
  );
}
