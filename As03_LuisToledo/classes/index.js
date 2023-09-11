class Alumno {
  constructor(id, paterno, materno, nombre, fechaNacimiento, carrera) {
    this.id = id;
    this.nombre = nombre;
    this.paterno = paterno;
    this.materno = materno;
    this.fechaNacimiento = fechaNacimiento;
    this.carrera = carrera;
  }
}

class Carrera {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
    this.alumnos = [];
  }

  agregarAlumno(alumno) {
    if (alumno.carrera !== this) {
      this.alumnos.push(alumno);
      alumno.carrera = this;
    }
  }

  eliminarAlumno(id) {
    const alumno = this.alumnos.find((alumno) => alumno.id === id);
    const index = this.alumnos.indexOf(alumno);
    this.alumnos.splice(index, 1);
    alumno.carrera = null;
  }
}

export { Alumno, Carrera };
