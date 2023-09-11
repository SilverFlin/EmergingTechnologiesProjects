import { COMMANDS } from "./index.js";
import readlineSync from "readline-sync";
import {
  addAlumno,
  addAlumnoALaCarrera,
  addCarrera,
  getAllCarreras,
  getAllAlumnos,
  deleteAlumnoById,
  deleteCarreraById,
  updateCarrera,
  updateAlumno,
} from "../models/index.js";
import { Alumno, Carrera } from "../classes/index.js";

function handleInputCommand() {
  const input = readlineSync.question("\n> ");
  try {
    const [command, option, ...argv] = getCommandAndOption(input);
    processCommand(command, option, ...argv);
  } catch (error) {
    console.log(error.message);
    handleInputCommand();
  }
}

function getCommandAndOption(input) {
  const [command, option, ...argv] = input.split(" ");

  if (!COMMANDS.find((c) => c.name === command)) {
    throw new Error(`El comando ${command ?? ""}no existe`);
  }

  if (!COMMANDS.find((c) => c.options.includes(option))) {
    throw new Error(`La opción ${option ?? ""} no existe`);
  }

  return [command, option, ...argv];
}

async function processCommand(command, option, ...argv) {
  switch (command) {
    case "carrera":
      await processCarreraCommand(option, argv);
      break;
    case "alumno":
      await processAlumnoCommand(option, argv);
      break;
  }
  handleInputCommand();
}

async function processCarreraCommand(option, argv) {
  switch (option) {
    case "-a":
    case "--add":
      const newCarrera = handleCarreraInput();
      await addCarrera(newCarrera)
        .then((carrera) => console.log(carrera))
        .catch((error) => console.log(error));
      break;

    case "-d":
    case "--delete":
      await deleteCarreraById(argv[0])
        .then((carrera) => console.log(carrera))
        .catch((error) => console.log(error));
      break;

    case "-u":
    case "--update":
      const updatedCarrera = handleCarreraInput();
      await updateCarrera(argv[0], updatedCarrera)
        .then((carrera) => console.log(carrera))
        .catch((error) => console.log(error.message));
      break;

    case "-l":
    case "--list":
      await getAllCarreras()
        .then((carreras) => console.log(carreras))
        .catch((error) => console.log(error));
      break;
  }
}

async function processAlumnoCommand(option, argv) {
  switch (option) {
    case "-a":
    case "--add":
      const alumno = handleAlumnoInput();
      await addAlumno(alumno)
        .then((alumno) => console.log(alumno))
        .catch((error) => console.log(error));
      break;

    case "-d":
    case "--delete":
      await deleteAlumnoById(argv[0])
        .then((alumno) => console.log(alumno))
        .catch((error) => console.log(error));
      break;

    case "-u":
    case "--update":
      const updatedAlumno = handleAlumnoInput();
      await updateAlumno(argv[0], updatedAlumno)
        .then((alumno) => console.log(alumno))
        .catch((error) => console.log(error.message));
      break;

    case "-l":
    case "--list":
      await getAllAlumnos()
        .then((alumnos) => console.log(alumnos))
        .catch((error) => console.log(error));
      break;
    case "-c":
    case "--carrera":
      await addAlumnoALaCarrera(argv[0], argv[1])
        .then((alumno) => console.log(alumno))
        .catch((error) => console.log(error));
  }
}

function handleAlumnoInput() {
  const alumno = new Alumno();
  alumno.fechaNacimiento = readlineSync.question("Fecha de nacimiento: ");
  alumno.nombre = readlineSync.question("Nombre: ");
  alumno.paterno = readlineSync.question("Apellido paterno: ");
  alumno.materno = readlineSync.question("Apellido materno: ");
  return alumno;
}

function handleCarreraInput() {
  const carrera = new Carrera();
  carrera.nombre = readlineSync.question("Nombre: ");
  return carrera;
}
export { handleInputCommand };
