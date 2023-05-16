const alumnos = [
      {nombre: 'Raul', edad: 25, curso: 'Diseño Web'},
      {nombre: 'Marta', edad: 20, curso: 'Java EE'},
      {nombre: 'Pablo', edad: 29, curso: 'Programación Orientada Objetos'},
      {nombre: 'Sandra', edad: 21, curso: 'Diseño Web'},
      {nombre: 'Marcos', edad: 25, curso: 'Java EE'}
  ]
  let mediaEdad = alumnos.reduce((edadTotal, alumno) => {
      return edadTotal + alumno.edad;
  }, 0);
  console.log(`La media de edad de los alumnos es ${mediaEdad/alumnos.length}`);
  