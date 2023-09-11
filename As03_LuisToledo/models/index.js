import { Carrera, Alumno } from "../classes/index.js";

let currentAlumnoId = 240000;
let currentCarreraId = 0;
const carreras = [
  new Carrera(currentCarreraId++, "Ingeniería en Sistemas"),
  new Carrera(currentCarreraId++, "Ingeniería en Alimentos"),
];
const alumnos = [
  new Alumno(currentAlumnoId++, "Juan", "Perez", 20),
  new Alumno(currentAlumnoId++, "Pedro", "Gomez", 21),
];

function getCarreraById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const carrera = carreras.find((c) => c.id === +id);
      console.log(id);
      if (!carrera) {
        reject("No existe la carrera");
      }
      resolve(carrera);
    }, 500);
  });
}

function addCarrera(carrera) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!(carrera instanceof Carrera)) {
        reject("No es una carrera");
      }
      carrera.id = currentCarreraId++;
      carreras.push(carrera);
      resolve(carrera);
    }, 500);
  });
}

function getAllCarreras() {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(carreras);
    }, 1000);
  });
}

function getAlumnoById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const alumno = alumnos.find((a) => a.id === +id);
      if (!alumno) {
        reject("No existe el alumno");
      }
      resolve(alumno);
    }, 500);
  });
}

function addAlumno(alumno) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!(alumno instanceof Alumno)) {
        reject("No es un alumno");
      }
      alumno.id = currentAlumnoId++;
      alumnos.push(alumno);
      resolve(alumno);
    }, 500);
  });
}

function addAlumnoALaCarrera(idCarrera, idAlumno) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      let carrera;
      let alumno;

      await getCarreraById(+idCarrera)
        .then((c) => {
          carrera = c;
        })
        .catch((error) => reject(error));
      await getAlumnoById(+idAlumno)
        .then((a) => {
          alumno = a;
        })
        .catch((error) => reject(error));

      if (carrera) {
        carrera.agregarAlumno(alumno);
        resolve(alumno);
      }
    }, 500);
  });
}

function getAllAlumnos() {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(alumnos);
    }, 1000);
  });
}

function deleteAlumnoById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const alumno = alumnos.find((a) => a.id === +id);

      if (!alumno) {
        reject("No existe el alumno");
      }
      alumnos.splice(alumnos.indexOf(alumno), 1);

      resolve(alumno);
    }, 500);
  });
}

function deleteCarreraById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const carrera = carreras.find((c) => c.id === +id);

      if (!carrera) {
        reject("No existe la carrera");
      }
      carreras.splice(carreras.indexOf(carrera), 1);
      resolve(carrera);
    }, 500);
  });
}

function updateCarrera(id, carrera) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = carreras.findIndex((c) => c.id === +id);

      if (index === -1) {
        reject("No existe la carrera");
      }
      carrera.id = +id;
      carreras[index] = carrera;
      resolve(carrera);
    }, 500);
  });
}

function updateAlumno(id, alumno) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = alumnos.findIndex((a) => a.id === +id);

      if (index === -1) {
        reject("No existe el alumno");
      }
      alumno.id = +id;
      alumnos[index] = alumno;
      resolve(alumno);
    }, 500);
  });
}

export {
  addCarrera,
  addAlumno,
  getAllCarreras,
  addAlumnoALaCarrera,
  getAllAlumnos,
  deleteAlumnoById,
  deleteCarreraById,
  updateCarrera,
  updateAlumno,
};
