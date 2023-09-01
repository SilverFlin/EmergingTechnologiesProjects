/** Hacer un programa que reciba del usuario entradas de
 * texto de manera continua hasta que el usuario digite 0.
 * Además, que indique cuando se ingresó una fecha
 * con formato dd/mm/aaaa (usar expresión regular).
 * Al terminar la entrada de datos (con el 0),
 * debe dar una lista de todas las fechas que ingresaron.
 * Las fechas deben de ser válidas.
 * Organizar el código en funciones.
 */
import readLine from "readline-sync";

run();

function run() {
  const dates = [];
  while (true) {
    let newInput = readLine.question(
      "\nIngrese una fecha con formato dd/mm/aaaa (0 para salir): "
    );

    if (newInput === "0") {
      break;
    }

    if (isDate(newInput)) {
      // dates.push(newInput);
      const dateParts = newInput.split("/");
      const day = dateParts[0];
      const month = dateParts[1];
      const year = dateParts[2];
      const date = new Date(year, month - 1, day);

      if (isNaN(date.getTime())) {
        console.log("Fecha no válida");
      } else {
        dates.push(date);
        console.log(`Fecha agregada: ${newInput}`);
      }
    } else {
      console.log("Fecha no válida");
    }
  }

  printDates(dates);

  if (dates.length === 0) {
    console.log("No se ingresaron fechas");
  } else {
    console.log("\nLas fechas ingresadas fueron:");
    printDates(dates);
  }
}

function isDate(input) {
  const dateRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
  return dateRegex.test(input);
}

function printDates(dates) {
  for (const date of dates) {
    if (date instanceof Date) {
      console.log(`Fecha: ${date.toDateString()}`);
    }
  }
}
