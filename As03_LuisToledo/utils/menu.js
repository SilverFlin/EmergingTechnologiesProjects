function printMenu() {
  console.log("Comandos");

  console.log("carrera [OPTION]... [ID]...");
  console.log("-a, --add");
  console.log("-d, --delete");
  console.log("-u, --update");
  console.log("-l, --list");

  console.log("\nalumno [OPTION]... [ID]...");
  console.log("-a, --add");
  console.log("-d, --delete");
  console.log("-u, --update");
  console.log("-l, --list");
  console.log("-c, --carrera [ID CARRERA] [ID ALUMNO]");
}

export { printMenu };
