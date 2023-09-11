// Hacer un programa que pueda registrar, modificar, eliminar y listar de alumnos y carreras, con las siguientes características.

//     Que permita ver un listado de alumnos y de carreras (por separado)
//     Debe contar con un menú en el que se pueda elegir la entidad y luego que permita decidir si se va a agregar, borrar o cambiar.
//     Debe existir una manera de asignar un alumno a una carrera.
//     Ordenar su código en clases y módulos.
//     Utilizar el manejo asíncrono para facilitar el desarrollo.

import { printMenu } from "./utils/menu.js";
import { handleInputCommand } from "./commands/input.js";

run();

function run() {
  printMenu();
  handleInputCommand();
}
