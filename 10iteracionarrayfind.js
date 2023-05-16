const alumnos = [
      {nombre: 'Raul', edad: 25, curso: 'Diseño Web'},
      {nombre: 'Marta', edad: 20, curso: 'Java EE'},
      {nombre: 'Pablo', edad: 29, curso: 'Programación Orientada Objetos'},
      {nombre: 'Sandra', edad: 21, curso: 'Diseño Web'},
      {nombre: 'Marcos', edad: 25, curso: 'Java EE'}
  ]
  const estudia1 = alumnos.find(alumno => {
      return alumno.curso === 'Programación Orientada Objetos';
  })
  console.log(estudia1.nombre);
  const estudia2 = alumnos.find(alumno => {
      return alumno.curso === 'Java EE';
  })
  console.log(estudia2);
  